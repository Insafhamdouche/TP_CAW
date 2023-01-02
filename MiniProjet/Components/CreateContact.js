import React, { useState } from 'react';
const CreateContact = ({setContactList, contactList }) => {
    const [name, setName] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact={name:name,phone:phone,email:email}
        
        setContactList([...contactList, { name: name, phone:phone,email:email }])
        contactList(newContact);
        setName('');
        setPhone('');
        setEmail('')
    }
    return (
        <form onSubmit={handleSubmit}>
            Name:<input type='text' value={name} onChange={(e) => setName(e.target.value)} /><br/><br/>
            Phone Number: <input type='tel' value={phone} onChange={(e) => setPhone(e.target.value)} 
            // pattern="0[5-6]{1}[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}"
    //    required
    /> 
    {/* <small>Format: 0*********</small> */}
     <br/><br/>
            Email: <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} /><br/><br/>
            <input type='submit' value='Add New Contact' />
        </form>
       
        
    );
    
        
}
export default CreateContact;









