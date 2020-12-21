// import firebase from 'firebase/app'
// import 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbXlTKDMPsTEMnAyDZ31AmNF_ssmk2b54",
  authDomain: "pot-members.firebaseapp.com",
  projectId: "pot-members",
  storageBucket: "pot-members.appspot.com",
  messagingSenderId: "338810087970",
  appId: "1:338810087970:web:4f65d5e78c88b6ce06787b",
  measurementId: "G-E2JM0QJ3H2"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

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
}

document.addEventListener('submit', event => {
  event.preventDefault();
  const form = document.getElementById('registeration')
  const data = new FormData(form)
  const obj = {}
  for (let key of data.keys()) {
    obj[key] = data.get(key)
  }

  const firstCourse = {
    courseId: data.get('first-course'),
    role: data.get('first-role'),
    paid: false,
    partnerName: data.get('partner-name')
  }

  const secondCourse = {
    courseId: data.get('second-course'),
    role: data.get('second-role'),
    paid: false,
  }

  const supportMember = {
    courseId: data.get('support-member'),
    amount: data.get('support-amount'),
    paid: false,
  }

  console.log(supportMember)

  const hometown = (data.get('home') !== 'true') ? data.get('home') : data.get('home-other')
  console.log('hometown: ', hometown)

  const member = {
    fname: data.get('fname'),
    lname: data.get('lname'),
    email: data.get('email'),
    // hometown: data.get('home'),
    hometown: hometown,
    membership: [{
      student: (data.get('student') === 'true') ? true : false, 
      club: (data.get('club') === 'true') ? true : false,
      hyy: data.get('hyy')
    }],
    courses: []
  }

  if (firstCourse.courseId !== 'false') member.courses.push(firstCourse)
  if (secondCourse.courseId !== 'false') member.courses.push(secondCourse)
  if (supportMember.courseId !== null) member.courses.push(supportMember)

  db.collection('2020k')
    .add(member)
    // .then(() => location.href="../../tanssikerho")
    .then(() => location.href="/tanssikerho/kiitos-osallistumisesta")
    .catch((err) => {
      console.error('Could register a member: ', err)
    })

  console.log(member)
  
})
