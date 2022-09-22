import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import ListGroup from 'react-bootstrap/ListGroup';
import Photos from "./Photos";



export default function Results(props) {
    console.log(props);
    function handleAudio(event) {
        if (props.result.phonetics[0].audio) {
            let audio = new Audio(props.result.phonetics[0].audio);
            event.preventDefault();
            audio.play();
        } else {
            let audio = new Audio(props.result.phonetics[1].audio);
            event.preventDefault();
            audio.play();
        }

    }
 


    if (props.result.word) {

        return (
            <div className="Results">
                <div className='row'>
                    <div className="col-md-6">
                        <div class="col-md-12 col-sm-6">
                            <section>
                                <h2 className="Keyword col-md-12 col-sm-6">{props.result.word} <button onClick={handleAudio} href="#" id="listenPhonetics" className="align-top btn btn-link">🔊</button></h2>
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
                        <div class="col-md-12 col-sm-12">
                            <section className="py-3 col-md-12 col-sm-12" id="props.definitions">
                                <h2>props.result.definitions:</h2>
                                {props.result.meanings.map(function (meaning, index) {
                                    return (
                                        <div key={index}>
                                            <Meaning meaning={meaning} index={index} className="dropdown-item" />
                                        </div>)
                                })}
                            </section>
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