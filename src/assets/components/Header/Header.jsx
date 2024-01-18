
import './header.css'
import { SlArrowLeft } from "react-icons/sl";
import { SlBell } from "react-icons/sl";

function Header() {

  //const [selected, setSelected] = useState(true)

  return (
    <header>
      <section  className='header'>
        
        <SlArrowLeft className='header__arrow' />
        <h1 className="header__title">Cargo orders</h1>
        <SlBell className='header__bell'/>
      </section>
      {/* <section > */}
        <nav className="menu">
          <ul>
            <li className="menu__item--selected">
                <a href="#upcoming" >
                    Upcoming
                </a>
            </li>
            <li className="menu__item">
                <a href="#completed">
                    Completed
                </a>
            </li>
            <li className="menu__item ">
                <a href="#past">
                    Past
                </a>
            </li>
          </ul>
        </nav>
      {/* </section> */}
      
    </header>
  );
}


export default Header;