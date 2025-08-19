import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  getIdToken,
  signOut,
} from '@react-native-firebase/auth';
import { store } from '../redux/store';
import { updateToken } from '../redux/reducers/user';

export const createUser = async (fullName, email, password) => {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    await updateProfile(userCredential.user, { displayName: fullName });
    return userCredential;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return { error: 'The Entered Email is already in use!' };
    } else if (error.code === 'auth/invalid-email') {
      return { error: 'Email is Invalid!' };
    }
    return { error: 'Something went wrong with your request.' };
  }
};

export const loginUser = async (email, password) => {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const token = await getIdToken(userCredential.user);
    return {
      status: true,
      data: {
        displayName: userCredential.user.displayName,
        email: userCredential.user.email,
        token,
      },
    };
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      return { status: false, error: 'Invalid credentials' };
    } else if (error.code === 'auth/user-not-found') {
      return { status: false, error: 'User not found with that email.' };
    } else if (error.code === 'auth/invalid-email') {
      return { status: false, error: 'Invalid email address format.' };
    } else if (error.code === 'auth/invalid-credential') {
      return { status: false, error: 'Invalid credentials.' };
    }

    return { status: false, error: 'Something went wrong' };
  }
};

export const logOut = async () => {
  try {
    const auth = getAuth();
    await signOut(auth);
  } catch (error) {
    console.log('error while logout is ', error);
  }
};

export const refreshAuthToken = async () => {
  try {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (!currentUser) {
      console.log('No authenticated user found');
    }
    const freshToken = await getIdToken(currentUser, true);
    store.dispatch(updateToken(freshToken));
  } catch (error) {
    console.log(`Token refresh failed: ${error.message}`);
  }
};
