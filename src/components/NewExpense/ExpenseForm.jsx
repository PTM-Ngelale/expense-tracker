import React from "react";
import './ExpenseForm.css'

export default function ExpenseForm(props){
    const [enteredTitle, setEnteredTitle] = React.useState('')
    const [enteredAmount, setEnteredAmount] = React.useState('')
    const [enteredDate, setEnteredDate] = React.useState('')

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2024-12-31" onChange={dateChangeHandler} value={enteredDate} />
                </div>
            </div>
            <div>
                <button className="new-expense__actions" type="submit">Submit</button>
            </div>
        </form>
    )
}