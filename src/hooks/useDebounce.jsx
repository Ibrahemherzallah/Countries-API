import { useEffect, useState } from "react";

const useDebounce = ({ search }, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(search);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(search);
    }, delay);

    return () => clearTimeout(timeout);
  }, [search, delay]);

  return {
    debouncedValue,
  };
};

export default useDebounce;
