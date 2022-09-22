import React from "react";
import Synonyms from "./Synonyms"
export default function Meaning(props){
    return (
        <div> 
                {props.meaning.definitions.map(function(definition,index){
                    if (index === 0){
                    return(
                        <div className="FirstDefinition text-muted">
                            <p><strong>{props.meaning.partOfSpeech}</strong> <i>{definition.definition}</i> 
                                <Synonyms synonyms={definition.synonyms}/> </p>
                        </div>
                    )} else {
                        return(
                            <div className="SimilarDefinition" >
                                <p>Similar: {definition.definition}</p>
                                <em>{definition.example}</em>
                            </div>
                        )
                    }

                })}

        </div>);
}