import React from "react";
import Synonyms from "./Synonyms"
export default function Meaning(props){
    return (
        <div> 
                {props.meaning.definitions.map(function(definition,index){
                    if (index === 0){
                    return(
                        <div className="FirstDefinition text-muted" key={index}>
                            <strong>{props.meaning.partOfSpeech}</strong> <i>{definition.definition}</i> 
                            <Synonyms synonyms={definition.synonyms}/>
                        </div>
                    )} else {
                        return(
                            <div className="SimilarDefinition" key={index}>
                                <p>Similar: {definition.definition}</p>
                                <em>{definition.example}</em>
                            </div>
                        )
                    }

                })}

        </div>);
}