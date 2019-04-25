export function current_user_token() {
  return JSON.parse(localStorage.getItem('token'));
};
