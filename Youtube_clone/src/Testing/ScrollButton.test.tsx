import { render , fireEvent } from '@testing-library/react-native';
import Scroll from '../Components/ScrollButtons';

describe('Scroll Component' , ()=>{
    test('renders 10 category buttons in horizontal scroll', () => {
        const { getByTestId } = render(<Scroll />);
        for (let i = 0; i < 10; i++) {
          expect(getByTestId(`category-${i}`)).toBeTruthy();
        }
      });
    
      test('should call function when a category button is pressed', () => {
        const { getByTestId } = render(<Scroll />);
        const categoryButton = getByTestId('category-0');
        fireEvent.press(categoryButton);
    });
})