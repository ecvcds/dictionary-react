import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

export default function Phonetic(props){
   if(props.phonetic.text!== undefined)
    {return (
        <div>
            <ListGroup.Item className="p-0" as="li">{props.phonetic.text}</ListGroup.Item>
        </div>
    )}
    else {
        return null;
    }
}