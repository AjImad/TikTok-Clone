import React, {useState} from "react"
import Square from "./Square"
import Helper from "./Helper"
import "./style.css"



const Board = (props) => { 

    const renderSquare = (i) => {
        return <Square value={props.squares[i]} 
                fun={() => props.onClick(i)}
                />;
    }

    return (
        <div>
            <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
            </div>
            <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
            </div>
            <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
            </div>
        </div>
    )
}

export default Board;