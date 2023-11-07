import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button Test', () => {
    test('test render', () => {
        render(<Button> TEST </Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}> TEST </Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
