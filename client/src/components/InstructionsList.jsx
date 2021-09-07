import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ProgressSpinner from './ProgressSpinner.jsx';
import { useRecipes } from './RecipesContext.jsx';
import InstructionCard from './InstructionCard.jsx';
import RecipeVideoCard from './RecipeVideoCard.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    maxHeight: '60vh',
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    overflow: 'auto',
  },
}));

const InstructionsList = () => {
  const classes = useStyles();
  const { recipes, fetching, currentRecipe } = useRecipes();

  return (
    <div className={classes.root}>
      { fetching ? <ProgressSpinner /> :
       recipes[currentRecipe] && <Paper className={classes.paper} elevation={3}>
         <Grid container direction="row">
        {recipes[currentRecipe] && recipes[currentRecipe].instructions.map((step, index) => (
        <Grid container item wrap="nowrap" spacing={2} key={index}>
          <InstructionCard key={index} step={step} index={index} />
        </Grid>
          ))}
        {recipes[currentRecipe] &&
        <Grid container item spacing={2}>
        <RecipeVideoCard videoUrl={recipes[currentRecipe].original_video_url} />
        </Grid>
        }
        </Grid>
      </Paper> }
    </div>
  );
}

export default InstructionsList;
