import React, {useState} from "react";
import Expense from "./Components/Expenses/Expense";
import NewExpense from "./Components/Expenses/NewExpense";


const DUMMY_EXPENSES = [
    {
        id: "el",
        title: "Toilet paper",
        amount: 85,
        date: new Date(2021, 5, 16),
    },
    {
        id: "e2",
        title: "work SPave",
        amount: 5,
        date: new Date(2020, 6, 5),
    },
    {
        id: "e3",
        title: "Front Desk",
        amount: 6.785,
        date: new Date(2022, 3, 21),
    },
    {
        id: "e4",
        title: "Gate House",
        amount: 78.55,
        date: new Date(2022, 7, 27),
    },
    {
        id: "e5",
        title: "Gate Power",
        amount: 73,
        date: new Date(2019, 8, 1),
    },
    {
        id: "e6",
        title: "Power Of Confidence",
        amount: 78,
        date: new Date(2021, 0, 1),
    },
    {
        id: "e7",
        title: "How to start a Jornery",
        amount: 10.55,
        date: new Date(2022, 2, 17),
    }
];



const App = () => {
    const [expense, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = expense => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses]
        })
    }

    return (
        <div>
        <NewExpense onAddExpense= {addExpenseHandler}/>
        <Expense items={expense} />
        </div>
    );
}

export default App; 