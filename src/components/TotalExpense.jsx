import { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";

function TotalExpense() {
  const { totalExpense } = useContext(ExpenseContext);

  return (
    <div className="total-expense">
      TotalExpense: ₦{totalExpense.toFixed(2)}
    </div>
  );
}

export default TotalExpense;
