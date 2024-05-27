import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, test, beforeEach } from 'vitest';
import Calculadora from './Calculadora';

describe('Calculadora', () => {
    beforeEach(() =>{
        render(<Calculadora />);
    });

    test('Operacion de division', () => {
      screen.getByText('6').click();
      screen.getByText('/').click();
      screen.getByText('3').click();
      screen.getByText('=').click();
      setTimeout(() => {
          expect(screen.getByText('2')).toBeInTheDocument();
      }, 100); 
  });

});