import React, {useState} from "react";
import "./index.css"

function App() {
  
  // state
  const [weight, setweight] = useState(0)
  const [height, setheight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  let calcBmi = (event) => {
    // prevent submitting
    event.preventDefault()

    if(weight === 0 || height === 0) {
      alert("Weight and Height can not be Zero")
    }
    else {
      let bmi = (   weight / (   (height * 0.0254) * (height * 0.0254)   )    )
      setBmi(bmi.toFixed(1))

      // Logic for message

      if(bmi < 16) {
        setMessage('Underweight, You have Severe Thinness')
      }
      else if(bmi >= 16 && bmi < 17) {
        setMessage('Underweight, You have Moderate Thinness')
      }
      else if(bmi >= 17 && bmi < 18.5) {
        setMessage('Underweight, You have Mild Thinness')
      }
      else if(bmi >= 18.5 && bmi < 25) {
        setMessage('Normal, You are a healthy weight')
      }

      else if(bmi >= 25 && bmi < 30) {
        setMessage('Overweight, You are overweight')
      }
      else if(bmi >= 30 && bmi < 35) {
        setMessage('Overweight, You have Obese Class I')
      }
      else if(bmi >= 35 && bmi < 40) {
        setMessage('Overweight, You have Obese Class II')
      }
      else if (bmi > 40){
        setMessage('Overweight, You have Obese Class III')
      }
    }
  }

  let reload = () => {
    window.location.reload()
  }

  // show image based on bmi calculation
  let imgSrc;

  if(bmi < 1) {
    imgSrc = imgSrc = require("../src/assets/bmi.png")
  }

  else if(bmi < 18.5) {
    imgSrc = require("../src/assets/thin.png")
  }

  else if(bmi >= 18.5 && bmi < 25) {
    imgSrc = require("../src/assets/fit.png")
  }

  else if(bmi > 25) {
    imgSrc = require("../src/assets/fat.png")
  }
  
  
  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calulator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (Kgs)</label>
            <input value={weight} onChange={(event) => setweight(event.target.value)} />
          </div>
          <div>
            <label>Height (in)</label>
            <input value={height} onChange={(event)  => setheight(event.target.value)}/>
          </div>
          <div>
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-outline" onClick={reload}>Reload</button>
          </div>
        </form>
        
        <div className="center">
          <h3>Your BMI is {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className="img-container">
          <img src={imgSrc} alt='bmi-display'></img>
        </div>


      </div>
    </div>
  );
}

export default App;
