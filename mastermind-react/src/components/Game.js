import React, {useState,useEffect,useRef} from 'react'
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import MyContext from './myContext'
import Attempts from './Attempts'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
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
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      padding: theme.spacing(0),
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
function Game() {
    const classes = useStyles();
    let history=useHistory();
    const {numberOfoptionalColors}= useParams();
    const [attempt, setAttempt] = useState(1);
    const [guess, setGuess] = useState([[]]);
    const [result, setResult] = useState([{}]);
    const [win, setWin] = useState(false);
    const [loose, setLoose] = useState(false);
    const attempts =10;
    const colors=[
    "red","green","blue","yellow","deepPurple","brown","pink","orange","teal","lime","cyan","purple"]
    const [optionalColors,setOptionalColors] = useState(colors);

    useEffect(() => {
        console.log(attempt)
        setOptionalColors(colors.slice(0,numberOfoptionalColors))
        if(attempt>attempts){
            setLoose(true)
        }
    }, [attempt])
      
    let arr = [];
    useEffect(() => {
          while (arr.length<4) {
            const r = Math.floor(Math.random() * numberOfoptionalColors) ;
            if(!arr.includes(optionalColors[r])){
                arr.push(optionalColors[r]);
            }
        }
        ref.current=arr;
        console.log(arr)
    }, [])
    
    const ref = useRef([])

    return (
        <MyContext.Provider value={{
               guess:guess,
               result:result
            }}>
                {win?<h1>you won in {attempt-1} attempts!! </h1>:
                loose?<h1>you lost!!</h1>:

            <div>
                <h2>instructions: place 4 pegs by coosing 4 different colors.</h2>
                {/* <h2>{`place 4 pegs in the right order from ${numberOfoptionalColors} colors`}</h2> */}
                <p>round result:</p>
                <p> black = direct hit</p>
                <p>white = hit</p>
                <p>red = miss</p>
     
                <Paper style={{ backgroundColor:green[100]}}>
                    <div  className={classes.root}>
                        {optionalColors.map((x,i)=><span
                        key={i}
                        onClick={()=>{
                            let newGuess=[...guess];
                            let newResult=[...result];
                            newGuess[newGuess.length-1].push(x)
                            if( newGuess[newGuess.length-1].length===4){
                                console.log(ref.current,newGuess[newGuess.length-1]);
                                if(JSON.stringify(newGuess[newGuess.length-1]) === JSON.stringify(ref.current))
                                {
                                    setWin(true);
                                    console.log('you won!!!')
                                }
                                else{
                                    const res={
                                        black:0,
                                        white:0,
                                        red:0
                                    };
                                    for (let index = 0; index < 4; index++) {
                                        if(newGuess[newGuess.length-1][index]===ref.current[index]){
                                            res.black++;
                                        }
                                        else{
                                            if(ref.current.includes(newGuess[newGuess.length-1][index])){
                                                res.white++;
                                            }
                                            else{
                                                res.red++;
                                            }
                                        }
                                    }
                                    newResult.push(res)
                                    console.log(res)
                                    console.log(result)
                                }
                                newGuess.push([]);
                                setAttempt(prev=>prev+1);
                            }
                            setResult(newResult)
                            setGuess(newGuess);
                            setOptionalColors(prev=>prev.filter(item=>item!==x))
                        }}>
                            {x==='red'?<Avatar className={classes.red}>RE</Avatar>:
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
                                                        :null }</span>)}
                    </div>
                </Paper>
                <Paper>
                    <Attempts/>
                </Paper>            
            </div>}
            <Button  color="secondary" onClick={()=>{history.push('/')}}>
                Start New Game
            </Button>
        </MyContext.Provider>
    )
}

export default Game
