import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import { formatPrice} from '../../../utils/formatPrice';



const OrderOptionNumber = ({limits, currentValue, setOptionValue, value}) => (
  <div className={styles.number}>
    <input className={styles.inputSmall} 
      type="number" 
      min={limits.min} max={limits.max} 
      value={currentValue} 
      onChange={event => setOptionValue(event.currentTarget.value)}
    ></input> ({formatPrice(value.price)})
  </div>
  
  
);

OrderOptionNumber.propTypes = {
  limits: PropTypes.number,
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,
  value: PropTypes.number,
};
export default OrderOptionNumber;