import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';


function ProblemDetails() {
  
const [problem, setProblem] = useState([])

const {id} = useParams();


useEffect(() => {
    getSingleProblem();
    console.log(problem)
},[])


const getSingleProblem = async () => {
  const  { data } = await axios.get(`http://127.0.0.1:8000/api/${id}/`)
  console.log(data);
  setProblem(data);
}



  return (
    <div >
    <h2>****solve it if you can****</h2>
         <hr></hr>
         <div className="full-problem-detail">
          
             <div className="problem-detail">
                 <p>{problem.Title}</p>
                 <p>{problem.Difficulty}</p>
                 <p>{problem.Decription}</p>
             </div> 
         </div>
        <div className='container my-4'>
       

        <iframe title="myframe" src="https://trinket.io/embed/python3/c25e7712ca?start=result" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>



        </div>
 </div>
  )
}

export default ProblemDetails