import React, { useContext } from 'react';
import BaseContext from '../context/BaseContext';

export default function Item(props) {
  const clickMe = useContext(BaseContext);

  return (
    <div>
      <p>{props.name}</p>
      <button onClick={clickMe}>BYE</button>
    </div>
  );
}
