import React, { useEffect } from 'react';
import"./Pagedata.css"

const Pagedata = (props) => {
  useEffect(() => {
    document.body.style.backgroundColor = props.backgroundColor;
    return () => {

      document.body.style.backgroundColor = '';
    };
  }, [props.backgroundColor]);

  return (
    <div className='title'>
      <h2>Welcom To React Nav-Bar</h2>
      <h1>{props.name}<span>Page</span></h1>
    </div>
  );
};
export default Pagedata
