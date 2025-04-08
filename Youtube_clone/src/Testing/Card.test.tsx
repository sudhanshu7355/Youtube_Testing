import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Card from '../Components/Card'; // Adjust the path as needed

describe('Card Component', () => {
  const mockItem = {
    id: 1,
    Thumbnail: 'http://dummyimage.com/232x100.png/ff4444/ffffff',
    Profile: 'http://dummyimage.com/168x100.png/5fa2dd/ffffff',
    'Profile-Name': 'Dummy Testing',
    title: 'Dummy Title',
    Date: 2019
  };

  it('renders thumbnail correctly', () => {
    const {getByTestId} = render(<Card item={mockItem} />);
    const thumbnail = getByTestId('thumbnail-image');
    expect(thumbnail.props.source.uri).toBe(mockItem.Thumbnail);
  });


  it('renders title correctly', () => {
    const {getByText} = render(<Card item={mockItem} />);
    expect(getByText(mockItem.title)).toBeTruthy();
  });
  it('renders profile correctly', () => {
    const {getByTestId} = render(<Card item={mockItem} />);
    const profile = getByTestId('profile-image');
    expect(profile.props.source.uri).toBe(mockItem.Profile);
  });
  it('renders Date correctly', () => {
    const {getByText} = render(<Card item={mockItem} />);
    expect(getByText(mockItem.Date.toString())).toBeTruthy();
  });
  it('renders Profile name correctly', () => {
    const {getByText} = render(<Card item={mockItem} />);
    expect(getByText(new RegExp(mockItem['Profile-Name']))).toBeTruthy();
  });

  it('renders more options button correctly', () => {
    const { getByTestId } = render(<Card item={mockItem} />);
    const touchable = getByTestId('more-options-button');
    expect(touchable).toBeTruthy();
    
  });

  it('should call function when More Options button is pressed', () => {
    const { getByTestId } = render(<Card item={mockItem} />);
    const moreOptionsButton = getByTestId('more-options-button');
    fireEvent.press(moreOptionsButton);
  });


});