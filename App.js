import { useState } from 'react';

import * as math from "mathjs";


import './App.css';
import Button from "./components/Button";
import Input from "./components/Input";


const App = () => {


  const [text, setText] = useState("");

  const [result, setResult] = useState("");



  const addToText= (val) =>{
    // setText((text) => [...text ,val+ " "]); // with this it only take single digit and also not take decimals also
    setText((text) =>text+val ); 
    
  }


const resetInput = () => {
  setText("");
  setResult("");
};




const calculateResult =() =>{
  // const input = text.join(''); // remove  commas

    const input = text; // now use text as input insted of joining array
  setResult(math.evaluate(input));
}


const buttonColor ="#f2a33c"

  return (
    <div className="App">
      <div className='calc-wrapper'>
 
      <Input text={text} result={result}/>


        <div className='row'>
          <Button symbol="7" handelClick={addToText}/>
          <Button symbol="8"handelClick={addToText}/>
          <Button symbol="9"handelClick={addToText}/>
          <Button symbol="/" color={buttonColor} handelClick={addToText}/>
        </div>
          

        <div className='row'>
          <Button symbol="4"handelClick={addToText}/>
          <Button symbol="5"handelClick={addToText}/>
          <Button symbol="6"handelClick={addToText}/>
          <Button symbol="*" color={buttonColor} handelClick={addToText}/>
        </div>


        <div className='row'>
          <Button symbol="1"handelClick={addToText}/>
          <Button symbol="2"handelClick={addToText}/>
          <Button symbol="3"handelClick={addToText}/>
          <Button symbol="+" color={buttonColor} handelClick={addToText}/>
        </div>


        <div className='row'>
          <Button symbol="0"handelClick={addToText}/>
          <Button symbol="."handelClick={addToText}/>
          <Button symbol="=" handelClick={calculateResult}/>
          <Button symbol="-" color={buttonColor} handelClick={addToText}/>
        </div>


        <Button symbol="Clear" color={"red"} handelClick={resetInput}/>

      </div>
    </div>
  );
};

export default App;

