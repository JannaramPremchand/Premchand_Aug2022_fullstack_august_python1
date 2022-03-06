import React from "react";
import "./CSS/main.css"
import { Card } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from "yup";
const schema = yup.object({
    Name: yup.string().required("Name is Required").min(3,'Must be greater than 2 characters'),
  }).required();
// The following component is an example of your existing Input Component
// const Input = ({ label, register, required }) => (
//     <>
//       <label>{label}</label>
//       <input {...register(label, { required })} />
//     </>
//   );
  
  // you can use React.forwardRef to pass the ref too
  const Select = React.forwardRef(({ onChange, name, label }, ref) => (
    <>
      <label>{label}</label>
      <select aria-label="Default select example" name={name} ref={ref} onChange={onChange}>
      <option>Rate Betwwen 1-5</option>
      <option value="1">&#9733;</option>
      <option value="2">&#9733;&#9733;</option>
      <option value="3">&#9733;&#9733;&#9733;</option>
      <option value="4">&#9733;&#9733;&#9733;&#9733;</option>
      <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
      </select>
    </>
  ));

function Hookform() {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

  const onSubmit = (data) => {
      console.log(data)
    alert(JSON.stringify(data));
    
 
    
  };
  return (
    <div className="container box">
    <Card style={{ width: '18rem' }} className=" box">
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label><br/>
      <input  {...register("Name")} required id="name"/>
      <h6>{errors.Name?.message}</h6> <hr/>
      <Select label="Rate" {...register("Rate")} id="service"/> <hr/>
      <label>Comment</label> <br/>
      <input  {...register("Comment")} required id="cmt" /> <hr/>
      <input type="submit" />
    </form>
    </Card>
    </div>
  )
}

export default Hookform