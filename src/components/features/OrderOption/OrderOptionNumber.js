import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import { formatPrice} from '../../../utils/formatPrice';



const OrderOptionNumber = ({limits, price, currentValue, setOptionValue}) => (
  <div className={styles.number}>
    <input className={styles.inputSmall} 
      type="number" 
      min={limits.min} max={limits.max} 
      value={currentValue} 
      onChange={event => setOptionValue(event.currentTarget.value)}
    /> 
    ({formatPrice(price)})
  </div>
  

  
);

OrderOptionNumber.propTypes = {
  limits: PropTypes.object,
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
  value: PropTypes.number,
  price: PropTypes.string,
};
export default OrderOptionNumber;