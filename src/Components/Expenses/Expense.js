import React, {useState} from 'react';
import Card from '../UI/Card';
import './Expense.css';
import ExpenseChart from './ExpenseChart';
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpenseList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    console.log('ExpenseJS')
    setFilteredYear(selectedYear)
  }

  const filteredExpense = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <>
    <Card className="expenses">
      <ExpensesFilter 
      selected={filteredYear}
       onChangeFilter={filterChangeHandler}
       />
       <ExpenseChart expense={filteredExpense} />
      <ExpensesList items={filteredExpense}/>
    </Card>
    </>
  );
}

export default Expenses;