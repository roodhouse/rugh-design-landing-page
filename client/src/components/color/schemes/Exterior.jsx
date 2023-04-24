import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ExteriorPic from '../../../assets/exterior-color-consultation.png'
import './styles.css';

function Exterior() {
  return (
    // exterior services
    <Card sx={{ 
      maxWidth: { xs: '100%',
                  sm: '55%',
                  md: '35%'
                  }  
                }}>
      <CardMedia
        component="img"
        alt="Exterior Color Consultation"
        height="140"
        image={ExteriorPic}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Exterior Color Consultation
        </Typography>
        <Typography variant="body2" color="text.secondary">
        By assessing the current undertones of your exterior elements, I can find the color that will work best.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          href="https://www.rughdesign.com/product/exterior-color-consultation/"
          size="small"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Exterior