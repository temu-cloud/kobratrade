import HomeCard from './HomeCard';
//import HomeCard from './HomeCard'; // Assuming HomeCard is in the same directory

const CardContainer = ({products}) => {
    return (
        <section className="py-5" id="shop">
            <div className="container px-4 px-lg-5 mt-5">
                <h4 className="text-center mb-5">Our Products</h4>
                <div className="row justify-content-center">
                {products.map( Product =><HomeCard key={Product.id} product={Product}/>)}
                      
                </div>
            </div>
        </section>
    );
}

export default CardContainer;

