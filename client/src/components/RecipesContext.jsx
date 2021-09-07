import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const RecipesContext = createContext(null);
const RecipesUpdateContext = createContext();

export const useRecipes = () => {
  return useContext(RecipesContext);
}

export const useRecipesUpdate = () => {
  return useContext(RecipesUpdateContext);
}

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

export const RecipesProvider = ({children}) => {
  const [recipes, setRecipes] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [recording, setRecording] = useState(false);
  const [query, setQuery] = useState('');
  const [errorText, setErrorText] = useState('');
  const [view, setView] = useState({});
  const [isCooking, setIsCooking] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(0);

  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = 'en-US';

  const startListen = () => {
    setRecording(true);
    recognition.onresult = (event) => {
      const current = event.resultIndex;
      const transcript = event.results[current][0].transcript;

      console.log(event);
      console.log(transcript.length)
      if (isCooking) {
        //cook
      } else {
        // query
        setQuery([...query, ' ', transcript]);
      }
    }
    //recognition.onend(recognition.start);
    recognition.start();
  }

  const stopListen = () => {
    console.log('Stop')
    setRecording(false);
    recognition.abort();
  }

  const toggleMic = (event) => {
    console.log('toggle Mic');
    (!recording) ? startListen(): stopListen();
  }

  const getRecipes = async (query) => {
    console.log(`Current query ${query}`)
    setFetching(true);
    try {
      const data = await axios.get(`/recipes/${query}`)
      console.log(data)
      validateRecipes(data.data)
    } catch (e) {
      console.log(e)
    } finally {
      setFetching(false);
    }
  }

  const validateRecipes = (recipes) => {
    const validRecipes = recipes.filter(recipe => (recipe.instructions))
    setRecipes([...validRecipes])
  }

  const selectRecipe = (index=0) => {
    if (!fetching) setCurrentRecipe(index)
  }

  return (
    <RecipesContext.Provider value={{
      recipes,
      fetching,
      recording,
      errorText,
      currentRecipe,
      }}>
    <RecipesUpdateContext.Provider value={{
      getRecipes,
      toggleMic,
      setErrorText,
      selectRecipe,
      }}>
    {children}
    </RecipesUpdateContext.Provider>
  </RecipesContext.Provider>
  )
}
