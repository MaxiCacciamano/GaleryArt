import React from 'react';
import { Grid, Paper } from '@mui/material';

const ImageGrid = ({ images }) => {
  return (
    <Grid container spacing={2}>
      {images.map((image, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
          <Paper>
            <img src={image.url} alt={`Image ${index}`} style={{ width: '100%' }} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageGrid;