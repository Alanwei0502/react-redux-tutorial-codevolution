import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream, buyCake } from '../redux/rootActions'

function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}>Buy Item</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numberOfCakes
    : state.iceCream.numberOfIceCream

  return {
    item: itemState
  }
}

const mapDispatchToProps = (dispatch, ownProps) => { 
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())

  return {
    buyItem: dispatchFunction
  }
}

// pass 'null' into mapStateToProps argument position to connect only with mapDispatchToProps
export default connect(null, mapDispatchToProps)(ItemContainer)
