import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, test, beforeEach } from 'vitest';
import Calculadora from './Calculadora';

describe('Calculadora', () => {
    beforeEach(() =>{
        render(<Calculadora />);
    });

    test('Operacion de suma', () => {
        screen.getByText('1').click();
        screen.getByText('+').click();
        screen.getByText('2').click();
        screen.getByText('=').click();
        setTimeout(() => {
            expect(screen.getByText('3')).toBeInTheDocument();
        }, 100); 
    });

});
