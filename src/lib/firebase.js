import Firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/auth"

const config = {
  apiKey: "AIzaSyDTwcK7uvExhZWgXLKrfRu-nP61COaP84I",
  authDomain: "my-instagram-a9c3f.firebaseapp.com",
  projectId: "my-instagram-a9c3f",
  storageBucket: "my-instagram-a9c3f.appspot.com",
  messagingSenderId: "544776473052",
  appId: "1:544776473052:web:01a2e60fce94648580a719",
  measurementId: "G-76YGQ5MSRL"
}

const firebase = Firebase.initializeApp(config)
const FieldValue = Firebase.firestore

// seedDataase(firebase)

console.log("firebase", firebase)

export { firebase, FieldValue }
