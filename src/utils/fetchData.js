
export const exerciseOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.RAPID_API_KEY
          
        }
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.RAPID_API_KEY
    
  }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

 