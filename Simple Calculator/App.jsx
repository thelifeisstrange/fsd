import { useState } from 'react'
 import './App.css'
 function App() {
 const [num1, setNum1] = useState('');
 const [num2, setNum2] = useState('');
 const [sum, setSum] = useState('');
 const [sub, setSub] = useState('');
 const [mul, setMul] = useState('');
 const [div, setDiv] = useState('');

 const AddNumbers = ()=>{
 setSum(parseInt(num1) + parseInt(num2))}

 
 const SubtractNumbers = ()=>{
  setSub(parseInt(num1) - parseInt(num2))}

  
 const MultiplyNumbers = ()=>{
  setMul(parseInt(num1) * parseInt(num2))}

  
 const DivideNumbers = ()=>{
  setDiv(parseInt(num1) / parseInt(num2))}

  
 return (
 <>
 <div className="app">Enter 1st No:</div>
 <div><input type="number" value={num1} onChange={e=>setNum1(e.target.value)}/></div><br /> 
 <div className="app">Enter 2st No:</div> <div><input type="number" value={num2} onChange={e=>setNum2(e.target.value)}/></div><br /> 
 <button onClick={AddNumbers}>+</button><br/><br/> 
 <button onClick={SubtractNumbers}>-</button><br/><br/> 
 <button onClick={MultiplyNumbers}>* </button><br/><br/> 
 <button onClick={DivideNumbers}>/</button><br/><br/> 

 <div>Result : {sum !== '' ? `Sum: ${sum}` : ''}</div>
      <div>{sub !== '' ? `Subtraction: ${sub}` : ''}</div>
      <div>{mul !== '' ? `Multiplication: ${mul}` : ''}</div>
      <div>{div !== '' ? `Division: ${div}` : ''}</div>
 </>
 )
 }
export default App
 