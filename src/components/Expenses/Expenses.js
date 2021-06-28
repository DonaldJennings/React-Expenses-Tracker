import Card from '../UI/Card'
import './expenses.css'
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import React, { useState } from 'react';
const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = (filterYear) => {
        setFilteredYear(filterYear);
    }
    const filteredResults = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })


    return (
        <div>
            <Card className = 'expenses'>
                <ExpenseFilter onSelectFilterYear = {filterChangeHandler} selected={filteredYear}/>
                <ExpensesList expenses={filteredResults} />
            </Card>
        </div>
    )
}

export default Expenses