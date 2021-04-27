import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';


const OrderForm = ({options, tripCost}) => (
  <Grid>
    <Row>
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} options={options} />
      </Col>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
};
export default OrderForm;