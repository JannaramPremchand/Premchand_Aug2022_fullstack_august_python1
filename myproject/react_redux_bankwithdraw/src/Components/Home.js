import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { COUNTER_KEY } from "../redux/counterRedux/counter.reducer";
import { decreaseCounter1, decreaseCounter2 } from "../redux/counterRedux/counter.actions";
function Home(props) {
  let dispatch = useDispatch()

  // handle click events
  let decreaseBtn1 = () =>{
    dispatch(decreaseCounter1())
  }

    // handle click events
    let decreaseBtn2 = () =>{
      dispatch(decreaseCounter2())
    }
  
  // view data from store
  let viewCounter = useSelector((state) =>{
    return state[COUNTER_KEY]

  })
  return (
    <div>
        <div className="App">
    <img className="App__userpic" src={"https://image.ibb.co/nC8vGp/girl.png"} alt="photographer" />
      <p className="App__username">Hello, {props.name} ! </p>
      <div className="App__amount">
      {viewCounter.count}
        <p className="App__amount--info">Total Amount</p>
      </div>

      <section className="App__buttons">
        <button data-amount="10000" onClick={decreaseBtn1}>WITHDRAW $10,000</button>
        <button data-amount="5000" onClick={decreaseBtn2}>WITHDRAW $5,000</button>
      </section>

      <p className="App__giveaway">Give away all your cash to charity</p>
  </div></div>
  )
}

export default Home