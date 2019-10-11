import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import Dashboard from './components/Dashboard';
import { fireEvent } from '@testing-library/react';

afterEach(rtl.cleanup);

it('renders without crashing', async () => {
  const wrapper = rtl.render(<App />);
  expect(await wrapper.queryAllByText(/strikes/i));
});

test('multiple buttons handling click events', async () => {
  const wrapper = rtl.render(<Dashboard />);
  const buttonsCheck = await wrapper.getAllByRole('button');
  expect(buttonsCheck.length).toBe(8)
})

test('test the number of balls', async () => {
  const wrapper = rtl.render(<App />);
  const ballButtonCheck = await wrapper.getByTestId('Balls');
  expect(ballButtonCheck.textContent).toBe('0')
  fireEvent.click(getByTestId('Balls'))
  expect(ballButtonCheck.textContent).toBe(1)
})