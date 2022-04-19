import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import ItemDetail from "./ItemDetail";
import { doc, getDoc} from "firebase/firestore"
import ItemWithoutStock from "./ItemWithoutStock";

const ItemDetailContainer = () => {
    const [comicDetail, setComicDetail] = useState()

    const { itemId } = useParams()

        useEffect(()=>{
        
            const docRef = doc(db, "productos", itemId)
            getDoc(docRef)
            .then(doc =>{
                setComicDetail({id: doc.id, ...doc.data()})
            })       
},[itemId])



 if (comicDetail?.stock === 0 ) {
     return <ItemWithoutStock {...comicDetail}/>
 }
    return (
        <div>
            <ItemDetail {...comicDetail}/>
        </div>
    )
}


export default ItemDetailContainer;