import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux/rootActions';

function HooksIceCreamContainer() {
  const numberOfIceCream = useSelector(state => state.iceCream.numberOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of Ice Cream - {numberOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
    </div>
  )
}

export default HooksIceCreamContainer
