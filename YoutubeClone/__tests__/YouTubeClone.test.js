import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import YouTubeClone from './YouTubeClone'; 

describe('YouTubeClone', () => {
  it('renders correctly', () => {
    const { getByText } = render(<YouTubeClone />);
    expect(getByText('YouTube')).toBeTruthy(); 
  });

  it('renders category buttons', () => {
    const { getByText } = render(<YouTubeClone />);
    expect(getByText('All')).toBeTruthy();
    expect(getByText('Gaming')).toBeTruthy();
    expect(getByText('News')).toBeTruthy();
  });

  it('filters videos by category when category button is pressed', () => {
    const { getByText, queryByText } = render(<YouTubeClone />);
    
    expect(getByText('Kunal Kamra Controversy | Rise of Gunda Raj in India | Dhruv Rathee')).toBeTruthy();
    expect(getByText('Valorant New Map Reveal - First Gameplay')).toBeTruthy();

    fireEvent.press(getByText('Gaming'));

    expect(queryByText('Kunal Kamra Controversy | Rise of Gunda Raj in India | Dhruv Rathee')).toBeNull();
    expect(getByText('Valorant New Map Reveal - First Gameplay')).toBeTruthy();
  });

  
  it('renders Shorts section', () => {
    const { getByText } = render(<YouTubeClone />);
    expect(getByText('Shorts')).toBeTruthy();
    expect(getByText('Installing... 😮 Ironman Jarvis Ai on Android Ph...')).toBeTruthy();
  });

  it('renders VideoCard with correct props', () => {
    const { getByText } = render(<YouTubeClone />);
    expect(getByText('Dhruv Rathee')).toBeTruthy();
    expect(getByText('1.8 lakh views • 17 minutes ago')).toBeTruthy();
  });


  it('renders bottom navigation', () => {
    const { getByText } = render(<YouTubeClone />);
    expect(getByText('Home')).toBeTruthy();
    expect(getByText('Shorts')).toBeTruthy();
    expect(getByText('Subscriptions')).toBeTruthy();
    expect(getByText('You')).toBeTruthy();
  });
});