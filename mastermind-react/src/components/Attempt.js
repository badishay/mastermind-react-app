import React from 'react'
import MyContext from './myContext'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { red,
green,
blue,
yellow,
deepPurple,
brown,
pink,
orange,
teal,
lime,
cyan,
purple } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    green: {
      color: theme.palette.getContrastText(orange[500]),
      backgroundColor: green[700],
    },
    red: {
      color: theme.palette.getContrastText(red[700]),
      backgroundColor: red[700],
    },
    blue: {
      color: theme.palette.getContrastText(blue[700]),
      backgroundColor: blue[700],
    },
    yellow: {
      color: theme.palette.getContrastText(yellow[500]),
      backgroundColor: yellow[500],
    },
    deepPurple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
    brown: {
      color: theme.palette.getContrastText(brown[700]),
      backgroundColor: brown[700],
    },
    pink: {
      color: theme.palette.getContrastText(pink[500]),
      backgroundColor: pink[500],
    },
    orange: {
      color: theme.palette.getContrastText(orange[500]),
      backgroundColor: orange[500],
    },
    teal: {
      color: theme.palette.getContrastText(teal[500]),
      backgroundColor: teal[500],
    },
    lime: {
      color: theme.palette.getContrastText(lime[500]),
      backgroundColor: lime[500],
    },
    cyan: {
      color: theme.palette.getContrastText(cyan[500]),
      backgroundColor: cyan[500],
    },
    purple: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[500],
    },
    orange: {
      color: theme.palette.getContrastText(orange[500]),
      backgroundColor: orange[500],
    },
    
  }));
  

function Attempt(props) {
    const classes = useStyles();
        return (
            <MyContext.Consumer>
            {
          context=>(
                <div className={classes.root}>
                    <h2>{props.id}</h2>
                    {context.guess[props.id-1]?.map?.(x=>
                                                        x==='red'?<Avatar className={classes.red}>RE</Avatar>:
                                                        x==='green'?<Avatar className={classes.green}>GR</Avatar>:
                                                        x==='blue'?<Avatar className={classes.blue}>BL</Avatar>:
                                                        x==='yellow'?<Avatar className={classes.yellow}>YL</Avatar>:
                                                        x==='deepPurple'?<Avatar className={classes.deepPurple}>PD</Avatar>:
                                                        x==='brown'?<Avatar className={classes.brown}>BR</Avatar>:
                                                        x==='pink'?<Avatar className={classes.pink}>P</Avatar>:
                                                        x==='orange'?<Avatar className={classes.orange}>O</Avatar>:
                                                        x==='teal'?<Avatar className={classes.teal}>TE</Avatar>:
                                                        x==='lime'?<Avatar className={classes.lime}>L</Avatar>:
                                                        x==='cyan'?<Avatar className={classes.cyan}>CY</Avatar>:
                                                        x==='purple'?<Avatar className={classes.purple}>PR</Avatar>
                                                        :null )}
                    {context.result[props.id]?<p>black: {context.result[props.id]?.black}</p>:null}
                    {context.result[props.id]?<p>white: {context.result[props.id]?.white}</p>:null}
                    {context.result[props.id]?<p>red: {context.result[props.id]?.red}</p>:null}
                </div>
    
           
         )
        }

  </MyContext.Consumer>
    )
}

export default Attempt
