/**
 * Fetch Data, url dimulai dari '/'
 * @param {string} url- Endpoint API.
 * @returns {json} Hasil fetch data.
 */

export const fetchData = async url => {
  const res = await fetch(`http://localhost:3000${url}`, {
    method: 'GET'
  });

  console.log(res);

  const data = await res.json();

  return data;
};
