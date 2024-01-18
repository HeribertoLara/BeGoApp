
import { TbBus } from "react-icons/tb";
import { useContext} from "react";
import { MdOutlineFireTruck } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegEye } from "react-icons/fa6";


import './container.css'
import { DataContext } from "../../../context/Context";



function Container() {
    const {
        extractCity,
        orders,
        formatDate
    }=useContext(DataContext)


    return (
        <>

            <ul className="container">
              {orders===null?'loading':orders.map(order => (
                  <li className="container__list" key={order._id}>
                          <p>Order  {order.order_number}</p>
                        <article className="container__card">
                            <section className="container__head">
                                <p>
                                    <TbBus/> {order.type}
                                </p>
                                <p>
                                    in transit
                                </p>
                            </section>

                            <section className="">
                               
                                <p>PICKUP</p>
                                <div>
                                    <p>  
                                        <MdOutlineFireTruck/> {extractCity(order.destinations[0].address)}
                                    </p>
                                    <p>{formatDate(order.start_date)}</p>
                                </div>
                                <p> {order.destinations[0].address.slice(0, 30)} ...</p>
                                


                            </section>
                            <div className="container__line"></div>
                            <section>
                                <p> DROPOFF </p>
                                <div>
                                    <p>
                                        <HiOutlineLocationMarker/> {extractCity(order.destinations[1].address)}
                                    </p>
                                    <p>{formatDate(order.end_date)}</p>
                                </div>
                                <p> {order.destinations[1].address.slice(0, 30)}</p>
                                
                            </section>

                            <section 
                                className="container__footer">
                                    
                                    
                                <p>
                                    Start PickUp 
                                    <time 
                                        dateTime={formatDate(order.start_date).slice(20, 28)}>
                                        {formatDate(order.start_date).slice(20, 28)}     
                                    </time> hrs</p>
                                <button
                                    className="container__button"
                                >
                                    <FaRegEye/> resume</button>
                            </section>

                        </article>
                    </li>
                ))} 
            </ul>
        </>
    );
              }
export default Container;