import React from 'react';

const Form = () => {
    return(
        <form>
            <input type="text" className ='todo-input' />
            <button className ='todo-button' type='submit'>
                <i className="fas fa-plus-square"></i>
            </button>

            <div className = 'select'>
                <select name="todos" class="filter-todo">
                    <option value="all"></option>
                    <option value="completed"></option>
                    <option value="uncompleted"></option>
                </select>
            </div>
        </form>
    );
};

export default Form;