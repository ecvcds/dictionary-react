import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

export default function Synonyms(props){
    if (props.synonyms){
        return(
            <div className="Synonyms ps-5 pt-2"> 
               <ListGroup horizontal className = "Synonyms d-flex flex-row">
                            {props.synonyms.map(function(synonym,index){
                                    return <li className ="px-2" key={index}>{synonym}</li>
                            })} 
                </ListGroup>
            </div>
            
        );
    } else {
        return null;
    }
}


