export const fetchData = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    // console.log(json);
    return json
}