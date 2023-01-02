import React, { useState } from "react";
import LikeButton from './LikeButton';

const PostList = ({ postList  }) => {
  console.log(postList)
  return (
    <div>
    <table  className="table"  >
      
          <tr>
            <th>Subject</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
      
        <tbody>
        
          {postList.map((data2,i) => {

            
              return (
                
                <tr key={i}>
                  <td>{data2.subject}</td> 
                  <td>{data2.description}</td> 
                  <td>{data2.date}</td>
                   <LikeButton />
                </tr>
                
              );
              
          })}
          
          
        </tbody>
      </table>
     
      <br />
      <br />
    </div>
     
  
  );
  
  
};
export default PostList;




