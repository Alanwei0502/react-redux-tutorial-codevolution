// react-redux v7.1: subscribe to store and dispatch actionswithout connect()
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/rootActions';

function HooksCakeContainer() {
  const numberOfCakes = useSelector(state => state.cake.numberOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Num of Cakes - {numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer
