import { useEffect, useState } from "react";

interface useDebounceProps {
  value: string;
  delay: number;
}
const useDebounce = ({ value, delay = 500 }: useDebounceProps) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};

export default useDebounce;
