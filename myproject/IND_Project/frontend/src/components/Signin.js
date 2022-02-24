import React from 'react'

function Signin() {
  return (
    <div>
         <center><h1>Login Form</h1></center>
        <form action="#" method="post">
        {% csrf_token %}
            {% load static %}
           
                <div clssName="container">
                <div clssName="imgcontainer">
                    <img src="{% static 'avatar_img1.jpg' %}" alt="Avatar" clssName="avatar"/>
                </div>
                <label for ='email'><b>UserEmail :  </b></label>
                <input type="email" placeholder="Enter email" name="email" float="right"  required/> 
                <label for='password'><b>Password : </b></label>
                <input type="password" placeholder="Enter Password" name="password" required/><br>  
                <button type="submit"><b>Login</b></button><br>     
                Don't have accounct <a href="http://localhost:8000/signup/"> register </a>
            </div>
          
        </form>
    </div>
  )
}

export default Signin