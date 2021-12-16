import React, { useState } from "react";



const Example = () => {
     const [value, setValue] = useState(0);
     const [value2, setValue2] = useState(0);
    const reset = () => {
      setValue(0);
      setValue2(0);
    };
    const complexIncrease = () => {
      setTimeout(() => {
        setValue2((prevState) => {
          return prevState + 1;
        });
      }, 2000);
    };
    const complexDecrease = () => {
      setTimeout(() => {
        setValue2((prevState) => {
          return prevState - 1;
        });
      }, 2000);
    };
       return (
         <>
           <section style={{ margin: "4rem 0" }}>
             <h2>regular counter</h2>
             <h1>{value}</h1>
             <button className="btn" onClick={() => setValue(value - 1)}>
               decrease
             </button>
             <button className="btn" onClick={reset}>
               reset
             </button>
             <button className="btn" onClick={() => setValue(value + 1)}>
               increase
             </button>
           </section>
           <section style={{ margin: "4rem 0" }}>
             <h2>more complex counter</h2>
             <h1>{value2}</h1>
             <button className="btn" onClick={complexDecrease}>
               decrease  later
             </button>
             <button className="btn" onClick={reset}>
               reset
             </button>
             <button className="btn" onClick={complexIncrease}>
               increase later
             </button>
           </section>
         </>
       );
   }

export default Example;
