import { useEffect } from "react";
import { handleFetch } from "./utils";

// fetching multiple 
function AllGameContainer({ setError, setGame }) {

  useEffect(() => {
    console.log('check test')
    const doFetch = async () => {
      const [data, error] = await handleFetch(`https://www.freetogame.com/api/games`, { method: 'GET', headers: { 'contentType': 'application/json' }, mode: 'cors' })
      if (data) setGame(data)
      if (error) setError(error)



      console.log(data)
    }

    doFetch();

  }, [])

}

export default AllGameContainer