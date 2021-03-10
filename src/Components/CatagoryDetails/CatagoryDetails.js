import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CatagoryDetails = (props) => {
    const {name}=props.products;
    return (
        <div>
            <h3>Category Details:</h3>
            <h6>Selected Product: {name}</h6>
        </div>
    );
};

export default CatagoryDetails;