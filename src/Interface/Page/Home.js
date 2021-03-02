import React,{ useState , useEffect }  from 'react'
import { NavItem } from 'react-bootstrap';

const Home = () => {
    
    const [data, setData]= useState([]);
    //API fetch data
    useEffect(async () => {
           const response = await fetch("https://jsonplaceholder.typicode.com/posts");
           const data = await response.json();
           setData(data.splice(0,10));
    },[]);
    

  

    return (
        <>
           <ul>
               {data.map(item => {
                   return <li key={data.id}>{item.body}</li>
               })}
           </ul>
        </>
    )
}

export default Home;

