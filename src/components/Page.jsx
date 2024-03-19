import React, { useState } from 'react';
import Draw from './Draw';
import './Page.css'


const Page = () => {
    const [number, setNumber] = useState('');
    const [submittedData, setSubmittedData] = useState(null);
  
    const handleInputChange = (event) => {
      const inputValue = parseInt(event.target.value, 10);
      setNumber(isNaN(inputValue) ? '' : inputValue);
    };
  
    const handleSubmit = () => {
      setSubmittedData(number);
      //console.log(submittedData)
    };
  
    return (
      <div className='container'>
        <label htmlFor="number">Input:</label>
        <input type="text" id="number-input" value={number} onChange={handleInputChange}/>
        <button className="buttom-input" onClick={handleSubmit}>Submit</button>
        <Draw submittedData={submittedData} />
        <div className="container-report">
          <div className="report"></div>
        </div>
      </div>
    );
  };
  
  export default Page;