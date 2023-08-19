import {CategoriesContex} from "../../contex/CategoriesContex.jsx";
import './CategoriesPreview.scss';
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview.jsx";
import {Fragment, useContext} from "react";

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContex);

    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return <CategoryPreview key={title} title={title} products={products}/>
            })}
        </Fragment>
    );
};

export default CategoriesPreview;