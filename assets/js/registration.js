// import firebase from 'firebase/app'
// import 'firebase/firestore'
//
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDbXlTKDMPsTEMnAyDZ31AmNF_ssmk2b54",
//   authDomain: "pot-members.firebaseapp.com",
//   projectId: "pot-members",
//   storageBucket: "pot-members.appspot.com",
//   messagingSenderId: "338810087970",
//   appId: "1:338810087970:web:4f65d5e78c88b6ce06787b",
//   measurementId: "G-E2JM0QJ3H2"
// };
// // Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig)
// export const db = firebaseApp.firestore()
//
// const getDoc = db.collection('members').doc('2021k')

const toggleHidden = (elementsById) => {
  elementsById.forEach( e => document.getElementById(e).classList.toggle('hidden'))
}

const displayHidden = (elementsById) => {
  elementsById.forEach( e => document.getElementById(e).classList.remove('hidden'))
}

const hide = (elementsById) => {
  elementsById.forEach( e => document.getElementById(e).classList.add('hidden'))
}

const amountWarning = () => {
  const amount = document.getElementById('support-amount').value
  const warning = document.getElementById('amount-warning')
  if (amount < 10) warning.classList.remove('hidden')
  else warning.classList.add('hidden')
  console.log(amount)
}
