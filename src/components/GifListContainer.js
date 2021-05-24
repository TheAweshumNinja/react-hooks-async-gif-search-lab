import React, { useEffect, useState} from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
    const [gifs, setGifs] = useState([]);
    const [query, setQuery] = useState("dolphins");
    useEffect (() => {
        fetch(
            `https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=TDRMs4jatahW3mXydrDH0eUZhWWrBI38&rating=g`
        )
        .then((r) => r.json())
        .then(({ data }) => {
            const gifs=data.map((gif) => ({ url: gif.images.original.url }));
            setGifs(gifs);
        });
    }, [query]);

    return (
        <div style={{ display: "flex" }}>
            <GifList gifs={gifs}/>
            <GifSearch onSubmitQuery={setQuery} />
        </div>
    );
}
export default GifListContainer;