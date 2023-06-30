import {ProductsContex} from "../../contex/ProductsContex.jsx";
import {useContext} from "react";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import './Shop.scss';

const Shop = () => {
    const {products} = useContext(ProductsContex);
    return (
        <div className="shop-container">
            {
                products.map((product)=>(
                   <ProductCard key={product.id} product={product}/>
                ))
            }
        </div>
    );
};

export default Shop;
