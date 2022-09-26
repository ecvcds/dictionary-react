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
                            <p className="ps-5 pt-2"> {definition.example}</p>
                        </div>
                    )} else  if (props.numberMeanings===1){
                        return(
                            <div className="SimilarDefinition text-muted ps-4" key={index}>
                                <p><u>Similar:</u> {definition.definition}</p>
                            </div>
                        )
                    }

                })}

        </div>);
}