import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, test, beforeEach } from 'vitest';
import Calculadora from './Calculadora';

describe('Calculadora', () => {
    beforeEach(() =>{
        render(<Calculadora />);
    });

    test('Operacion de resta', () => {
      screen.getByText('7').click();
      screen.getByText('-').click();
      screen.getByText('2').click();
      screen.getByText('=').click();
      setTimeout(() => {
          expect(screen.getByText('5')).toBeInTheDocument();
      }, 100); 
  });

});
