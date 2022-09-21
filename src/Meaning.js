import React from "react";

export default function Meaning(props){
    console.log(props.meaning)
    return (
        <div>
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function(definition,index){
                return(
                    <div>
                        <p>{index+1}. {definition.definition}</p>
                        <em>{definition.example}</em>
                    </div>
                )
            })}

        </div>);
}