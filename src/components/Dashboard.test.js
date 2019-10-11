const dash = require('./Dashboard');

describe('reset function', () => {
  it('resets the game', () => {
    const expected = setStrikes(0);
    const actual = dash.resetGame(setStrikes(0))
    expected(actual).toBe(expected);
  })
}); 