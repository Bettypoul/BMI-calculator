
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  // state to hold values
  const [bmi,setbmi]=useState(0)
  const [bmitext,setbmitext]=useState('Body mass index')
  const [weight,setweight]=useState('')
  const [height,setheight]=useState('')

  //conditional rendering
  const[isweight,setisweight]=useState(true)
  const[isheight,setisheight]=useState(true)

  

  const input=(e)=>{
    let value=e.target.value
    let name=e.target.name
    console.log(!!value.match(/^[0-9]*$/)); //regular expression with match()

    if(!!value.match(/^[0-9]*$/)){
      if(name=='weight'){
        setweight(value)
        setisweight(true)
      }
      else{
        setheight(value)
        setisheight(true)
      }

    }
    else{
      if(name=='weight'){
        setweight(value)
        setisweight(false)
      }
      else{
        setheight(value)
        setisheight(false)
      }

    }

    

  }

  //refresh condition

  const refresh=()=>{
    setweight('')
    setheight('')
    setbmi(0)
    setisweight(true)
    setisheight(true)
    setbmitext('Body mass index')

    

  }

  //calculation
  const calculate=()=>{
    let result=weight/(height*0.01)**2
    const final=result.toFixed(2)
    setbmi(final)
    
    if(final<18.5){
      setbmitext('Under weight')
    }
    else if(final>=18.5 && final<=24.9){
      setbmitext('Healthy weight')

    }
    else if(final>=25 && final<30){
      setbmitext('Over weight')
    }
    else{
      setbmitext('Obese')
    }

  }

  
 

  return (
    <>
    <div className="row bg-dark w-100 d-flex align-items-center justify-content-center " style={{height:"100vh",minWidth:"490px"}}>
      <div className="col-md-3"></div>

      <div className="col-md-6   border border-2 border-danger shadow py-5 rounded  bg-light d-flex flex-column text-center align-items-center justify-content-center me-5" style={{width:'400px'}}>
        <h1 className='text-danger'><span className='text-dark '>BMI</span> Calculator</h1>

        <div className='bg-primary p-3 rounded m-3 '>
          <h1>{bmi}</h1>
          <h4>{bmitext}</h4>

        </div>
        <form>
          <div className='mt-3'>
          <TextField id="filled-basic" value={weight} name='weight' onChange={(e)=>input(e)} label="Weight in kg" variant="filled" />
          {!isweight&&
            <p className='text-danger'>*Invalid input</p>}
          
          </div>
          <div className='mt-3'>
          <TextField id="filled-basic" value={height} name='height' onChange={(e)=>input(e)} label="Height in cm" variant="filled" />
          {!isheight&&
            <p className='text-danger'>*Invalid input</p>}

          </div>
          <div className='mt-4'>
          <Button variant="contained" className='me-2' color="error" disabled={isweight && isheight ?false:true} onClick={calculate}>Calculate</Button>
          <Button variant="outlined" className='ms-2' color="secondary" onClick={refresh}>Reset</Button>
          </div>
  
        </form>
        

      </div>

      <div className="col-md-3"></div>
    </div>
     
    </>
  )
}

export default App
