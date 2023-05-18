import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InteriorPic from '../../../assets/interior-color-consultation.png';
import './styles.css';

function Interior() {
  return (
    // interior services
    <Card sx={{ 
      maxWidth: { xs: '100%'}  
                }}>
      <CardMedia
        component="img"
        alt="Interior Color Consultation"
        height="140"
        image={InteriorPic}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Interior Color Consultation
        </Typography>
        <Typography variant="body2" color="text.secondary">
          By assessing the current undertones in your home, I can find the color
          or color palette that will make the biggest impact.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          href="https://www.rughdesign.com/product/interior-color-consultation/"
          size="small"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Interior