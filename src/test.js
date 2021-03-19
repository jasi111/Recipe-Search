import logo from './logo.svg';
import './App.css';
import Axios from "axios";

function App() {

  const [query, setQuery] = useState("");

  // const [data, setData] useState ([]);
  const APP_ID = "8ca41057";
  const APP_KEY = "bf63ec4023c47d421e83d80925c4e846";

  const getData = async () => {
    const data = await Axios.get(url); 
    console.log(data);
      };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();    
  };

  const onChange = e =>{
    setQuery(e.target.value);
  };
  

  const url =`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
  return (
    <div className="App">
      
      <h1 onClick={getData}>Food App</h1>

      <form className="search-form" onSubmit={onSubmit}>
        <input type="text" placeholder="Enter Food Name to Search" autoComplete="off" onChange={onChange}/>
        <input type="submit" value="search"></input>
      </form>
    </div>
  );
}

export default App;
