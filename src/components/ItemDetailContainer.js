import React, {useEffect, useState} from "react";
import { getComics } from "../mock/fakeApi";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {
    const [comicDetail, setComicDetail] = useState({})
    const {comicId} = useParams()
    console.log(comicId)

        useEffect(()=>{

        getComics()

        .then((res) => {
            setComicDetail(res.find((comicDetail) => comicDetail.id === comicId))})
        .catch((error) => console.log(error))
}, [])

    return (
        <div>
            <ItemDetail comicDetail={comicDetail}/>
        </div>
    )
}

export default ItemDetailContainer;