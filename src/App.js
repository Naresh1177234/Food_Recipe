import React,{useState} from 'react'
import Product from './Product';
import Navbar from './Nav';
import Footer from './Footer';

const  App=()=> {
  const[search,setSearch]=useState('');
  const  YOUR_APP_ID="e9d9d98b";
  const  YOUR_APP_KEY="c5f396fc286b37513ad293dac4d4a59c";
  const [data,setData]=useState([]);
  const submitHandler=e  =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=13&calories=591-722&health=alcohol-free`).then(
    response=>response.json()
  ).then(
    data=>setData(data.hits)
  )
  console.log(data)
  }
  return (
    <div>
      <Navbar/><br/>
      <center>
        <h3>Food Recipe App</h3><br/>
        <form onSubmit={submitHandler}>
          <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)}/><br/><br/>
          <input type='submit' className='btn btn-danger' value="search"/><br/>
        </form>
        <br/>
        {data.length>=1 ? <Product data={data}/>:null }
      </center>
      <Footer/>
    </div>
  )
}
export default App