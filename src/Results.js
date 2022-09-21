import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
export default function Results(props){
    if(props.result.word){
        return (
        <div className="Results">
            <h2 className="Keyword"> {props.result.word}</h2>
            {props.result.phonetics.map(function(phonetic,index){
                return(
                    <div key={index}>
                        <Phonetic phonetic={phonetic}/>
                    </div>
                )
            })}
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