import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
export default function Dictionary(){
    let [keyword,setKeyword]=useState("");
    let [suggestionMessage,setSuggestionMessage]=useState("Suggestions: victory, happiness, love, etc.");
    let [definition,setDefinition]=useState({});
    let [errorMessage,setErrorMessage]=useState("");
    function search(event){
        event.preventDefault();
        let apiURL =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiURL).catch(function (error) {
            setErrorMessage(`Sorry, we couldn't find definitions for ${keyword} 😭 Try a different word!`);
            setDefinition({});
            setSuggestionMessage("");
        });
        if (errorMessage === ""){
        axios.get(apiURL).then(handleResponse);
        setSuggestionMessage("");
        }


    
    }
    function handleKeywordChange(event){
        setKeyword(event.target.value);
        setErrorMessage("");
        setSuggestionMessage("Suggestions: victory, happiness, love, etc.");


    }
    function handleResponse(response){
        if (response.data[0]){
            setDefinition(response.data[0]);
            setErrorMessage("");
        } 

    }
    function handleClick(event){
        event.target.value = "";
    }

   return(
        <div className="Dictionary">
            <section>
                <h1>  📖 Dictionary </h1>
                <form onSubmit={search}>
                    <input type="search" id = "inputForm" defaultValue="Let's learn!" onChange={handleKeywordChange} onClick={handleClick}/>
                    <input type="submit" id = "searchFormButton"value="Search" />
                </form>
                <strong>{errorMessage}</strong>
                <p>{suggestionMessage}</p>
            </section>
            <Results result = {definition}/>
        </div>
    );
}