import { useEffect, useState } from "react";
import { getInfo } from './api/api.js';

function App() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getInfo();
        setInfo(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {info ? (
        <ul>
          {info.map(element => (
            <li> 
              <p>Nombre: {element._user}</p>
              <p>mail: {element._mail}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default App;
