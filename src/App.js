import { useEffect, useState, useCallback } from "react";
import axios from 'axios'
import { ParafinElements } from "@parafin/react-parafin-elements";


function App() {
  const [token, setToken] = useState(null)
  const [state, setState] = useState(null)

  useEffect(() => {
    const fetchToken = async () => {
      
      // replace with your own Person ID
      const personId = process.env.REACT_APP_PERSON_ID
      
      // fetch Parafin token from server
      const response = await axios.get(`/parafin/token/${personId}`) 
      setToken(response.data.parafinToken)
    }

    if(!token) {
      fetchToken()
    }    
  })

  return (
    <div style={{width: "600px"}}>
      <h1>Parafin Elements Quickstart</h1>
      {token ? (
        <div>
          <ParafinElements
            product="capital"            
            environment="production"
            token={token}
          />              
        </div> 
      ) : (
        <div>
          loading...
        </div>         
      )}
    </div>
  );
}

export default App;
