import React, {useState} from 'react';
import "../css/Recipes.css";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth:200,     
    },  
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },    
  }));

function Recipe({title, calories, image, ingredients, healthLabel, dietLabel}) {

// const [open, setOpen] = useState(false);
const classes = useStyles();
  const [ingredientexpand, setIngredientExpand] = React.useState(false);
  const [labelexpand, setLabelExpand]= React.useState(false);

  const handleExpandClick = () => {
    setIngredientExpand(!ingredientexpand);
    setLabelExpand(!labelexpand)

  };

  const handleExpand = () => {
    
    setLabelExpand(!labelexpand);

  };



return (

<div className="search-result">
<div className="item">


<img src={image} alt='' />
<h1>{title}</h1>
<CardActions disableSpacing> 
        Ingredients          
<IconButton
          className={clsx(classes.ingredientexpand, {
            [classes.expandOpen]: ingredientexpand,
          })}
          onClick={handleExpandClick}
          aria-expanded={ingredientexpand}
          aria-label="show more"
        >
          <ExpandMoreIcon font-size="Large"/>
        </IconButton>
        </CardActions>
        <Collapse in={ingredientexpand} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph> 
          {/* Health Label: {healthLabel} */} 5 5     
          
           {ingredients.map((ingredients) => (
                
                 
                 <p>  {ingredients.text}</p>
              ))} 
          </Typography>      
        </CardContent>
      </Collapse>

      
<div className="flex-container">
<div className="calories">
<p><u>Calories:</u> <span className="calories_data">{calories}</span>
</p> 
</div>
<div className="view">
<a href="#">View Recipe</a>
</div>

</div>

{/* <span className="health_label">Health Label</span>: {healthLabel} */}
<CardActions disableSpacing> 
        Health Label          
<IconButton
          className={clsx(classes.labelexpand, {
            [classes.expandOpen]: labelexpand,
          })}
          onClick={handleExpand}
          aria-expanded={labelexpand}
          aria-label="show more"
        >
          <ExpandMoreIcon font-size="Large"/>
        </IconButton>
        </CardActions>
        <Collapse in={labelexpand} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph> 
           Health Label: {healthLabel}     
{/*           
           {ingredients.map((ingredients) => (
                
                 
                 <p>  {ingredients.text}</p>
              ))}  */}
          </Typography>      
        </CardContent>
      </Collapse>

</div>
</div>

      

 


  );
}
       
       
          
          
       
  
export default Recipe
