import React from "react";
import axios from 'axios';





useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
const Header = () => (
   

  <div className="my-10 mx-2">
    <div className="w-100 flex p-1  bg-[rgb(56,59,60)] text-white">
      <h1 className="font-bold p-2">Smart Agriculture</h1>
      <div className="p-2 flex">
        <div className="bg-white text-[rgb(56,59,60)] ">Controller</div>
        <div className="">FarmerDashboard</div>
        <div className="">BuyerDashbord</div>
        <div className="">MarketPlace</div>
        <div className="">Alerts</div>
      </div>
      <div className="p-2 flex">
        <div className="">Wind speed</div>
        <div className="">Weather</div>
        <div className="">Humidity</div>
        <div className="">Time</div>
        
      </div>
    </div>
    <div className="w-100"></div>
    <div className="w-100"></div>
  </div>
);

export default Header;
