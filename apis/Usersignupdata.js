import firestore from '@react-native-firebase/firestore';

export const signupsetdata=(name,age) => {
    firestore()
  .collection('Userdata')
  .add({
    name: name,
    age: age,
  })
  .then(() => {
    console.log('User data added!');
  });
}

export const updateuserdata=(name,age,refdoc) => {
firestore()
  .collection('Userdata')
  .doc(refdoc)
  .update({
      name: name,
    age: age,
  })
  .then(() => {
    console.log('User updated!');
  });
}