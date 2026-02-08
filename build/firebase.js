import admin from "firebase-admin";
import serviceAccount from "./knowledge-vault-9d42d-firebase-adminsdk-fbsvc-9766a077ba.json" with { type: "json" };
serviceAccount = {
    type: "service_account",
    project_id: "knowledge-vault-9d42d",
    private_key_id: "9766a077ba798e2e34fae56a571f754ffc2b4413",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDJeRTHXPTH6Zka\nxnqidrpEffimttfJEq6ADw2AIzZyWkEH3WoFalbSh0rHPpNuy2zG3ly+PZFRcSsy\n1CPwo1zM9rWOl+8OyCkth7YiNaxMC4dhdo3UYmiuV7YPmewbLiRHQUtPPBHUzg6V\nFOtmB1b3cocAIdye47SnI/gQlnUUnvN0C3CB6MxIUDFC/7fQN2WWzjDfTwCPSNlK\n0vGWDfk8DuxKQ2RyS1/lXAVTyI4OM7NSRUWV3G7E5aYJbRz2bq5Yb23hjYobjSbG\nLUR/MYhEUWNtcw2WEyN8ljwKb/bXrWuCpRYHYFG6U3+cc9pJx/vAKR5FgtNwoTsO\nyr3wonSVAgMBAAECggEAC/H83xEjhj19vA5WiQ68XoE63o+VXbDuMwjcG7klakRF\npMoQ639G5IvsTWySteKjxsAPrvaG3ir1N7nyOOXxWPRWXBJQCd1Tllp8hwINqXiU\nL0gl1+4kbL8l5pORYc8rjCSn6sESAZRcsvl0N4QUjkP2aHXu1xDYeNceHHBUmBig\nFsTCbaAeoKOoh99v+bhb2oPr/JKke8F3DzlfHjqNZPibQUeyrtna5milNeHtIMQO\nKzRDSs0QGqa+3RELQ8RbuPqFTUcvHM5+TVP56u4o/O4/G2fb7L4amHUv5IZZbkQi\nMYCTQk4xFqeFh/W0oyNQaAlxk/tiqeNLxMmb+NxkxQKBgQD+InfedGUkMWrq6XGH\nTsAGuxZ0o6kV3/zQ5Hux4vGm3XFpbLevF9VCCbqD6TwJ4Jm5Z2FaaT+DJoHQiZkK\ndJpl9OiRSD0irAEidGSUzuGXwq6i796oXrRWPxYZb3cLzHsEogGedUJ7kYV7Vq1T\nE4UOGzBFWFkBd/njpVMOCRDb7wKBgQDK86i0v3NYRuI2BQ0oBLSapQFs68c6Wu0Q\nPQaQNpdZtsnyCix3O7lxk/reQTWMw2K/naWVGs0WVG9fn/EJ/6s/zUDU1oJtdCQL\nzElLxac9c7Jt+9ujIPfZFYu1IGRJ5Zs2smz/V4RH5+RAQqnUZLZXeTxLDUt3Rq8Y\nKJ0UpyIDuwKBgQDVgffbOUbQBYSiH8Z1uz+xZ/URwX4JFsm8ZnlVlikX2+uwetpH\njGpqtOmycX0zfzMnhSdRYiMt+GgP38pn8lbVWdEaXeqe+otpewgVzUnSyokV8xjJ\ns+cmnpHehLsrenvQBJv/mNxmHHhcixHLPhcHJuiDGhqNFVMoYnlIzW0QmQKBgHNy\nZ2VqApMUv1k7RmCdTJ8rfcQX2xy23GOAU1t1smK2N+oXH3Qz5SlWpD4JmgyYmHOn\nmalXtZIeNbyPnu2xIhkJCPgJjef1SQvtCUSxCpFKXxVxT19cQaCbQP2nj2T513El\nzhryDa1Zm91yDmljYNYhgMqwpV0UOEXl1HULHa5BAoGASgNh+E2IovIH3PmrcqWA\nTjrZZTg8MIJiktU3AoYBiGo42FTY2kWlRiW+6wp/Y58WfD9fEhHptk14w3B3Z2uu\n4z5QvZ8qgexkgikkFbruvqR4MfHPyipQ37WD5rnJVP7HRCw1MXJg5gpx9MICXpMq\nc1bqBhTI0jIDCyJ3RFqibuY=\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-fbsvc@knowledge-vault-9d42d.iam.gserviceaccount.com",
    client_id: "115958057430378356675",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40knowledge-vault-9d42d.iam.gserviceaccount.com",
    universe_domain: "googleapis.com",
};
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
export default admin;
//# sourceMappingURL=firebase.js.map