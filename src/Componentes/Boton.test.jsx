import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/vitest'; 
import { describe, it, expect, vi, test } from 'vitest';
import Boton from './Boton';

describe('Boton Component', () => {
    test('should render with the correct text', () => {
        render(<Boton texto="Click me" clase="btn" handleCLick={() => {}} />);
        const buttonElement = screen.getByText(/Click me/i);
        expect(buttonElement).toBeInTheDocument();
    });

    test('should render correctly with dynamic props', () => {
        const { rerender } = render(<Boton texto="Initial" clase="btn" handleCLick={() => {}} />);
        let buttonElement = screen.getByText(/Initial/i);
        expect(buttonElement).toBeInTheDocument();

        rerender(<Boton texto="Updated" clase="btn-updated" handleCLick={() => {}} />);
        buttonElement = screen.getByText(/Updated/i);
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass('btn-updated');
    });
});
