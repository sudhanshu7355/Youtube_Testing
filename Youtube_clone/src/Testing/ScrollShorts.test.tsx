import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ScrollShorts from '../Components/ScrollShorts';
import Icon from 'react-native-vector-icons/MaterialIcons';
jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');

describe('ScrollShorts Component', () => {
  it('renders the shorts header with icon and title', () => {
    const { getByText, getByTestId } = render(<ScrollShorts />);
    expect(getByText('Shorts')).toBeTruthy();
    expect(getByTestId('shorts-icon')).toBeTruthy();
  });

  it('displays correct information for each short item', () => {
    const { getByText } = render(<ScrollShorts />);
    expect(getByText('Funny moment!')).toBeTruthy();
    expect(getByText('Comedy Central')).toBeTruthy();
    expect(getByText('1.2M views')).toBeTruthy();
    expect(getByText('• 2 hours ago')).toBeTruthy();
  });
  it('renders a horizontal ScrollView', () => {
    const { getByTestId } = render(<ScrollShorts />);
    const scrollView = getByTestId('shorts-scrollview');
    expect(scrollView.props.horizontal).toBe(true);
    expect(scrollView.props.showsHorizontalScrollIndicator).toBe(false);
  });

  it('renders the correct number of short items', () => {
    const { getAllByTestId } = render(<ScrollShorts />);
    const shortItems = getAllByTestId(/^short-item-/);
    expect(shortItems.length).toBe(5); 
  });

  it('renders image background for each short', () => {
    const { getAllByTestId } = render(<ScrollShorts />);
    const imageBackgrounds = getAllByTestId(/^short-image-/);
    expect(imageBackgrounds.length).toBe(5);
  });

  it('renders gradient overlay for each short', () => {
    const { getAllByTestId } = render(<ScrollShorts />);
    const overlays = getAllByTestId(/^short-overlay-/);
    expect(overlays.length).toBe(5);
  });

  it('renders meta information container for each short', () => {
    const { getAllByTestId } = render(<ScrollShorts />);
    const metaContainers = getAllByTestId(/^short-meta-/);
    expect(metaContainers.length).toBe(5);
  });

  it('should call function when a short item is pressed', () => {
    const { getByTestId } = render(<ScrollShorts />);
    const shortItem = getByTestId('short-item-1');
    fireEvent.press(shortItem);
  });
});