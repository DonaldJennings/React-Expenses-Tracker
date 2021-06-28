import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import './expenses.css'
import ExpenseFilter from "./ExpensesFilter";
import React, { useState } from 'react';
const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = (filterYear) => {
        setFilteredYear(filterYear);
    }

    return (
        <div>
            <Card className = 'expenses'>
                <ExpenseFilter onSelectFilterYear = {filterChangeHandler} selected={filteredYear}/>
                <ExpenseItem expenseObj = {props.expenses[0]}></ExpenseItem>
                <ExpenseItem expenseObj = {props.expenses[1]}></ExpenseItem>
                <ExpenseItem expenseObj = {props.expenses[2]}></ExpenseItem>
                <ExpenseItem expenseObj = {props.expenses[3]}></ExpenseItem>
            </Card>
        </div>
    )
}

export default Expenses