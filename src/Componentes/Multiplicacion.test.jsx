import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, test, beforeEach } from 'vitest';
import Calculadora from './Calculadora';

describe('Calculadora', () => {
    beforeEach(() =>{
        render(<Calculadora />);
    });

    test('Operacion de multiplicacion', () => {
      screen.getByText('2').click();
      screen.getByText('*').click();
      screen.getByText('4').click();
      screen.getByText('=').click();
      setTimeout(() => {
          expect(screen.getByText('8')).toBeInTheDocument();
      }, 100); 
  });

});