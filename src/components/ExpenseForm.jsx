import { useState, useEffect, useContext } from "react";
import Card from "../shared/Card";
import ExpenseContext from "../context/ExpenseContext";

function ExpenseForm() {
  const { addExpense, expenseEdit, updateExpense } = useContext(ExpenseContext);
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [category, setCategory] = useState("Food");

  useEffect(() => {
    if (expenseEdit.edit === true) {
      setDesc(expenseEdit.item.description);
      setAmount(expenseEdit.item.amount.toString());
      setCategory(expenseEdit.item.category);
    }
  }, [expenseEdit]);

  useEffect(() => {
    if (expenseEdit.edit === true) {
    } else {
      setDesc("");
      setAmount("");
      setError("");
      setCategory("Food");
    }
  }, [expenseEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = parseFloat(amount);
    if (desc.trim() === "" || isNaN(value) || value <= 0 || category === "") {
      setError("Please enter a valid description, amount, and category");
      return;
    }
    if (expenseEdit.edit === true) {
      updateExpense(expenseEdit.item.id, {
        description: desc.trim(),
        amount: value,
        category: category,
      });
    } else {
      addExpense({
        id: Date.now(),
        description: desc.trim(),
        amount: value,
        category: category,
        date: new Date().toISOString(),
      });
    }
    setDesc("");
    setAmount("");
    setError("");
    setCategory("Food");
  };

  const isFormFilled =
    desc.trim() !== "" && amount.trim() !== "" && category !== "";

  return (
    <Card>
      {error && <p className="error">{error} </p>}
      <form onSubmit={handleSubmit}>
        <input
          className="text-input"
          type="text"
          placeholder="What did you spend on?"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          className="amount-input"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          className="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          <option value="Food">Food</option>
          <option value="Toiletries">Toiletries</option>
          <option value="transportation">Transportation</option>
          <option value="Wardrobe">Wardrobe</option>
          <option value="entertainment">Entertainment</option>
          <option value="Savings">Savings</option>
          <option value="Others">Others</option>
        </select>
        <button
          type="submit"
          className={`submit ${isFormFilled ? "ready" : ""}`}
        >
          {expenseEdit.edit === true ? "Update Expense" : "Add Expense"}
        </button>
      </form>
    </Card>
  );
}

export default ExpenseForm;
