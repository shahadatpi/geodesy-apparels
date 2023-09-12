import './Shop.scss';
import {Route, Routes} from "react-router-dom";
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview.jsx";
import Category from "../Category/Category.jsx";
import {useEffect} from "react";
import {getCategoriesAndDocuments} from "../../Utilities/Firebase/Firebase.js";
import {setCategoriesMap} from "../../Store/Categories/categoryActions.js";
import {useDispatch} from "react-redux";


const Shop = () => {
    const dispatch = useDispatch();

        useEffect(()=>{
        const getCategoriesMap = async () =>{
            const categoriesArray = await getCategoriesAndDocuments();
            console.log(categoriesArray);
            dispatch(setCategoriesMap(categoriesArray));
        }
        getCategoriesMap();
    }, []);
    return (
            <Routes>
                <Route index element={<CategoriesPreview/>}/>
                <Route path=':category' element={<Category/>}/>
            </Routes>

);
};


export default Shop;