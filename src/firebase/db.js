import { app } from "./config";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(app)


export const getProducts = async (setPruducts) =>{
const querySnapshot = await getDocs(collection(db, "productos"));
const product = []

    querySnapshot.forEach((doc) => {

    console.log(doc.data());
    product.push(doc.data())
  });
 setPruducts(product)
}



