import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const InstructionCard = ({ step, index }) => {
  return (
    <React.Fragment>
      <Grid item>
        <Avatar>{ index + 1 }</Avatar>
      </Grid>
      <Grid item>
        <Typography >{step.display_text}</Typography>
      </Grid>
    </React.Fragment>
  )
}

export default InstructionCard;