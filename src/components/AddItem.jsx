import { useContext } from "react";
import styles from "./AddItem.module.css"
import Item from "./Item"
import { FinalArrayContext } from "../store/final-array-store";

const AddItem = ({}) => {
    let i=0;
    const {finalArr} = useContext(FinalArrayContext)
    return(
        <ul className={`${styles.addItem}`}>
            {
                finalArr.map((item)=>
                    <Item key={item.tname} id={i++} todoDate={item.tdate} todoName={item.tname}></Item>
                )
            }
        </ul>
    )
}

export default AddItem;