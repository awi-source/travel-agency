import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {

  it('should render without crashing', () => {
    const component = shallow(<TripSummary id='abc' />);
    expect(component).toBeTruthy();
  });

  it('should render correct link', () => {
    const expectedLink = `/trip/abc`;
    const component = shallow(<TripSummary to={expectedLink}/>);
    const renderedLink = component.find('.link').text();
    expect(renderedLink).toEqual(expectedLink);
  });

  
});