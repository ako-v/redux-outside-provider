import { increment } from "../redux/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const WithinProvider: React.FC = () => {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const handleIncreament = () => {
    dispatch(increment());
  };
  return (
    <div>
      <button onClick={handleIncreament}>Increament</button>
      <p>Value Inside Provider: {counter}</p>
    </div>
  );
};
export default WithinProvider;
