import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Button';


test('Renders with a className equal to the active', () => {
  const { container } = render(<Button />)
  expect(container.firstChild).toHaveClass('active') 
})  
