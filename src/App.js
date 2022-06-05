import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
 const Api_Key=process.env.REACT_APP_API_KEY
  let pageSize = 25
  let country = 'us'
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<News Api_Key={Api_Key} key={'general'} category={'general'} pageSize={pageSize} country={country} />} />
          <Route exact path='/business' element={<News Api_Key={Api_Key} key={'business'} category={'business'} pageSize={pageSize} country={country} />} />
          <Route exact path='/entertainment' element={<News Api_Key={Api_Key} key={'entertainment'} category={'entertainment'} pageSize={pageSize} country={country} />} />
          <Route exact path='/general' element={<News Api_Key={Api_Key} key={'general'} category={'general'} pageSize={pageSize} country={country} />} />
          <Route exact path='/health' element={<News Api_Key={Api_Key} key={'health'} category={'health'} pageSize={pageSize} country={country} />} />
          <Route exact path='/science' element={<News Api_Key={Api_Key} key={'science'} category={'science'} pageSize={pageSize} country={country} />} />
          <Route exact path='/sports' element={<News Api_Key={Api_Key} key={'sports'} category={'sports'} pageSize={pageSize} country={country} />} />
          <Route exact path='/technology' element={<News Api_Key={Api_Key} key={'technology'} category={'technology'} pageSize={pageSize} country={country} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
