import React, {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
function Main() {
    const [level, setLevel] = useState(null);
    let history=useHistory();
    const handleChange = (event) => {
        setLevel(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if(level){
            let numberOfoptionalColors;
            switch (level) {
                case 'Easy':
                    numberOfoptionalColors=7;
                    break;
                case 'Medium':
                    numberOfoptionalColors=10;
                    break;
                case 'Difficult':
                    numberOfoptionalColors=12;
                    break;
            }
            history.push(`/game/${numberOfoptionalColors}`)
        }
    };
  return (
      <div>
          <h1>MASTERMIND</h1>
        <form onSubmit={handleSubmit}>
            <FormControl component="fieldset">
            <FormLabel component="legend">Choose level</FormLabel>
            <RadioGroup   value={level} onChange={handleChange}>
                <FormControlLabel value="Easy" control={<Radio />} label="Easy (guess 4 from 7 different colors)" />
                <FormControlLabel value="Medium" control={<Radio />} label="Medium (guess 4 from 10 different colors)" />
                <FormControlLabel value="Difficult" control={<Radio />} label="Difficult (guess 4 from 12 different colors)" />
            </RadioGroup>
            <Button type="submit" variant="outlined" color="primary" >
            start!
            </Button>
            </FormControl>
        </form>
    </div>
  );
}



export default Main
