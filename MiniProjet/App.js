import {BrowserRouter as Router, Link,
Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import CreateContact from './Components/CreateContact';
import ListContact from './Components/ListContact';
import CreatePost from './Components/CreatePost';
import PostList from './Components/PostList';

function App() {
return (
	<div className="App">
	<Router>
		<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/contact" element={<Contact />}>
			<Route path="CreateContact" element={<CreateContact />} />
			<Route path="ListContact" element={<ListContact/>}/>
		</Route>
		<Route path="/Blog" element={<Blog />}>
			<Route path="CreatePost" element={<CreatePost />} />
			<Route path="PostList" element={<PostList/>}/>
		</Route>
		</Routes>
	</Router>
	</div>
);
}

export default App;
