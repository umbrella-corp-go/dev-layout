import ProductCard from 'components/ProductCard';
import './styles.css';

const Catalog = () => {
  return (
    <div className="container my-4">

      <div className="row">
        <div className=' busca-container'>
          <div className='baseCard'>
          <input type="text" placeholder="Digite sua busca" />
          <button>Buscar</button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6 col-lg-4 ">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 ">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 ">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 ">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
