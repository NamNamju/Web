import React, { useState, useEffect } from 'react';

function Counter() {

  const [count, setCount] = useState(0);
  const countDown = () => {
    setCount(count - 1);
    alert('1 감소, 현재값 : ' + (count - 1));
  }
  const countUp = () => {
    setCount(count + 1);
    alert('1 증가, 현재값 : ' + (count + 1));
  }
  const reset = () => {
    setCount(0);
    alert('0으로 초기화');
  }

  /*useEffect(() => {

    if(count-setCount() <0) {
      alert('1 감소, 현재 ' + count);
    }else if (count-count >0) {
      alert('1 증가, ')
    }
    alert('업데이트');
  },[count]);*/

  return (
    <div >
      <h1> counter</h1>
      <h2> {count}</h2>
      <div id = "btn">
      <button id = "btn1" onClick={countDown}> 1 감소 </button>
      <button id = "btn3" onClick={reset}> 초기화 </button>
      <button id = "btn2" onClick={countUp}> 1 증가 </button>
      </div>
    </div>
  );
}

export default Counter;
