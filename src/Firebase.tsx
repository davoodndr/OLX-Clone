
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { Login, Signup } from "./Utils/Interfaces";
import { toast } from "react-toastify";
import { Product } from "./Utils/Interfaces";

const firebaseConfig = {
  apiKey: "AIzaSyD8wBlL8PWOKWhijxjKjECtU6PpE9R65pY",
  authDomain: "my-react-olx-clone.firebaseapp.com",
  projectId: "my-react-olx-clone",
  storageBucket: "my-react-olx-clone.firebasestorage.app",
  messagingSenderId: "597976728042",
  appId: "1:597976728042:web:8ec16c8bf818771e5f7293"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const signup = async ({name, email, password}:Signup) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    const doc = await addDoc(collection(db, 'users'),{
      uid: user.uid,
      name,
      authProvider: 'local',
      email
    });
    toast.success("SignUp Successfull");

    if(doc.id) return doc

  } catch (error:any) {
    console.log('signup',error);
    const msg:string = error.code.split('/')[1].split('-').join(' ');
    toast.error(msg.charAt(0).toUpperCase() + msg.slice(1, msg.length))
  }
}

export const login = async ({email, password}:Login) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login Successfull");
    return user;
  } catch (error:any) {
    console.log(error);
    const msg:string = error.code.split('/')[1].split('-').join(' ');
    toast.error(msg.charAt(0).toUpperCase() + msg.slice(1, msg.length));
  }
}

export const addProduct = async(product:Product) => {
  try {
    const res = await addDoc(collection(db, "products"), product);
    console.log("Product added with ID:", res.id);
    toast.success("Product added");
  } catch (error:any) {
    console.log(error);
    const msg:string = error.code.split('/')[1].split('-').join(' ');
    toast.error(msg.charAt(0).toUpperCase() + msg.slice(1, msg.length));
  }
}

// Fetch products from Firestore
export const fetchProducts = async () => {
  try {

    const querySnapshot = await getDocs(collection(db, "products"));
    const productList = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      const product:Product = {
        id: doc.id,
        price: data.price,
        title: data.title,
        category: data.category,
        detail: data.detail,
        place: data.place,
        state: data.state,
        date: data.date,
        img: data.img
      }
      return product 
    });

    return productList

  } catch (error:any) {
    console.log(error)
  }
};

export const logout = () => {
  signOut(auth);
  toast.success("Logged out Successfull");
}

export {auth};