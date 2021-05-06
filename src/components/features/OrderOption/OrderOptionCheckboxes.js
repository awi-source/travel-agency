import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';


const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = (setOptionValue, currentValue, values) => (
  <div className={styles.checkboxes}>
    {values.map(value => (
      <label key={value.id}>
        <input type="checkbox"
          value={value.id}
          // {currentValue.includes(id) ? checked : false} 
          onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}
      
        /> {value.name} 
        {/* className={currentValue ? styles.iconActive : styles.icon} onClick={option => setOptionValue(option.id)}<Icon name={icon.name} value={icon.value}>({formatPrice(option.price)})</Icon> */}
      </label> 
    ))}

  </div>
  
);

OrderOptionCheckboxes.propTypes = {
  currentValue: PropTypes.array,
};
export default OrderOptionCheckboxes;