import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MainNavigation from '../Navigation/MainNavigation';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('MainNavigation', () => {
    test('renders Home screen initially', () => {
        const { getByTestId } = render(
          <MainNavigation />
        );
    
        expect(getByTestId('Home')).toBeTruthy();
      });

  it('navigates to Subscription screen when button is pressed', () => {
    const { getByTestId } = render(
      <MainNavigation />
    );
    fireEvent.press(getByTestId('Subscription'));

    expect(getByTestId('Subscription')).toBeTruthy();
  });

  test('navigates to Footer when Footer button is pressed', () => {
    const { getByTestId } = render(
      <MainNavigation />
    );

    fireEvent.press(getByTestId('footer'));
    expect(getByTestId('footer')).toBeTruthy();
  });

  test('ensures initial route is Home', () => {
    const { getByTestId } = render(<MainNavigation />);

    expect(getByTestId('landing-screen')).toBeTruthy();
  });
});
