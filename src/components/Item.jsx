import { useContext } from "react";
import styles from "./Item.module.css";
import { IoRemoveCircle } from "react-icons/io5";
import { FinalArrayContext } from "../store/final-array-store";

const Item = ({ id, todoName, todoDate}) => {
    const {deleteItem} = useContext(FinalArrayContext);
    return(
        <li id={id} className={`${styles.listItem} list-item`}>
            <span>{todoName}</span>
            <span>{todoDate}</span>
            <button className="buttonDelete" onClick={() => deleteItem(todoName)}>
                <IoRemoveCircle />
            </button>
        </li>
    )
}

export default Item;