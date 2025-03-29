import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  return (
    <input
      className={css.input}
      type="text"
      placeholder="Поиск контактов"
      value={filter}
      onChange={(e) => dispatch(changeFilter(e.target.value))}
    />
  );
};

export default SearchBox;
