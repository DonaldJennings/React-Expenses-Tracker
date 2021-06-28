import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'

function ExpenseItem(props) {
    return (
        <Card className = "expense-item">
            <ExpenseDate date = {props.expenseObj.date}/>
            <div className = "expense-item__description">
                <h2>{props.expenseObj.title}</h2>
                <div className = "expense-item__price">${props.expenseObj.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;