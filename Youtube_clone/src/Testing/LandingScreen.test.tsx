import React from 'react';
import {render , fireEvent } from '@testing-library/react-native';
import LandingScreen from '../screens/LandingScreen';
import {data} from '../assets/Data/Data';

// Mock Components

jest.mock('../Components/Card', () => {
  const React = require('react');
  const {View} = require('react-native');
  return ({item}) => <View testID={`card-${item.id}`} />;
});
const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

describe('LandingScreen', () => {
  test('renders LandingScreen component', () => {
    const {getByTestId} = render(<LandingScreen />);
    expect(getByTestId('landing-screen')).toBeTruthy();
  });

  test('renders Header component', () => {
    const {getByTestId} = render(<LandingScreen />);
    expect(getByTestId('header')).toBeTruthy();
  });

  test('renders Footer component', () => {
    const {getByTestId} = render(<LandingScreen />);
    expect(getByTestId('footer')).toBeTruthy();
  });

  test('renders all Card components', () => {
    const {getByTestId} = render(<LandingScreen />);
    data.forEach(item => {
      expect(getByTestId(`card-${item.id}`)).toBeTruthy();
    });
  });

  // test('renders the correct number of Card components', () => {
  //   const {getAllByTestId} = render(<LandingScreen />);
  //   expect(getAllByTestId(/^card-/).length).toBe(data.length);
  // });

  test('renders ScrollView in LandingScreen', () => {
    const { getByTestId } = render(<LandingScreen />);
    expect(getByTestId('landing-screen')).toBeTruthy();
  });

  test('should be able to press a Card component', () => {
    const { getByTestId } = render(<LandingScreen />);
    const firstCard = getByTestId(`card-${data[0].id}`);
    fireEvent.press(firstCard);
  });
});
