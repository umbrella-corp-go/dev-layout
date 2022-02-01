import './styles.css';

import ProductImg from 'assets/images/detalhe-carro.png';
import ProductPrice from 'components/ProductPrice';

const ProductCard = () => {

    return (
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={ProductImg} alt="Audi Supra TT" />
            </div>
            <div className="card-bottom-container">
                <h6>Audi Supra TT</h6>
                <ProductPrice />
            </div>
        </div>
    );
}

export default ProductCard;