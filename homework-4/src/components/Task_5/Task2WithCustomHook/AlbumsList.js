import { useFetch } from "../../../hooks/useFetch";
import { Albums } from "../Task1WithCustomHook/Albums";

const BASE_ALBUMS_URL = "https://jsonplaceholder.typicode.com/albums/1/photos?_limit=10"

export const AlbumsList = () => {
    const [data, isLoading, error] = useFetch(BASE_ALBUMS_URL)

    return (
        <div>
            {isLoading && <div>LOading...</div>}
            {error && <div>Error: {error}</div>}
            {data && data.map(album =>
                <Albums key={album.id}
                    title={album.title}
                    url={album.url}
                />
            )}
        </div>
    )
}