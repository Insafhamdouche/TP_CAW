import React , { useState }from 'react'
import { Link, Outlet } from 'react-router-dom'
import CreateContact from '../Components/CreateContact';
import ListContact from '../Components/ListContact';
import {useEffect} from 'react'
 import  { AiFillHome } from "react-icons/ai";



const Contact = () => {
  function Contact({ items }) {
    getItems()
    const [contactList, setContactList] = useState(getItems())
    useEffect(() => {
        localStorage.setItem('sharedpreferences', JSON.stringify(contactList))
    }, [contactList]);
    if (items.co1 === true) {
        return (<ListContact contactList={contactList} />)
    }
    if (items.co1 === false) {
        return (<CreateContact setContactList={setContactList} contactList={contactList} />)
    }
}

 const [co1, setCo1] = useState(null);

  return (
     <div className="contact">
      <p>Contacts<span>(click DisplayContacts/createContact button)</span></p>
      <div  className="Buttons">
        <button onClick={(e) => { e.preventDefault(); setCo1(true) }}> Display Contacts</button>
        <button onClick={(e) => { e.preventDefault(); setCo1(false) }}> Create Contact </button>
        
        <Contact items={{ co1 }} />
      </div>
      <Link to="/"><AiFillHome className='iconeHome'/></Link>
    </div>
    
    )	



}
const getItems = () => {
    let ListContact = localStorage.getItem('sharedpreferences');
    console.log(ListContact);
    if (ListContact) {
        return JSON.parse(localStorage.getItem('sharedpreferences'))
    } else {
        return [];
    }
}

export default Contact








