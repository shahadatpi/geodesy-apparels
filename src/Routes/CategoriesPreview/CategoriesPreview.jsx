import './CategoriesPreview.scss';
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview.jsx";
import {Fragment} from "react";
import {useSelector} from "react-redux";
import {selectCategoriesMap} from "../../Store/Categories/categorySelector.js";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
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