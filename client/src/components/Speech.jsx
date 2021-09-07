import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core';
import { RecipesProvider, useRecipesUpdate } from "./RecipesContext.jsx";


const Speech = () => {
  const [displayText, setDisplayText] = useState(['']);
  const [speechText, setSpeechText] = useState('');
  const [recipe, setRecipe] = useState({});
  const [recording, setRecording] = useState(false);
  const [audio, setAudio] = useState(null);
  const [toggle, setToggle] = useState(false);

  const { getRecipes } = useRecipesUpdate();
  // should be in global context
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  useEffect(() => {
    if (toggle) {
      setSpeechText([''])
      startListen(recognition);
      console.log('start')
    } else {
      if (displayText.length > 1) getRecipes(displayText);
      stopListen(recognition)
    }
  }, [toggle])

  const startListen = (recognition) => {
    recognition.continuous = false;

    recognition.onresult = (event) => {
      console.log(event);
      const current = event.resultIndex;

      const transcript = event.results[current][0].transcript;
      console.log(transcript.length)
      console.log(transcript)
      setDisplayText(transcript);
      setSpeechText([...displayText, ' ', transcript]);

      setToggle(false);
    }
    recognition.start();
  }

  const stopListen = (recognition) => {
    console.log('Stop')
    recognition.continuous = false;
    recognition.abort();
    setSpeechText([''])
  }

  const toggleMic = () => {
    setToggle(toggle => !toggle);
  }

  return (
    <div style={{marginTop: 10}}>
      <span>{' '}</span>
      <Button variant="contained" color="secondary" onClick={e => toggleMic(e)}>{toggle ? 'Stop Analysis' : 'Start Analysis'}</Button>
      <p>{displayText}</p>
    </div>
  )
}

export default Speech;
