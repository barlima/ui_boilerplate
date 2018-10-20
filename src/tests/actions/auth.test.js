import {
  login,
  logout
} from '../../actions/auth';

test('should generate login object', () => {
  const token = 'abc123';
  const action = login(token);
  expect(action).toEqual({
    type: 'LOGIN',
    token
  });
});

test('should generate logout object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});