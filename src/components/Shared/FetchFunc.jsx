import { useState, useEffect } from "react";

function useFetchShows() {
  const [shows, setShows] = useState([]);
  const [error, setError] = useState(null);

  const FetchFunc = async () => {
    try {
      const response = await fetch("https://api.tvmaze.com/shows");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setShows(data);
    } catch (err) {
      console.error("Error fetching shows:", err);
      setError(err.message);
    }
  };

  // Fetch the data once when the hook is used
  useEffect(() => {
    FetchFunc();
  }, []);

  return { shows, FetchFunc, error };
}

export default useFetchShows;
