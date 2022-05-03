import { useState } from "react";

import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredItems = props.items.filter(
    (item) => item.date.getFullYear() === Number(filteredYear)
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredItems} />
      <ExpensesList items={filteredItems} />
    </Card>
  );
};

export default Expenses;
