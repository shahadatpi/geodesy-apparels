import './CategoriesPreview.scss';
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview.jsx";
import {Fragment} from "react";
import {useSelector} from "react-redux";
import {selectCategoriesIsLoading, selectCategoriesMap} from "../../Store/Categories/categorySelector.js";
import Spinner from "../../components/Spinner/Spinner.jsx";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
        return (
        <Fragment>
            { isLoading? (<Spinner/>):
                (Object.keys(categoriesMap).map((title) => {
                        const products = categoriesMap[title];
                        return <CategoryPreview key={title} title={title} products={products}/>
                }))
            }
        </Fragment>
    );
};

export default CategoriesPreview;