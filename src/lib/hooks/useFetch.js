import { useState, useEffect } from "react";

/**
 * @param {string} url param for fething data
 * @returns {object} hookData
 * @returns {boolean} loading
 * @returns {string}  error
 *  */

const { abort, signal } = new AbortController();

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url, { signal });

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();
      setLoading(false);
      setData(data);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    fetchData();
    return () => abort();
  }, []);

  return { data, loading, error };
};

export default useFetch;
