import React, {useState , useEffect} from 'react'
import axios from 'axios'
function Problemslist() {
    const[problems, setProblems]=useState([])

    useEffect(() => {
      axios.get('http://127.0.0.1:8000/').then(res => {
          console.log(res)
          setProblems(res.data)
      })
      .catch(err =>{
          console.log(err)
      })
    
    },[])
    
  return (
      <>
    <div>Problemslist</div>
    <div>
       <ul className='prob'>
            {
                problems.map(e =>{
                    return(
                    <>
                    <li key={e.id}>{e.ProblemId}</li> 
                    </>
                )})
            }
             {
                problems.map(e =>{
                    return(
                    <>
                    <li key={e.id}>{e.Title}</li> 
                    </>
                )})
            }
            {
                problems.map(e =>{
                    return(
                    <>
                    <li>{e.Solution}</li> 
                    </>
                )})
            }
            {
                problems.map(e =>{
                    return(
                    <>
                    <li>{e.Difficulty}</li> 
                    </>
                )})
            }
           </ul>
    </div>
    </>
  )
}

export default Problemslist
