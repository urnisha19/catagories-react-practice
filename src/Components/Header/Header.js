import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = (props) => {
    const [category,setCategory]= useContext(CategoryContext);
    return (
        <div>
            <h1>Header: {category}</h1>
            <button onClick={() => setCategory('laptop')}>Laptop</button>
            <button onClick={() => setCategory('mobile')}>Mobile</button>
            <button onClick={() => setCategory('camera')}>Camera</button>
        </div>
    );
};

export default Header;