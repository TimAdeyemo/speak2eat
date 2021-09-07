import React, { useState, useEffect } from "react";
import { RecipesProvider, useRecipesUpdate, useRecipes } from "./RecipesContext.jsx";
import { Fab, Container } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';

const Eat = () => {
  const [recipe, setRecipe] = useState({});
  const [isSpeaking, setSpeaking] = useState(false);
  const { getRecipes } = useRecipesUpdate();
  const [currentStep, setStep] = useState(-1);
  const { recipes, fetching, currentRecipe } = useRecipes();

  useEffect(() => {
    if (recipes[currentRecipe]) dictate(currentStep);
  }, [currentStep])

  useEffect(() => {
    setStep(-1)
  }, [currentRecipe])

  const incrementStep = () => {
    setStep(currentStep + 1);
  }

  const dictate = (stepNumber) => {
    if (!fetching && stepNumber > -1) {
      let instruction = recipes[currentRecipe].instructions[stepNumber].display_text;
      let sayStep = new SpeechSynthesisUtterance(instruction);
      speechSynthesis.speak(sayStep);
      // recipes[currentRecipe].instructions.forEach((step) => {
      //   //console.log(step)
      //   let sayStep = new SpeechSynthesisUtterance(step.display_text);
      //   speechSynthesis.speak(sayStep)
      // })
    }
  }

  return (
    <Container>
      <Fab
        aria-label="Mic"
        color="secondary"
        size="large"
        onClick={() => incrementStep()
      }
      >
        <MicIcon />
      </Fab>
    </Container>
  );
}

export default Eat;


