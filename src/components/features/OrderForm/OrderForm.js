import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';


const OrderForm = ({options, tripCost, setOrderOption}) => (
 
  <Grid>
    <Row>
      {pricing.map(option => 
        
        <Col key={option.id} md={4} >
          <OrderOption {...option} option={option} currentValue={options[option.id]} setOrderOption={setOrderOption}/>
        </Col>
     
      )}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} options={options} />
      </Col>
    </Row>
  </Grid>
  
);

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
  setOrderOption: PropTypes.func,
};
export default OrderForm;