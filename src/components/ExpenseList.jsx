import Card from "../shared/Card";
import { FaEdit, FaTimes } from "react-icons/fa";
import { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";
import { AnimatePresence, motion } from "framer-motion";

function ExpenseList() {
  const { expenses, deleteExpense, editExpense } = useContext(ExpenseContext);

  if (expenses.length === 0) {
    return (
      <Card>
        <h3>No expenses</h3>
      </Card>
    );
  }

  return (
    <div>
      <AnimatePresence>
        {expenses.map((expense) => (
          <motion.div
            key={expense.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <Card>
              <div className="expense_list text-start">
                <ul>
                  <li>
                    <div className="expense_details">
                      <div className="expense_item">{`Item: ${expense.description}`}</div>
                      <div className="expense_amount">{`Amount: ₦${expense.amount.toFixed(2)}`}</div>
                      <div className="expense_category">{`Category: ${expense.category}`}</div>
                    </div>
                  </li>
                </ul>

                <div className="button_group">
                  <button
                    className="edit"
                    onClick={() => {
                      editExpense(expense);
                    }}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="close"
                    onClick={() => {
                      if (window.confirm(`Delete ${expense.description}?`)) {
                        deleteExpense(expense.id);
                      }
                    }}
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
              <div className="expense_date text-start">
                <h6>{`Date: ${new Date(expense.date).toLocaleString("en-NG", { dateStyle: "medium", timeStyle: "short" })}`}</h6>
              </div>
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default ExpenseList;
