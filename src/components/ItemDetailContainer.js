import React, {useEffect, useState} from "react";
import { getComics } from "../mock/fakeApi";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [comicDetail, setComicDetail] = useState({})

        useEffect(()=>{
        getComics
        .then((res) => setComicDetail(res.find((item) => item.id === 2)))
        .catch((error) => console.log(error))
}, [])

    return (
        <div>
            <ItemDetail comicDetail={comicDetail}/>
        </div>
    )
}

export default ItemDetailContainer;