import './Shop.scss';
import {Route, Routes} from "react-router-dom";
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview.jsx";
import Category from "../Category/Category.jsx";
import {useEffect} from "react";
import {fetchCategoriesStart} from "../../Store/Categories/categoryActions.js";
import {useDispatch} from "react-redux";


const Shop = () => {
    const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(fetchCategoriesStart());
    }, []);
    return (
            <Routes>
                <Route index element={<CategoriesPreview/>}/>
                <Route path=':category' element={<Category/>}/>
            </Routes>

);
};


export default Shop;