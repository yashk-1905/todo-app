import { useContext } from 'react';
import styles  from './Welcome.module.css'
import { FinalArrayContext } from '../store/final-array-store';
const Welcome = () => {
    const {finalArr} = useContext(FinalArrayContext);
    return(
        finalArr.length==0 &&
        <p className= {`${styles.welcome}`}>Welcome to the app</p>
    )
}

export default Welcome;