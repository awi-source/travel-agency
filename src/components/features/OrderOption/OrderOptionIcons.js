import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import { formatPrice} from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';


const OrderOptionIcons = ({values, currentValue, setOptionValue, required}) => (
  
  <div
    className={styles.icon}
  >
    {required ? '' : (
       
      <div className={styles.icon} onClick={() => setOptionValue=('')}><Icon name='times-circle' />None</div>
    )}
    {values.map(value => (
      
      <div key={value.id}  className={value.id === currentValue ? styles.iconActive : styles.icon} onClick={() => setOptionValue(value.id)}>
        <Icon  name={value.icon} />{value.name}({formatPrice(value.price)})
      </div>
    ))}
  </div>
    
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  icon: PropTypes.string,
  option: PropTypes.array,
};

export default OrderOptionIcons;