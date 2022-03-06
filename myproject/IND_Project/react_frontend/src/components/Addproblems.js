import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function AddProblems() {
    let history = useHistory();

    const [Title, setTitle] = useState(null)
    const [Solution, setSolution] = useState(null)
    const [Difficulty, setDifficulty] = useState(null)
    const [Decription, setDecription] = useState(null)


    const addNewProblem = async () => {
        let formField = new FormData()
        formField.append('Title',Title)
        formField.append('Solution',Solution)
        formField.append('Difficulty',Difficulty)
        formField.append('Decription',Decription)
        await axios({
          method: 'post',
          url:'http://localhost:8000/api/',
          data: formField
        }).then(response=>{
          console.log(response.data);
          history.push('/')
        })
    }
  return (
    <div>
         <div className="container">
            <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Problem</h2>
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
          <button className="btn btn-primary btn-block" onClick={addNewProblem}>Add Product</button>
       
      </div>
    </div>
        </div>
    </div>
  )
}

export default AddProblems