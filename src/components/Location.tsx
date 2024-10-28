import { BsSearch } from "react-icons/bs";
import type { ButtonProps } from "../interface";

const Location: React.FC<ButtonProps> = ({
  search,
  onSearch,
  onSearchClick,
}) => {
  return (
    <>
      <input
        type="text"
        className="input"
        placeholder="Search location"
        value={search}
        onChange={onSearch}
      />
      <button className="btn" onClick={onSearchClick}>
        <BsSearch />
      </button>
    </>
  );
};

export default Location;
