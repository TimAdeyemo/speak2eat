import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ImageList, ImageListItem, ImageListItemBar, IconButton, Zoom } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useRecipes, useRecipesUpdate } from './RecipesContext.jsx';
import ProgressSpinner from './ProgressSpinner.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    minHeight: '20vh'
  },
  imageList: {
    scrollbarColor: 'red',
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const RecipeSlider = () => {
  const classes = useStyles();
  const { recipes, fetching } = useRecipes();
  const { selectRecipe } = useRecipesUpdate();

  const selectRecipeFromList = ({ target }) => {
    selectRecipe(target.id)
  }

  return (
    <div className={classes.root}>
      { fetching ? <ProgressSpinner /> :
       <ImageList className={classes.imageList} cols={2.5}>
        {recipes.map((recipe, index) => (
          <ImageListItem key={recipe.canonical_id} >
            <img src={recipe.thumbnail_url} alt={recipe.name} onClick={e => selectRecipeFromList(e)} id={index}/>
            <ImageListItemBar
              title={recipe.name}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${recipe.name}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>}
    </div>
  );
}

export default RecipeSlider;
