import React, {useState} from "react"
import "./style.css"

const Square = (props) => {

        return(
            <button className = "square"
                    onClick = {props.fun} 
            >
                {props.value}
            </button>
        )
}

export default Square;