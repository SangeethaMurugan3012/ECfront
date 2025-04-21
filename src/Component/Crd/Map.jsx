import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Map() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3700/cardData/get')  
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);




return (
    <div className="container-fluid py-4 mb-lg-5">
      <h1 className="mb-4 text-center">New Collections</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4" >
        {data.map((item, index) => (
          <div className="col" key={index}>
            <div className="card h-100 w-100 shadow-sm">
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
   
    </div>
  );
  


 }
