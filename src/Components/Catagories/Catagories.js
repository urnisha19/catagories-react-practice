import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CatagoryDetails from '../CatagoryDetails/CatagoryDetails';

const allProducts =[{name:'lenovo', category:'laptop'},{name:'Asus', category:'laptop'},{name:'Dell', category:'laptop'},{name:'Hp', category:'laptop'},
{name:'Samsung', category:'mobile'},{name:'Iphone', category:'mobile'},{name:'Nokia', category:'mobile'},{name:'Mi', category:'mobile'},
{name:'Nikon', category:'camera'},{name:'LG', category:'camera'},{name:'Canon', category:'camera'},{name:'Sony', category:'camera'},]

const Catagories = () => {
    const [category]= useContext(CategoryContext);
    const [products,setProducts]= useState([]);
    useEffect(() =>{
const matchedProducts=allProducts.filter(pd=>pd.category.toLowerCase()===category.toLowerCase());
setProducts(matchedProducts);
    },[category])
    return (
        <div>
            <h2>Select your Category:{category} </h2>
            {
                products.map(pd=><CatagoryDetails products={pd}></CatagoryDetails>)
            }
        </div>
    );
};

export default Catagories;