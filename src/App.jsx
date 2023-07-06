import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

export default function App() {
  const [expenses, setExpenses] = React.useState(
    //
    []
  );

  const addExpenseHandler = (prevData) => {
    setExpenses((prevState) => {
      return [prevData, ...prevState];
    });
  };

  React.useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  function clearButtonHandler() {
    setExpenses([]);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}
