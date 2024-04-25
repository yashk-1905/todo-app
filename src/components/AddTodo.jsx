import { useState, useRef } from 'react';
import styles from './AddTodo.module.css';
import { IoAddCircleOutline } from "react-icons/io5";
import { useContext } from 'react';
import { FinalArrayContext } from '../store/final-array-store';

const AddTodo = () => {
    let noOfUpdates = useRef(0);
    let tname = useRef();
    let tdate = useRef();
    let {addItem} = useContext(FinalArrayContext);

    let handleNameChange = (event) => {
        noOfUpdates.current++;
    }
    let handleDateChange = (event) => {
        console.log(noOfUpdates.current);
    }
    let handleButtonClicked = (event) => {
        const todoName = tname.current.value;
        const todoDate = tdate.current.value;
        addItem(todoName, todoDate);
        tname.current.value = "";
        tname.current.value = "";

        event.preventDefault();
    }
    return (
        <form className={`${styles.addTodo}`} onSubmit={handleButtonClicked}>
        {/* <div className={`${styles.addTodo}`}> */}
            <div>
                <input 
                    ref={tname}
                    className='inputTodo' 
                    type="text" 
                    placeholder='Enter Todo Here' 
                    onChange={handleNameChange} 
                />
            </div>
            <div>
                <input 
                   ref={tdate}
                   className='inputDate' 
                    type="date" 
                    onChange={handleDateChange} 
                />
            </div>
            <button className='buttonAdd'>
                <IoAddCircleOutline />
            </button>
         {/* </div> */}
        </form>
    )
}
export default AddTodo;