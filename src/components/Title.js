import React from 'react'
import "./Title.css"
import { Line } from './Line'

const Title = (props) => {
  return (
    <div className="title">
        <h1 className="heading">
           <span>{props.color}</span> {props.noncolor}
        </h1>
        <Line/>
      </div>
  )
}

export default Title




// import React from 'react';
// import './Title.css'; // Assuming you're using a separate CSS file

// const Title = ({ color, noncolor }) => {
//   return (
//     <div className="title-container">
//       <h1 className="custom-font">
//         <span className="colored-text">{color}</span> {noncolor}
//       </h1>
//     </div>
//   );
// };

// export default Title;











