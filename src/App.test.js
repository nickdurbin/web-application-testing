import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
<<<<<<< HEAD
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
=======
  const wrapper = rtl.render(
    <span className="greet">hello world</span>
  );
>>>>>>> 555bbcf45fcc5c70544bdaf2c20b7f1c93cfaaad
});