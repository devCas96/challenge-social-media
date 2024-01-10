/**
 * Intercepts and fetches data from a specified URL with additional headers.
 * @param {string} url - The relative URL to be appended to the base social media URL.
 * @returns {Promise<Object>} - A promise that resolves to the data fetched from the specified URL.
 * @throws {Error} - Throws an error if the network response is not successful or if there's a fetch error.
 */
export async function fetchInterceptor(url) {
  const URL_BUILDED = `${import.meta.env.VITE_BASE_SOCIAL_MEDIA_URL}${url}`;

  /**
   * Function to apply custom options to the fetch request.
   * @returns {Object} - An object containing the options to be applied.
   */
  const applyOptions = (_options) => {
    return {
      ..._options,
      headers: {
        'app-id': import.meta.env.VITE_API_APP_ID,
      },
    };
  };

  try {
    const response = await fetch(URL_BUILDED, applyOptions());

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const apiData = await response.json();
    return apiData.data.length > 0 ? apiData.data : apiData;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}
