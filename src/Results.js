import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import ListGroup from 'react-bootstrap/ListGroup';


export default function Results(props){
    
    function handleAudio(event){
        let audio = new Audio (props.result.phonetics[0].audio)
        event.preventDefault();
        audio.play();
    }


    if(props.result.word){
        
        return (
        <div className="Results">
            <section>
                <div className="row"> 
                    <h2 className="Keyword">{props.result.word} <button onClick={handleAudio} href="#" id="listenPhonetics" className="align-top btn btn-link">🔊</button></h2>
                    <ListGroup horizontal id="ListGroup" className = "Phonetics d-flex flex-row">
                    {props.result.phonetics.map(function(phonetic,index){
                        return(
                            <div  key={index}>
                                <Phonetic phonetic={phonetic}/>{' '}
                            </div>
                        )
                    })}
                    </ListGroup>
                </div>  
            </section>    
                {props.result.meanings.map(function(meaning,index){
                    return ( 
                    <div className="Definitions"key={index}> 
                       <Meaning  meaning={meaning} index = {index} className="dropdown-item" />
                    </div>)
                })}

        </div>
        );
    } else {
        return null;
    }
}