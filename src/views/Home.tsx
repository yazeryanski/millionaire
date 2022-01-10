import React from "react";
import {useNavigate} from "react-router-dom";
const Home:React.FC = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/game');
  }
  return (
    <>
      <h1>Home</h1>
      <button onClick={clickHandler}>Game</button>
    </>
  )
}

export default Home;