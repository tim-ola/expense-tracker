import { createContext, useState, useEffect } from "react";

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });
  const [expenseEdit, setExpenseEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const deleteExpense = (id) => {
    if (expenseEdit.item.id === id) {
      setExpenseEdit({
        item: {},
        edit: false,
      });
    }
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  const addExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const totalExpense = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0,
  );

  const editExpense = (item) => {
    setExpenseEdit({
      item: item,
      edit: true,
    });
  };

  const updateExpense = (id, updatedItem) => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === id ? { ...expense, ...updatedItem } : expense,
      ),
    );
    setExpenseEdit({
      item: {},
      edit: false,
    });
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        expenseEdit: expenseEdit,
        deleteExpense: deleteExpense,
        editExpense: editExpense,
        addExpense: addExpense,
        totalExpense: totalExpense,
        updateExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
