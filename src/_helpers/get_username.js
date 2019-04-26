export function get_username() {
  console.log(localStorage.getItem('username'));
  return localStorage.getItem('username');
}
