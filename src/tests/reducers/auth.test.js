import authReducer from '../../reducers/auth';

test('should set token for login', () => {
  const token = 'abc123';
  const state = authReducer(undefined, { type: 'LOGIN', token: token });
  expect(state).toEqual({
    token: token
  });
});

test('should clear uid for logout', () => {
  const state = authReducer({ token: 'anything' }, { type: 'LOGOUT' });
  expect(state).toEqual({});
});