import * as React from 'react';
import "./One.css";

const One = () => {
    const tenStar = () => {
        let n = 10;
        let string = "";
        for (let i = 1; i <= n; i++) {
          for (let j = 0; j < i; j++) {
            string += "*";
          }
          string += "\n";
        }
        console.log(string);
    }

    const starsReverse = () => {
        let n = 10;
        let string = "";
        for (let i = 0; i < n; i++) {
         
          for (let k = 0; k < n - i; k++) {
            string += "*";
          }
          string += "\n";
        }
        console.log(string);
    }
    // console.log(starsReverse())
    
    return ( 
        <div className='one'>One</div>
     );
}
 
export default One;