import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';

function UpdateProblem() {
  let history = useHistory();
    const { id } = useParams();

    const [Title, setTitle] = useState(null)
    const [Solution, setSolution] = useState(null)
    const [Difficulty, setDifficulty] = useState(null)
    const [Decription, setDecription] = useState(null)

    const loadProblems = async () => {
      const  { data } = await axios.get(`http://127.0.0.1:8000/api/${id}/`)
      console.log(data);
  
      setTitle(data.Title);
      setSolution(data.Solution);
      setDifficulty(data.Difficulty);
      setDecription(data.Decription);
     }

      useEffect(() => {
        loadProblems();
      }, [])

      const updateSingleProblem = async () => {
        let formField = new FormData()

        formField.append('Title',Title)
        formField.append('Solution',Solution)
        formField.append('Difficulty',Difficulty)
        formField.append('Decription',Decription)

        

        await axios({
            method: 'PUT',
            url: `http://127.0.0.1:8000/api/${id}/`,
            data: formField
        }).then(response => {
            console.log(response.data);
            history.push("/");
        })

    }



  return (
    <>
    <div>Update Problem</div>
    <div> <div className="container">
    <div className="w-75 mx-auto shadow p-5">
      <h2 className="text-center mb-4">Update A Problem</h2>
      <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Problem Title"
              name="Title"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
         
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Solution Link"
              name="Solution"
              value={Solution}
              onChange={(e) => setSolution(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Difficulty Level"
              name="Difficulty"
              value={Difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Description "
              name="Decription"
              value={Decription}
              onChange={(e) => setDecription(e.target.value)}
            />
          </div>
        <button onClick={updateSingleProblem} className="btn btn-primary btn-block">Update Product</button>
     
    </div>
  </div></div>
  </>
  )
}

export default UpdateProblem