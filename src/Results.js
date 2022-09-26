import React,{useState} from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import ListGroup from 'react-bootstrap/ListGroup';
import Photos from "./Photos";



export default function Results(props) {
    let [audioIcon,setAudioIcon]=useState("🔊");
    function handleAudio(event) {
        event.preventDefault();
        console.log(props.result.phonetics);
        if (props.result.phonetics[0].audio) {
            console.log(props.result.phonetics[0].audio);
            if(props.result.phonetics[0].audio!==""){
                let audio = new Audio(props.result.phonetics[0].audio);
                audio.play();
            } 
        } else if(props.result.phonetics[1].audio) {
            console.log(props.result.phonetics[0].audio);
            if(props.result.phonetics[1].audio!==""){
                let audio = new Audio(props.result.phonetics[1].audio);
                audio.play();
            } 
        } else {
            setAudioIcon("");
            alert(`Sorry, this is not available at the moment!`);
        }

        

    }

    
    if (props.result.word) {

        return (
            <div className="Results">
                <div className='row d-flex' >
                    <div className="col-md-6 col-sm-6" >
                        <div className="col-md-12 col-sm-6" >
                            <section>
                                <h2 className="Keyword">{props.result.word} <button onClick={handleAudio} href="#" id="listenPhonetics" className="align-top btn btn-link">{audioIcon}</button></h2>
                                <ListGroup horizontal id="ListGroup" className="Phonetics d-flex flex-row">
                                    {props.result.phonetics.map(function (phonetic, index) {
                                        return (
                                            <div key={index}>
                                                <Phonetic phonetic={phonetic} />{' '}
                                            </div>
                                        )
                                    })}
                                </ListGroup>
                            </section>
                        </div>
                        <div className="col-md-12 col-sm-6">
                            <div className="col-md-12 col-sm-12">
                                <section className="py-3 row-11" id="props.definitions">
                                    <h2>Definition:</h2>
                                    {props.result.meanings.map(function (meaning, index) {
                                        return (
                                            <div key={index}>
                                                <Meaning meaning={meaning} index={index} numberMeanings={props.result.meanings.length} />
                                            </div>)
                                    })}
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <Photos photos={props.photos} />
                    </div>
                </div>




            </div>
        );
    } else {
        return null;
    }
}