import React from 'react';
import Boton from '../Componentes/Boton';

export default {
  title: 'Boton',
  component: Boton,
  argTypes: {
    texto: { control: 'text' },
    clase: { control: 'text' }, 
    handleCLick: { action: 'clicked' }, 
  },
};

const Template = (args) => <Boton {...args} />;

export const BotonIgual = Template.bind({});
BotonIgual.args = {
  texto: '=',
  clase: 'operacion',
};

export const BotonSuma = Template.bind({});
BotonSuma.args = {
  texto: '+',
  clase: 'operacion',
};

export const BotonResta = Template.bind({});
BotonResta.args = {
  texto: '-',
  clase: 'operacion',
};

export const BotonMultiplicacion = Template.bind({});
BotonMultiplicacion.args = {
  texto: '*',
  clase: 'operacion',
};

export const BotonDivision = Template.bind({});
BotonDivision.args = {
  texto: '/',
  clase: 'operacion',
};

export const BotonBorrarTodo = Template.bind({});
BotonBorrarTodo.args = {
  texto: 'AC',
  clase: 'gris',
};

export const BotonBorrarUno = Template.bind({});
BotonBorrarUno.args = {
  texto: 'C',
  clase: 'gris',
};

export const BotonMasMenos = Template.bind({});
BotonMasMenos.args = {
  texto: '+/-',
  clase: 'gris',
};