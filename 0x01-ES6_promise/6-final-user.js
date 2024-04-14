/*use==
import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup (firstName, lastName, fileName) {
  const s = signUpUser(firstName, lastName);
  const p = uploadPhoto(fileName);

  return Promise.allSettled([s, p]).then(r => r.map(_r => ({
    status: _r.status,
    value: _r.s === 'fulfilled' ? _r.value : _r.reason
  })));
};
