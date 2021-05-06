import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import { formatPrice} from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';


const OrderOptionIcons = ({values, icon, option, currentValue, setOptionValue, required}) => (
  <div
    className={styles.component}
  >
    {required ? '' : (
       
      <div value=''><Icon name='times-circle' />None</div>
    )}
    {values.map(value => (
      <div key={value.id} value={value.id} className={currentValue ? styles.iconActive : styles.icon} onClick={option => setOptionValue(option.id)}><Icon name={icon.name} value={icon.value}>({formatPrice(option.price)})</Icon>
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