import React, { useState, useEffect } from "react";


const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const XSpellCheck = () => {
  const [text, setText] = useState(""); 
  const [suggestion, setSuggestion] = useState(""); 

  
  const findSuggestion = (inputText) => {
    const words = inputText.split(" ");
    for (const word of words) {
      const lowerCaseWord = word.toLowerCase();
      if (customDictionary[lowerCaseWord]) {
        return `Did you mean: ${customDictionary[lowerCaseWord]}?`;
      }
    }
    return ""; 
  };

  useEffect(() => {
    if(text.trim()==="") {
      setSuggestion("");
    }else{
      const foundSuggestion = findSuggestion(text);
      setSuggestion(foundSuggestion);
    }
  },[text]);

  const handleChange = (event) =>{
    setText(event.target.value);
  };

  
  return (
    <div style={{ margin: "20px" }}>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        rows="10"
        cols="50"
        value={text}
        onChange={handleChange}
        placeholder="Type here..."
      
      />
         {suggestion && <p>{suggestion}</p>}
      </div>
    
  );
};

export default XSpellCheck;