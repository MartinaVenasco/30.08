const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=43eef2bceedbc234a3ea3a2ab5fc0d58";

const GET = async(type, movieID) => {
  const res = await fetch(BASE_URL+type+'/'+movieID+API_KEY);
  return await res.json();
}

export { GET };