import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import SubscriptionScreen from '../Screens/SubscriptionScreen';
import { data } from '../assets/Data/Data';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

describe('SubscriptionScreen', () => {
  test('renders without crashing', () => {
    const {getByTestId} = render(<SubscriptionScreen />);
    expect(screen.getByTestId('subscription-screen')).toBeTruthy();
  });

  test('renders ScrollProfile component', () => {
    const {getByTestId} = render(<SubscriptionScreen />);
    const scrollProfile = getByTestId('scroll-profile');
    expect(scrollProfile).toBeTruthy();
  });

  test('renders ScrollButtons component', () => {
    const {getByTestId} = render(<SubscriptionScreen />);
    const scrollButtons = getByTestId('scroll-buttons');
    expect(scrollButtons).toBeTruthy();
  });

  test('renders ScrollShorts component', () => {
    const {getByTestId} = render(<SubscriptionScreen />);
    const scrollShorts = getByTestId('scroll-shorts');
    expect(scrollShorts).toBeTruthy();
  });

  test('contains a ScrollView with correct props', () => {
    const { getByTestId } = render(<SubscriptionScreen />);
    const scrollView = getByTestId('subscription-scrollview');
    expect(scrollView).toBeTruthy();
    expect(scrollView.props.horizontal).toBeFalsy(); 
  });

  test('renders Header component', () => {
    const { getByTestId } = render(<SubscriptionScreen />);
    expect(getByTestId('subscription-header')).toBeTruthy();
  });

  test('renders Card component with correct data and testID', () => {
    const { getByTestId } = render(<SubscriptionScreen />);
    const cardContainer = getByTestId(`card-${data[1].id}`);
    expect(cardContainer).toBeTruthy();
  });
});