import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import initializeFirebase from '../Firebase/firebase.init';



// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const signUpUser = (email, password, name, data, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name };
                setUser(newUser);
                console.log('User successfully created');
                //save an user to the database
                saveUser(data, "POST")
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    setAuthError('');
                })
                    .catch((error) => {
                        console.log(error.message);
                    });

                if (data.role == "rider") {
                    navigate("/riderProfile")
                }
                else {
                    navigate("/")
                }
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => {
                setIsLoading(false)
            });
    }

    const signInUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (data, method) => {
        fetch('http://localhost:5000/saveUser', {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then()

    }
    // check admin or not
    useEffect(() => {
        fetch(`https://alpha-sunglasses-yard-server.herokuapp.com/saveUser/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })

    }, [user?.email])


    return {
        admin,
        user,
        isLoading,
        authError,
        signUpUser,
        signInUser,
        logOut,
    }
}

export default useFirebase;