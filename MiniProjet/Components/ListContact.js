import React, { useState } from "react";
import  { AiOutlineSearch } from "react-icons/ai";

const ListContact = ({ contactList  }) => {
  console.log(contactList)
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(contactList);
  const addEmployee = newContact => {
    setData([...contactList, newContact]);
  };
  const handleChange = value => {
   setSearchText(value);
   
    filterData(value);
  };

  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    console.log(lowercasedValue)
    if (lowercasedValue === "") setData([...contactList])
    else {
      console.log("hi i m in filter data")
      const filteredData = data.filter(item => {
        return Object.keys(item).some(key =>
           item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      console.log(filteredData);

      setData(filteredData);
    }
  }

  return (
 
    
      <div>
      <input type="text" placeholder="Search Contact .."   value={searchText} onChange={e => handleChange(e.target.value)} /> 
                     
                     <table  className="table">
                       <thead >
                         <tr>
                           <th>Name</th>
                           <th>Phone</th>
                           <th>Email</th>
                         </tr>
                       </thead>
                       <tbody>
                       
                         {contactList=data.map((data,i) => {
                             return (
                               <tr key={i}>
                                 <td>{data.name}</td>
                                 <td>{data.phone}</td>
                                 <td>{data.email}</td>
                               </tr>
                             );
                         
                         })}
                       </tbody>
                     </table>
                     {data.length === 0 && <span>No Contact found to display!</span>}
                     <br />
                     <br />
      </div>
      
    
  );

  
};
export default ListContact;




