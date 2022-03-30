import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { getComics } from "../mock/fakeApi";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [comicDetail, setComicDetail] = useState()

    const { itemId } = useParams()
    console.log(itemId)
    console.log(comicDetail)

        useEffect(()=>{
        getComics
        .then((res) =>{
            setComicDetail(res.find((item) => item.id === Number(itemId)))
        })
       
}, [])

    return (
        <div>
            <ItemDetail {...comicDetail}/>
        </div>
    )
}

export default ItemDetailContainer;