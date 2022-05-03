import { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const newExpenseDataHandler = (newExpenseData) => {
    const expenseData = { ...newExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const hideFormHandler = () => {
    setShowForm(false);
  };

  const showFormHandler = () => {
    setShowForm(true);
  }

  return (
    <div className="new-expense">
      {!showForm && (
        <div>
          <button onClick={showFormHandler}>Add New Expense</button>
        </div>
      )}
      {showForm && (
        <NewExpenseForm
          onNewExpenseData={newExpenseDataHandler}
          onCancel={hideFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
