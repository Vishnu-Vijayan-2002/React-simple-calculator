import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
function App() {
const[value,setValue]=useState('')
 const calculatresult=()=>{
  try{
    const result =eval(value)
  setValue(result)
  }catch{
    setValue("Error")
  }
 }
  return (
    <>
      <div style={{backgroundColor:'black',width:'350px',height:'600px',marginTop:'70px',borderRadius:'5px'}} className='container'>
        <h3>React Claculator</h3>
          <div style={{width:'100px',height:'100vh'}} className='calculator'>
            <form>
              <div className='display'>
                <input style={{width:'325px',marginTop:'10px',height:'60px',marginLeft:'0px',fontSize:'30px',paddingLeft:'10px',paddingRight:'10px'}} id='rsult' type="text" value={value} readOnly/>
              </div>
              <div className='btn-conatiner'>
               <input  className='botton-style' type="btn" value={"AC"} onClick={e=>{setValue('')}} readOnly/>
               <input  className='botton-style' type="btn" value={"DE"} onClick={e=>{setValue(value.slice(0,-1))}} readOnly/>
               <input  style={{paddingLeft:'20px',fontSize:'20px'}}  className='botton-style' type="botton" value={"."} onClick={e=>{setValue(value + e .target.value)}} readOnly/>
               <input  style={{paddingLeft:'20px',fontSize:'20px'}}  className='botton-style' type="botton" value={"/"} onClick={e=>{setValue(value + e .target.value)}} readOnly/>
              </div>
              <div className='btn-conatiner'>
               <input  style={{paddingLeft:'20px',fontSize:'20px'}}  className='botton-style' type="botton" value={"7"} onClick={e=>{setValue(value + e .target.value)}} readOnly/>
               <input  style={{paddingLeft:'20px',fontSize:'20px'}}  className='botton-style' type="botton" value={"8"} onClick={e=>{setValue(value + e .target.value)}} readOnly/>
               <input  style={{paddingLeft:'20px',fontSize:'20px'}}  className='botton-style' type="botton" value={"9"} onClick={e=>{setValue(value + e .target.value)}} readOnly/>
               <input  style={{paddingLeft:'19px',fontSize:'30px',paddingTop:'15px'}}  className='botton-style' type="botton" value={"*"} onClick={e=>{setValue(value + e .target.value)}} readOnly/>
              </div>
              <div className='btn-conatiner'>
               <input  style={{paddingLeft:'20px',fontSize:'20px'}}  className='botton-style' type="botton" value={"4"} onClick={e=>{setValue(value + e .target.value)}} readOnly/>
               <input  style={{paddingLeft:'20px',fontSize:'20px'}}  className='botton-style' type="botton" value={"5"} onClick={e=>{setValue(value + e .target.value)}} readOnly/>
               <input style={{paddingLeft:'20px',fontSize:'20px'}}  className='botton-style' type="botton" value={"6"} onClick={e=>{setValue(value + e .target.value)}} readOnly/>
               <input  style={{paddingLeft:'17px',fontSize:'35px'}}  className='botton-style' type="botton" value={"-"} onClick={e=>{setValue(value + e .target.value)}} readOnly/>
              </div>
              <div className='btn-conatiner'>
               <input  style={{paddingLeft:'20px',fontSize:'20px'}}  className='botton-style' type="botton" value={"1"} onClick={e=>{setValue(value + e .target.value)}} readOnly/>
               <input  style={{paddingLeft:'20px',fontSize:'20px'}}  className='botton-style' type="botton" value={"2"} onClick={e=>{setValue(value + e .target.value)}} readOnly/>
               <input style={{paddingLeft:'20px',fontSize:'20px'}}  className='botton-style' type="botton" value={"3"} onClick={e=>{setValue(value + e .target.value)}} readOnly/>
               <input style={{paddingLeft:'15px',fontSize:'30px'}}  className='botton-style' type="botton" value={"+"} onClick={e=>{setValue(value + e .target.value)}} readOnly/>
              </div>
              <div className='btn-conatiner'>
               <input style={{paddingLeft:'20px'}} className='botton-style' type="botton" value={"0"} onClick={e=>{setValue(value + e .target.value)}} readOnly/>
               <input style={{paddingLeft:'15px'}} className='botton-style' type="botton" value={"00"} onClick={e=>{setValue(value + e .target.value)}} readOnly/>
               <input style={{fontSize:"55px"}} className='botton-style pluse' type="botton" value={"="} onClick={calculatresult} readOnly/>
              </div>
            </form>
          </div>
      </div>
    </>
  )
}

export default App
