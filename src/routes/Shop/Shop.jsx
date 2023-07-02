import {CategoriesContex} from "../../contex/CategoriesContex.jsx";
import {Fragment, useContext} from "react";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import './Shop.scss';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContex);

    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title) => (
                <Fragment key={title}>
                    <h2>{title}</h2>
                    <div className='products-container'>
                        {categoriesMap[title].map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </Fragment>
            ))}
        </Fragment>
    );
};

export default Shop;