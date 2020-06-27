// Increase Counter
export const saveData = (username, token) => ({
  type: 'SAVE_DATA',
  username: username,
  token: token,
});

// Decrease Counter
export const getData = () => ({
  type: 'GET_DATA',
});
