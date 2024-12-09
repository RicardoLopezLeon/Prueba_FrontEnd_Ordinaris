import { useEffect } from "react"
import './App.css';
import axios from "axios"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addKey } from "./redux/userSlice";

import BarraMenu from "./componentes/header/BarraMenu.js";
import Dashboard from "./componentes/dashboard/Dashboard.js";
import Footer from "./componentes/footer/Footer.js";


function App() {

  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.post(
              'https://repoapi.ordenaris.com/api/candidato',
              {
                correo: user.correo,
              },
              {
                headers: {
                  ordProyecto: 'a6093c23ae10457c8t0b8b298fc8b500',
                },
              }
            );
            dispatch(addKey(response.data.uuid))
            console.log('Respuesta:', response.data.uuid);
          } catch (error) {
            console.error('Error en la petición:', error);
          }
        };
        fetchData();
    }, [dispatch, user.correo]);
    

  return (
    <>
        <BarraMenu/>
        <Dashboard/>
        <Footer/>
    </>
  );
}

export default App;
