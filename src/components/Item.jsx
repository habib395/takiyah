import { NavLink } from "react-router-dom";

const Item = ({ items }) => {
  return (
    <div
      role="tablist"
      className="tabs bg-transparent p-2 tabs-boxed flex flex-row space-x-1 overflow-x-auto scrollbar-hide"
    >
      {items.map((item) => {
        const firstWord = item.category.split(" ")[0]; // Get first word
        return (
          <NavLink
            key={item.category}
            to={`/categoryIssue/${item.category}`}
            role="tab"
            className={({ isActive }) =>
              `btn text-xs px-2  w-auto ${isActive ? "bg-blue-400" : "px-2"}`
            }
          >
            {firstWord} {/* Only the first word of the category */}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Item;
