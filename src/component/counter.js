import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    const increament = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div className="container" style={{ textAlign: 'center', marginTop: '20px' }}>
            <h3>Counter Button</h3>
            <div className="d-flex justify-content-center align-items-center">
                <button onClick={increament}
                    className="btn btn-success btn-lg m-2"
                >
                    +
                </button>
                <h4 className="m-2">{count}</h4>
                <button onClick={decrement}
                    className="btn btn-danger btn-lg m-2"
                >
                    -
                </button>
            </div>
        </div>
    )
}
export default Counter;