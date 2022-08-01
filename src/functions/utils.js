export const fetchData = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    // console.log(json);
    return json
}

export const compareCards = (first, second, typesArray) => {
    return {firstPokemonPoints: 0, secondPokemonPoints: 2, winner: first}
}