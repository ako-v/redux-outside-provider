import { useEffect, useState } from "react";
import { store } from "../redux/store";

const OutsideProvider: React.FC = () => {
  const [count, setCount] = useState(store.getState().counter.value);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const counter = store.getState().counter.value;
      setCount(counter);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return <div>Value Outside Provider: {count}</div>;
};
export default OutsideProvider;
