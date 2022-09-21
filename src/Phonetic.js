import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

export default function Phonetic(props){
   
    return (
        <div>
            <ListGroup.Item as="li" className = "Phonetics" >{props.phonetic.text}</ListGroup.Item>
        </div>
    )
}