import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyCoBE_oYe-DWtPmG1rPEDBoTSSZVa9-qPU",
    authDomain: "react-demo-3592a.firebaseapp.com",
    projectId: "react-demo-3592a",
    storageBucket: "react-demo-3592a.appspot.com",
    messagingSenderId: "695505814808",
    appId: "1:695505814808:web:794164000ff9e6fc440a6d"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    // console.log(firestore.doc('user/sdsdsdsd'),"Helloooooo");
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    // console.log(snapShot);

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set(
                {
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                }
                )
            } catch (error) {
                console.log(error,"ERROR...........");
            }
        }

    return userRef;

    // const userRef = firestore.doc(`user/${userAuth.uid}`);
    // const snapShot = await userRef.get();

    // if(!snapShot.exists){
    //     const {displayName, email} = userAuth;
    //     const createdAt = new Date();

    //     try {
    //         await userRef.set(
    //             {
    //                 displayName,
    //                 email,
    //                 createdAt,
    //                 ...additionalData,
    //             }
    //         )
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // console.log(userRef,"Helloooooo");
    // return userRef;
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;