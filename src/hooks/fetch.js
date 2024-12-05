/**
 * Fetch Data, url dimulai dari '/'
 * @param {string} url- Endpoint API.
 * @returns {json} Hasil fetch data.
 */

export const fetchData = async url => {
  try {
    const res = await fetch(`${process.env.API_URL}${url}`, {
      method: 'GET'
    });

    if (!res.ok) return [];
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
