/*eslint-disable*/

import {uploadPhoto, createUser} from 'utils'

export default async function asyncUploadUser() {
    try {
        return {
            photo: uploadPhoto(),
            create: createUser()
        }
    }

    catch {
        return {
            photo: null,
            user: null,
          }
    }
}