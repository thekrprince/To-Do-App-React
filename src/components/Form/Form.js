import React from 'react';
import './Form.css';

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
    //Here I am gonna write javascript function
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 1000 },
        ]);
        setInputText('');
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    return (
        <form>
            <input
                onChange={inputTextHandler}
                type="text"
                className="todo-input"
                placeholder="Add task..."
            />
            <button
                onClick={submitTodoHandler}
                type="submit"
                className="todo-button"
            >
                <i className="fas fa-plus-square"></i>
            </button>
            <div onChange={statusHandler} className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;
