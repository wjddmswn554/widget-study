import React, {useState } from 'react';

const Counter = (props) => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count+1);
      }
      const clickString = props.click || 'Click'; //props.click 값이 존재x면 'Click' 사용
      return (//JSX문법
          <button onClick={increment}>
              {clickString} {count}
          </button>
      )
};

export default Counter;