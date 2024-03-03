import { useEffect, useState } from "preact/hooks";

function useFetch({ url }: { url: URL }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    function fetchData() {
      setIsLoading(true);
      try {
        fetch(url).then((response) => response.json()).then((results) => {
          setData(results);
        });
      } catch (e) {
        setError(e);
        console.log(`useFetch error: ${e}`);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    return () => {
    };
  }, [url]);

  return { data, isLoading, error };
}
