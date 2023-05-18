import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NewBuildPic from '../../../assets/eDesign-new-build.svg';
import './styles.css';

function NewBuild() {
  return (
    // eDesign services
    <div id='eDesignCard' className='pt-10'>

    <Card sx={{ 
      maxWidth: { xs: '100%'}  
                }}>
      <CardMedia
        component="img"
        alt="New build eDesign"
        height="140"
        image={NewBuildPic}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          New Build eDesign
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Your choice of selections are vital to a cohesive design and color flow within your home...
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          href="https://www.rughdesign.com/product/new-build-edesign/"
          size="small"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}

export default NewBuild