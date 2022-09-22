import React from "react";
import Synonyms from "./Synonyms"
export default function Meaning(props){
    return (
        <div>
            <section>
                <h2><i>{props.meaning.partOfSpeech}</i></h2>
                {props.meaning.definitions.map(function(definition,index){
                    if (index === 0){
                    return(
                        <div className="FirstDefinition">
                            <p> <strong>Definition:</strong> {definition.definition}</p>
                            <p> <i>{definition.example}</i></p>
                            <Synonyms synonyms={definition.synonyms}/>
                        </div>
                    )} else {
                        return(
                            <div className="SimilarDefinition" >
                                <p>Similar: {definition.definition}</p>
                                <em>{definition.example}</em>
                                <Synonyms synonyms={definition.synonyms}/>
                            </div>
                        )
                    }

                })}
            </section>
        </div>);
}