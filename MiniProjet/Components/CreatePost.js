import React, { useState } from 'react';
const CreatePost = ({setPostList, postList }) => {
    const [subject, setSubject] = useState('');
    const [description,setDescription] = useState('');
    const [date,setDate] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact={subject:subject,description:description,date:date}
        
        setPostList([...postList, { subject: subject, description:description,date:date }])
        postList(newContact);
        setSubject('');
        setDescription('');
        setDate('')
    }
    return (
        <form onSubmit={handleSubmit}>
            Subject :<input type='text' value={subject} onChange={(e) => setSubject(e.target.value)} /><br/><br/>
            Description: <textarea  value={description} onChange={(e) => setDescription(e.target.value)}> </textarea>
               

     <br/><br/>
            Date: <input type='date' value={date} onChange={(e) => setDate(e.target.value)} /><br/><br/>
            <input type='submit' value='Add New Post' />
        </form>
       
        
    );
    
        
}
export default CreatePost;









