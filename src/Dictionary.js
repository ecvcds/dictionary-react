import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
export default function Dictionary(){
    let [keyword,setKeyword]=useState("");
    let [definition,setDefinition]=useState({});
    function search(event){
        event.preventDefault();
        let apiURL =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiURL).then(handleResponse);

    
    }
    function handleKeywordChange(event){
        setKeyword(event.target.value);

    }
    function handleResponse(response){
        setDefinition(response.data[0]);
    }

   return(
        <div className="Dictionary">
            <h1>  📖 Dictionary </h1>
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange}/>
                <input type="submit" value="Search" />
            </form>
            <Results result = {definition}/>
        </div>
    );
}