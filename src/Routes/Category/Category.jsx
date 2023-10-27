import './categoryStyles.jsx';
import {useParams} from "react-router-dom";
import {Fragment, useContext, useEffect, useState} from "react";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import {useSelector} from "react-redux";
import {selectCategoriesIsLoading, selectCategoriesMap} from "../../Store/Categories/categorySelector.js";
import {CategoryContainer, Title} from "./categoryStyles.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";

const Category = () => {

        const {category} = useParams();
        const categoriesMap = useSelector(selectCategoriesMap);
        const isLoading = useSelector(selectCategoriesIsLoading);
        const [products, setProducts] = useState(categoriesMap[category]);

        useEffect(()=>{
            setProducts(categoriesMap[category]);
        }, [category, categoriesMap]);

        return(
            <Fragment>
              <Title>{category.toUpperCase()}</Title>
                    {
                            isLoading ? (<Spinner/>) :(
                                <CategoryContainer>
                                        { products &&
                                            products.map((product)=> ( <ProductCard key={product.id} product={product}/>))
                                        }
                                </CategoryContainer>
                            )}
            </Fragment>
        )
};

export default Category;
