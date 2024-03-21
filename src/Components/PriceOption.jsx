import PropTypes from 'prop-types'
import Feature from './Feature';
const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-blue-200 rounded-xl flex flex-col p-4 font-bold'>
            <h2 className='text-center mt-6'>
            <span className='text-5xl'>{price}</span>
            <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl py-4 text-center mt-4'>{name}</h4>
           <div className='pl-6 flex-grow'>
           {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
           </div>
           <button className='mt-8 w-full bg-green-400 py-4 font-bold rounded-3xl hover:bg-green-900 hover:text-white'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;