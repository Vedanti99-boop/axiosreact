// import React from 'react'
// import axios from "axios";
// import { useEffect } from 'react'
// import { useState } from 'react';
// import "./AxiosDemo.css"

// const AxiosDemo = () => {

//     const [data,setData]=useState([])

//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/photos")
//         .then((res)=>{
//             setData(res.data)
//         })
//     })
//   return (
//    <>
//   <div className='container'>
//   {data.map((curElem,index)=>{

// const {title,url,id} = curElem
// return(
//     <div key={index}>

//        <div className='card'>
//        <img src={url} alt="" />
//         <div className='card-body'>
//         <h2>{id}</h2>
//         </div>
//        </div>
//     </div>
// )

// })}
//   </div>
//    </>
//   )
// }

// export default AxiosDemo

// import React from "react";
// import "./AxiosDemo.css";
// import { useGlobalContext } from "./Context";

// const AxiosDemo = () => {

//     const{oData}=useGlobalContext()
//   return (
//     <>
//       <div className="container">
//         {oData.map((curElem, index) => {
//           const { title, url, id } = curElem;
//           return (
//             <div key={index}>
//               <div className="card">
//                 <img src={url} alt="" />
//                 <div className="card-body">
//                   <h2>{id}</h2>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default AxiosDemo;

import React, { useState } from 'react';
import './AxiosDemo.css';
import { useGlobalContext } from './Context';

const AxiosDemo = () => {
  const [toggle, setToggle] = useState(true);
  const [selectedData, setSelectedData] = useState(null);
  const { oData,error } = useGlobalContext();

  const change = () => {
    setToggle(!toggle);
  };

  const handleCardClick = (data) => {
    setSelectedData(data);
    setToggle(false);
  };

  const goBack = () => {
    setSelectedData(null);
    setToggle(true);
  };

  return (
    <>
    {/* {error!==" " && <h2>{error}</h2> } */}
      {toggle ? (
        <div onClick={change} className='container'>
          {oData.map((curElem, index) => {
            const { title, url, id } = curElem;
            return (
              <div key={index} onClick={() => handleCardClick(curElem)}>
                <div className='card'>
                  <img src={url} alt='' />
                  <div className='card-body'>
                    <h2>{id}</h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div onClick={change}>
          <div className='another-div card '>
            {selectedData ? (
              <>
                <div className='card mt-5'>
                  <img src={selectedData.url} alt='' />
                  <div className='card-body'>
                    <h2>{selectedData.id}</h2>
                    {/* <h3>{selectedData.title}</h3> */}
                  </div>
                </div>
                <div>
                  <button className='btn btn-primary mt-5 mb-5' onClick={goBack}>
                    Go to Previous Page
                  </button>
                </div>
              </>
            ) : (
              <p>No data available</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AxiosDemo;
