import React from 'react'
import"./Pagedata.css"

const Pagedata = (props) => {
  return (
    <div className='title'>
      <h2>Welcom To React Nav-Bar</h2>
      <h1>{props.name}<span>Page</span></h1>
    </div>
  );
};
export default Pagedata
