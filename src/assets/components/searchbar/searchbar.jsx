import { SlMagnifier } from "react-icons/sl";
import './searchbar.css'
import { useContext } from "react";
import { DataContext } from "../../../context/Context";

function SearchBar() {
    const { text, setText, orderFiltered } = useContext(DataContext);
    
    const handleInputChange = (e)=>{
        
            const searchText = e.target.value;
            
            setText(searchText.toUpperCase());
            orderFiltered();
    }
    return ( 
        <label className="search">
            <SlMagnifier className="search__icon"/>
            <input 
                type="text" 
                name="seachBar"
                className="search__input"
                placeholder="search..."
                value={text}
                onChange={handleInputChange }
            />
        </label>
     );
}

export default SearchBar;