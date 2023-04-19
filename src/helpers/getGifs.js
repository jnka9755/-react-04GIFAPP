export const getGifs = async( category ) =>{
    const url = `https://api.giphy.com/v1/gifs/search?apikey=eVkzKRqF2s35kXa6n4ZpDBzgEYivs1IB&q=${ category }&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    return gifs;
}