import admin from "firebase-admin";
import serviceAccount from "./knowledge-vault-9d42d-firebase-adminsdk-fbsvc-9766a077ba.json" with { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
