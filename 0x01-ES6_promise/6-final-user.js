/*eslint-disable*/
import uploadPhoto from './5-photo-reject.js';
import signUpUser from './4-user-promise.js';

export default function handleProfileSignup (firstName, lastName, fileName) {
  const s = signUpUser(firstName, lastName);
  const p = uploadPhoto(fileName);

  return Promise.allSettled([s, p]).then(r => r.map(_r => ({
    status: _r.status,
    value: _r.s === 'fulfilled' ? _r.value : _r.reason
  })));
};
