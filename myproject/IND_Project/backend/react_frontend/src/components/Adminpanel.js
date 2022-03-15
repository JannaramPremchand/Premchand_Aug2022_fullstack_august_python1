import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams, useHistory } from 'react-router';
function Adminpanel() {
    const [problems, setProblems] = useState([])
    const {id} = useParams();
const history = useHistory();
    const fetchProducts = async () => {
        const result = await axios.get('http://127.0.0.1:8000/api/');
        console.log(result.data)
        setProblems(result.data)
    }

    useEffect(() => {
      fetchProducts();
    },[])
    const deleteProduct = async (id) => {
      await axios.delete(`http://127.0.0.1:8000/api/${id}/`)
      history.push("/")
  }
  return (
    <div>
        <div>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>S.NO</th>
      <th>Title</th>
      <th>Solution</th>
      <th>Difficulty</th>
    </tr>
  </thead>
  <tbody>
    {problems.map((problem,index) => (
      <tr>
      <td>{problem.ProblemId}</td>
      <td>{problem.Title}</td>
      <td><Button variant="outline-primary" href={`${problem.Solution}`} >&#128509;</Button></td>
      <td>{problem.Difficulty}</td>
      <td><Link className="btn btn-primary mr-2" to={`${problem.ProblemId}`}>Full Detail</Link></td>
      <td><Link className="btn btn-outline-primary mr-2" to={`/${problem.ProblemId}/update`}>Update</Link></td>
      <td><Link className="btn btn-danger" onClick={() => deleteProduct(problem.ProblemId)}>Delete</Link> </td>
    </tr>
    ))}
    
    </tbody>
</Table>
    </div>
    </div>
  )
}

export default Adminpanel