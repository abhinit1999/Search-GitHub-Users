import React,{ useState } from 'react';
import '../components/style.css';
import Showdata from './Showdata';

const Userdata = () => {

    const [userName, setUserName] = useState("");
    const [data, setData] = useState({});
  
    const onChangeHandler = (e) => {
      setUserName(e.target.value);
    };
  
    const onSubmitHandler = (e) => {
      e.preventDefault();
      fetch(`https://api.github.com/users/${userName}`)
        .then((response) => {
          return response.json();
        })
        .then((originalData) => {
          if (originalData) {
            setData(originalData);
          }
        });
    };
  



    


  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>Search Github User By One Click</h1>
        </div>
        <form onSubmit={onSubmitHandler}>
          <input type="text" placeholder="search user...."
          value={userName} onChange={onChangeHandler} />
          <button className="btn">Search</button>
        </form>
        
        <Showdata data={data}></Showdata>

      </div>
    </>

  )
}

export default Userdata;