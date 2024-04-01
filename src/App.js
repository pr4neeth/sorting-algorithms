import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/home';
import Compare from './pages/compare';
import { Button } from "@mui/material";


function App() {

  const [isSingle, setIsSingle] = useState(true)

  const handleClick = () => {
    setIsSingle(!isSingle);
  } 
  return (
    <>
      <br/>
      <Button
        variant="outlined"
        onClick={handleClick}
      >
        {isSingle ? <>Compare 2 or more algo</> : <>Visualise single Algo</>} 
      </Button>

      {isSingle? <Home/> : <Compare />}
    </>
  );
}

export default App;
