import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import ListGroup from 'react-bootstrap/ListGroup';

export default function Results(props){
    if(props.result.word){

        return (
        <div className="Results">
            <h2 className="Keyword"> {props.result.word}</h2>
            <a href= {props.result.phonetics[0].audio} target ="_blank" rel="noreferrer" id = "listenPhonetics">Listen</a> 
            <ListGroup horizontal id="ListGroup" className = "Phonetics">
                {props.result.phonetics.map(function(phonetic,index){
                    return(
                        <div  key={index}>
                            <Phonetic phonetic={phonetic}/>
                        </div>
                    )
                })}
            </ListGroup>

            <section>          
                {props.result.meanings.map(function(meaning,index){
                    return ( 
                    <div className="Definitions" key={index}> 
                        <Meaning meaning={meaning} index = {index} />
                    </div>)
                })}
            </section>
        </div>
        );
    } else {
        return null;
    }
}