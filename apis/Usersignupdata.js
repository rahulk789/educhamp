import firestore from '@react-native-firebase/firestore';

export const signupsetdata=(name,name,grade,dob,school,state,city,subjects) => {
    firestore()
  .collection('Userdata')
  .add({
    Name: name,
    Email: email,
    Grade : grade,
    DOB : dob,
    School : school,
    State: state,
    city: city,
    Subjects: subjects,
    
  })
  .then(() => {
    console.log('User data added!');
  });
}

export const updateuserdata=(refdoc,name,grade,dob,school,state,city,subjects) => {
firestore()
  .collection('Userdata')
  .doc(refdoc)
  .update({
    Name: name,
    Grade: grade,
    Dob: dob,
    School: school,
    State: state,
    City: city,
    Subjects: subjects,
  })
  .then(() => {
    console.log('User updated!');
  });
}
