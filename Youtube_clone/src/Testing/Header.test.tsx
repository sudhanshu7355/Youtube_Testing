import { render , fireEvent } from '@testing-library/react-native';
import Header from '../Components/Header';

describe('Header Component', () => {
  test('renders the logo image', () => {
    const { getByTestId } = render(<Header />);
    const logo = getByTestId('Logo');
    expect(logo).toBeTruthy();
    expect(logo.props.source).toEqual(require('../assets/Youtube.png'));
  });

  test('renders the cast logo' , ()=> {
    const { getByTestId } = render(<Header />);
    const castLogo = getByTestId('CastLogo');
    expect(castLogo).toBeTruthy();
  });

  test('renders the notification icon', () => {
    const { getByTestId } = render(<Header />);
    const notificationIcon = getByTestId('NotificationIcon');
    expect(notificationIcon).toBeTruthy();
  });

  test('renders the search icon', () => { 
    const { getByTestId } = render(<Header />);
    const searchIcon = getByTestId('SearchIcon');
    expect(searchIcon).toBeTruthy();
  });
  test('should call function when Logo is pressed', () => {
    const { getByTestId } = render(<Header />);
    const logoButton = getByTestId('Logo');
    fireEvent.press(logoButton);
  });

  test('should call function when Cast icon is pressed', () => {
    const { getByTestId } = render(<Header />);
    const castButton = getByTestId('CastLogo');
    fireEvent.press(castButton);
  });

  test('should call function when Notification icon is pressed', () => {
    const { getByTestId } = render(<Header />);
    const notificationButton = getByTestId('NotificationIcon');
    fireEvent.press(notificationButton);
  });

  test('should call function when Search icon is pressed', () => {
    const { getByTestId } = render(<Header />);
    const searchButton = getByTestId('SearchIcon');
    fireEvent.press(searchButton);
  });
});
