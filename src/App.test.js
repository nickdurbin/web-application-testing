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

test('test the click event of the balls counter button and the display of count', async () => {
  const wrapper = rtl.render(<App />);
  const ballButtonCheck = await wrapper.getByTestId('Balls');
  const ballsDisplay = await wrapper.getByTestId('ballsDisplay');

  expect(ballsDisplay.textContent).toBe('0')
  rtl.fireEvent.click(ballButtonCheck)

  expect(ballsDisplay.textContent).toBe('1')
  rtl.fireEvent.click(ballButtonCheck)

  expect(ballsDisplay.textContent).toBe('2')
  rtl.fireEvent.click(ballButtonCheck)

  expect(ballsDisplay.textContent).toBe('3')
  rtl.fireEvent.click(ballButtonCheck)

  expect(ballsDisplay.textContent).toBe('0')
})