import React, { useEffect, useState } from 'react';
import { useMoralisQuery, useMoralis }  from "react-moralis";
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const { Moralis } = useMoralis();
  const { data, fetch } = useMoralisQuery("contactFormModal");
  const [Pagerefesh, setPageRefresh] = useState(false);


  useEffect(() => {
    fetch()
  }, [Pagerefesh])


      let removeData;
      data.map((obj)=>{
        removeData = async() => {
         const query = new Moralis.Query('contactFormModal')
         query.equalTo('objectId',obj.id)
        const object = await query.first(({useMasterKey: true}))
         if(object) {
           object.destroy().then(() => {
        alert("Deleted Successfully!");
        setPageRefresh(!Pagerefesh)
          }, (error) => {
             console.log(error);
           })
         }
            }
          })


   return (
<div style={{ marginTop:"100px"}}>

   <table style={{
     margin:'auto',
     paddingTop:'80px',
   }}
   className='styledTable'>
     <thead>
       <tr>
       <th>No.</th>
       <th >Name</th>
       <th>Email</th>
       <th>Contact</th>
       <th>Action</th>
       </tr>
     </thead>
     <tbody>
        
         
     {data.map((obj, index) => {
        return (
          <tr key = {obj.id}>
            <th scope="row">{index + 1}</th>
            <td>{ obj.attributes.name}</td>
            <td>{ obj.attributes.email}</td>
            <td>{ obj.attributes.contact}</td>
           <td>
           <Link to={`/update/${obj.id}`}>
            <button className='btn btnEdit'>Edit</button>
            </Link>
            <button className='btn btnDelete' onClick={removeData}>Delete</button>

           </td>
          </tr>
        )
        })}
     </tbody>
   </table>

 </div>  )
}


export default Home


