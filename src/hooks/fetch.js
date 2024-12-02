/**
 * Fetch Data, url dimulai dari '/'
 * @param {string} url- Endpoint API.
 * @returns {json} Hasil fetch data.
 */

export const fetchData = async url => {
  const res = await fetch(`${process.env.API_URL}${url}`, {
    method: 'GET'
  });

  const data = await res.json();

  return data;
};
