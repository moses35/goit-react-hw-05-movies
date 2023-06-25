async function fetchQuery(query) {
  const response = await fetch(query);
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(new Error('error'));
}
export default fetchQuery;
