import React from "react";
import axios from 'axios';







const Header = () => {
//     const [time, setTime] = useState(new Date().toLocaleTimeString());

//   useEffect(() => {
//     const timerId = setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);

//     return () => clearInterval(timerId);},[]); // Cleanup
   
return(
    
    <div className="my-10 mx-2 w-[100%]">
    <div className="w-100 flex p-1  bg-[rgb(56,59,60)] text-white">
      <h1 className="font-bold p-2 w-[15%]">Smart Agriculture</h1>
      <div className="p-2 flex font-thin w-[60%] ">
        <h2 className="bg-white text-[rgb(56,59,60)] p-1">Controller</h2>
        <h2 className="p-1 text-[rgb(152,154,156)]">FarmerDashboard</h2>
        <h2 className="p-1 text-[rgb(152,154,156)]">BuyerDashbord</h2>
        <h2 className="p-1 text-[rgb(152,154,156)]">MarketPlace</h2>
        <h2 className="p-1 text-[rgb(152,154,156)]">Alerts</h2>
      </div>
      <div className="m-2 flex font-thin mx-auto border-[1px] border-[rgb(152,154,156)] bg">
        <h2 className="p-1 text-end">Wind speed</h2>
        <h2 className="p-1 text-end">Weather</h2>
        <h2 className="p-1 text-end">Humidity</h2>
        <h2 className="p-1 text-end">Current Time</h2>
        
      </div>
    </div>
    <div className="w-[100%]"></div>
    <div className="w-[100%]"></div>
  </div>
    
    
);
  
};

export default Header;
