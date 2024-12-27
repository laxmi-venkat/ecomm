import axios from 'axios';
import { useEffect, useState } from 'react';
import "./Common.css";



const Laptops = ()=>{
       const [laptops,setLaptops] = useState([]);
      const get_Laptops= async()=>{
       const res= await axios.get("http://localhost:8080/laptops");
       const {data} = res;
       setLaptops(data)
      }
    useEffect(()=>{
        get_Laptops()
    },[]);

    return(
        <>
       <div class="parent">
           {
            laptops.map((element,index)=>{
              return(<div className="child">
                <img src={element.pimage}></img>
                <h4>{element.pname}</h4>
              </div>)
            })
           }
       </div>
        </>
    )
}

export  default Laptops;