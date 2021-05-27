import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';


describe('Component TripSummary', () => {

  it('should render without crashing', () => {
    const component = shallow(<TripSummary tags={[]} id='abc' />);
    expect(component).toBeTruthy();
  });

  it('should render correct link', () => {
    const expectedLink = `/trip/abc`;
    const component = shallow(<TripSummary id='abc' tags={[]} to={expectedLink}/>);
    const renderedLink = component.find('.link').prop('to');
    expect(renderedLink).toEqual(expectedLink);
  });

  it('img should render corect src and alt', () => {
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'something differrent';
    const component = shallow(<TripSummary tags={[]} id='abc' />);
    
    expect(component.find('img').props('src')).toEqual(expectedSrc);
    expect(component.find('img').props('alt')).toEqual(expectedAlt);
  });

});