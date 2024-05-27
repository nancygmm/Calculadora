import React from 'react';
import Calculadora from '../Componentes/Calculadora';

export default {
  title: 'Calculadora',
  component: Calculadora,
  argTypes: {
    calcu: { control: 'object' },
  },
};

const Template = (args) => <Calculadora {...args} />;

export const CalculadoraInicial = Template.bind({});
CalculadoraInicial.args = {
  calcu: {
    numero: '',
    signo: '',
    resultado: '',
  },
};
CalculadoraInicial.storyName = 'Por Defecto'; 
