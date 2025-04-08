import { render , fireEvent } from '@testing-library/react-native'
import Footer from '../Components/Footer'



const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));
describe('Footer component' , ()=>{
    test('renders the Home button', () => {
        const { getByTestId } = render(<Footer />);
        expect(getByTestId('Home')).toBeTruthy();
        const homeButton = getByTestId('Home');
        fireEvent.press(homeButton);
      });
    
      test('renders the Shorts button', () => {
        const { getByTestId } = render(<Footer />);
        expect(getByTestId('Shorts')).toBeTruthy();
        const shortsButton = getByTestId('Shorts');
        fireEvent.press(shortsButton);
      });
    
      test('renders the Add button', () => {
        const { getByTestId } = render(<Footer />);
        expect(getByTestId('Add')).toBeTruthy();
        const addButton = getByTestId('Add');
        fireEvent.press(addButton);
      });
    
      test('renders the Subscription button', () => {
        const { getByTestId } = render(<Footer />);
        expect(getByTestId('Subscription')).toBeTruthy();
        const subscriptionButton = getByTestId('Subscription');
        fireEvent.press(subscriptionButton);
      });
    
      test('renders the Profile button', () => {
        const { getByTestId } = render(<Footer />);
        expect(getByTestId('Profile')).toBeTruthy();
        const profileButton = getByTestId('Profile');
        fireEvent.press(profileButton);
      });
})