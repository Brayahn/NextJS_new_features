async function Home (){
    const response = await fetch ("https://jsonplaceholder.typicode.com/albums");
    if (!response.ok) throw new Error ("Failed to fetch data");

    const albums = await response.json();

    return (
        <div>
            {albums.map((album:{id: number, title:string })=>(
                <div key={album.id}>
                    <h3>{album.title}</h3>
                    <h3>{album.id}</h3>
                </div>
            ))}
        </div>
    )
    
}
export default Home