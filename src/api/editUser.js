import { userRef } from "../firebase";

export default ({ uid, firstName, lastName, imageURL  }) => {
  userRef.child(uid).set({
    firstName,
    lastName,
    imageURL: imageURL ? imageURL : ""
  });
};