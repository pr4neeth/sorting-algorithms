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
      <div style={{justifyContent:'right', display:'flex'}}>
        <Button
          variant="outlined"
          onClick={handleClick}
        >
          {isSingle ? <>Compare run time</> : <>Visualise single algorithm</>} 
        </Button>
      </div>

      {isSingle? <Home/> : <Compare />}
    </>
  );
}

export default App;
