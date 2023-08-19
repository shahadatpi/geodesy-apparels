import './CategoryPreview.scss';
import ProductCard from "../ProductCard/ProductCard.jsx";
import {Link} from "react-router-dom";
const CategoryPreview = ({title, products}) => {
    return (
        <div className='category-preview-container'>
            <h2>
                <Link to={title} className='title'>{title.toUpperCase()}</Link>
            </h2>
            <div className='preview'>
                {
                    products.filter((i,index)=> index<4)
                        .map((product)=> <ProductCard key={product.id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default CategoryPreview;
