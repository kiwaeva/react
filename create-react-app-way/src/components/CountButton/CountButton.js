import React, {useState, useEffect} from "react"; //import useState to display
import "./CountButton.css";
//create variables in React with capital letter
const CountButton = (props) => {
    //props is a value that you pass into a component to inform what it does
    const [currentCount,setCurrentCount] = useState(0) //distucturing of array [variable,method]

    const handleClick = () => {
      setCurrentCount(currentCount + props.incrementBy)
    } //function to update onClick

    //how to style internally
    // const buttonStyles = {
    //   background:props.buttonColor, // object key: "object value"
    // }

    useEffect(() => {
      if(currentCount === 10){
        // alert("The count is 10")
        setCurrentCount(0)
      }
    }, [currentCount]) 

    return (
      <div className="count">
        <button  onClick={handleClick}>+{props.incrementBy}</button>
        <div className={"count-display"}>{currentCount}</div>
    </div>)
} 

export default CountButton