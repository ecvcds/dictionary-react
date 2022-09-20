import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
export default function Dictionary(){
    let [keyword,setKeyword]=useState(null)
    let apiURL =`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
    function search(event){
        event.preventDefault();
    }
    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
    function handleResponse(response){
        console.log(response.data[0])
    }
    axios.get(apiURL).then(handleResponse)

    return(
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange}/>
            </form>
        </div>
    )
}