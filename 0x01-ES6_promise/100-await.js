import { uploadPhoto, createUser } from "./utils";

export default async function asyncUploadUser() {
     try {
        return {
            photo: await uploadPhoto(),
            create: await createUser()
        };
    } catch (err) {
        return {
            photo: null,
            user: null
        };
    }
}
