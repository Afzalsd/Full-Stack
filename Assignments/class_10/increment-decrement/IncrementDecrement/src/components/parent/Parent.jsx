import { useState } from "react";
import Child from "../child/Child";
function Parent() {
  const [counter, setcounter] = useState(0);
  function ChangeCounter() {
    setcounter(counter + 1);
  }
  function decrement() {
    setcounter(counter - 1);
  }
  return (
    <div className="bg-info mx-auto mt-5 w-75 p-4 text-center  rounded">
      <h1>PARENT</h1>
      <h2 className="border border-warning rounded-pill">
        Counter : {counter}
      </h2>
      <Child x={{ counter, ChangeCounter, decrement }} />
    </div>
  );
}

export default Parent;
