/** Custom hook for fetching data */
/** The hook name is the inizialize with the word use, example:
 * useFetch, becaus the other ways dont's works
 */

import { useEffect, useState } from "react";

const useFetch = (url) => {
  /** HOOKS USE STATE */
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    /** Fetch request */
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error("Could not fetch the data for that resource");
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
