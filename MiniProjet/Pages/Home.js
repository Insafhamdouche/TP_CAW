import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import  { AiFillHome } from "react-icons/ai";

const Home = () => {
return (
	<div className="home">
		{/* <img src="https://reactjs.org/logo-og.png" width={'200px'} alt="React Image" /> */}
	 <p>
                i am Insaf Hamdouche,<span> welcome to my HomePage </span> 
            </p>

			<br/>
			<br/>
			<br/>
			<AiFillHome className='iconeHome'/>

	<p>You can browse my page with the <Link to="contact" className='link'>contacts </Link> 
	 or <Link to="/Blog" className='link'>Blog</Link> links </p>
	<Outlet />
	</div>
)
}

export default Home
