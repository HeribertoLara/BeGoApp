import { createContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types"
export const  DataContext = createContext()
export const  DataProvider= ({children}) => {

   
    const [orders, setOrders]= useState(null)
    const [text, setText]=useState('')
    const [filteredOrders, setFilteredOrders] = useState(null);
    const url = 'https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/'

    useEffect(()=>{

        const getOrders = async () => {
            try {
              const response = await axios.get(`${url}/orders/upcoming`);
              console.log(response.data.result);
              setOrders(response.data.result);
            } catch (error) {
              console.error("Error fetching orders:", error);
              
            }
        }
        getOrders()
       },[])

       const formatDate = (timeStamp)=>{
        const date = new Date(timeStamp);
        const formatoFecha = new Intl.DateTimeFormat('es-MX', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZone: 'America/Mexico_City', 
            
          });
          const fechaFormateada = formatoFecha.format(date);
          return fechaFormateada
    }
    
    const orderFiltered = () => {
        let searchedOrders;
    
        if (text.length === 0) {
          searchedOrders = orders;
        } else {
          searchedOrders = orders.filter(order => order.order_number.includes(text));
        }
    
        setFilteredOrders(searchedOrders);
        return searchedOrders;
      };


    
    const extractCity = (address)=>{
        const items = address.split(', ');
        const city = items[items.length - 2];
        return city

    } 

    
  return (
    <DataContext.Provider value={{
        orders:filteredOrders||orders,
        setOrders,
        text,
        setText,
        extractCity,
        orderFiltered,
        formatDate
        }}
    >
    {children}
    </DataContext.Provider>
  )

}


DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
