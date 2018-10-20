import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const uid = 'abc123';
  const state = authReducer(undefined, { type: 'LOGIN', uid: uid });
  expect(state).toEqual({
    uid: uid
  });
});

test('should clear uid for logout', () => {
  const state = authReducer({ uid: 'anything' }, { type: 'LOGOUT' });
  expect(state).toEqual({});
});