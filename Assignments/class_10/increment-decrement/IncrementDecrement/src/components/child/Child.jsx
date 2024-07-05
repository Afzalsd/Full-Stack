
import { useState } from "react";

function Child(props) {
  return (
    <div className="bg-info p-4">
      <h1>CHILD</h1>
      <div className="border border-warning rounded-pill">
        <button className="btn btn-success m-3" onClick={props.x.ChangeCounter}>
          Increment
        </button>
        <button className="btn btn-success m-3" onClick={props.x.decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}
export default Child;
