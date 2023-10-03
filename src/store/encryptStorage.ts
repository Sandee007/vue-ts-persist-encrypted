import {EncryptStorage} from "encrypt-storage";

// * secret key must be 10 chars at least
export const encryptStorage = new EncryptStorage('1234567890', {
    storageType: 'sessionStorage',
    stateManagementUse: true,
})