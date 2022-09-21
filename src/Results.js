import React from "react";
import Meaning from "./Meaning";
export default function Results(props){
    if(props.result.word){
        console.log(props.result)
        return (
        <div className="Results">
            <h2 className="Keyword"> {props.result.word}</h2>
            <h3> Definitions of {props.result.word}</h3>
            {props.result.meanings.map(function(meaning,index){
                return ( 
                <div className="Definitions" key={index}> 
                    <Meaning meaning={meaning} index = {index} />
                </div>)
            })}
        </div>
        );
    } else {
        return null;
    }
}