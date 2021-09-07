import React from "react";
import { CardMedia } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

// original_video_url
const RecipeVideoCard = ({ videoUrl }) => {
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <CardMedia
            component="video"
            alt='video'
            type="video/mp4"
            image={`${videoUrl}`}
            autoPlay
            muted
            currentTime={1000}
          />
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default RecipeVideoCard;
