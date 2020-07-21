import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/actions/counter'


function Counter(props) {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()
    return (
        <div className='counter'>
            <h1>Counter {counter} </h1>
            <button onClick={() => dispatch(increment(5))}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}

export default Counter