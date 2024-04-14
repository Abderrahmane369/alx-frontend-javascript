/*eslint-disable*/
import uploadPhoto from "./5-photo-reject";
import signUpUser from "./4-user-promise";

export default function handleProfileSignup(firstName, lastName, fileName) {
    const s = signUpUser(firstName, lastName);
    const p = uploadPhoto(fileName);

    return Promise.allSettled([s, p]).then(results => {
        return results.map(result => ({
            status: result.status,
            value: result.status === 'fulfilled' ? result.value : result.reason
        }));
    });
}