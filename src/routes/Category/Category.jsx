import './Category.scss';
import {useParams} from "react-router-dom";
import {Fragment, useContext, useEffect, useState} from "react";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import {CategoriesContex} from "../../contex/CategoriesContex.jsx";

const Category = () => {

        const {category} = useParams();
        const {categoriesMap} = useContext(CategoriesContex);
        const [products, setProducts] = useState(categoriesMap[category]);

        useEffect(()=>{
            setProducts(categoriesMap[category]);
        }, [category, categoriesMap]);

        return(
            <Fragment>
                <h2 className='category-title'>{category.toUpperCase()}</h2>
                <div className='category-container'>
                    { products &&
                        products.map((product)=> <ProductCard key={product.id} product={product}/>)
                    }
                </div>
            </Fragment>
        )
};

export default Category;
