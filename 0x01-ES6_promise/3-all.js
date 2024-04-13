/*eslint-disable*/
import { createUser, uploadPhoto } from './utils.js'

export default function handleProfileSignup () {
  return Promise.all([uploadPhoto(), createUser()]).then((_) => {
    console.log(`${_[0].body} ${_[1].firstName} ${_[1].lastName}`)
  })
    .catch(() => console.log('Signup system offline'))
}
