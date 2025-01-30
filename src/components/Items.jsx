import { NavLink } from "react-router-dom";

const Items = ({ items }) => {
  return (
      <div
        role="tablist"
        className="tabs bg-transparent p-4 tabs-boxed flex flex-col space-y-1"
      >
        {items.map((item) => (
          <NavLink
            key={item.category}
            to={`/categoryIssue/${item.category}`}
            role="tab"
            className={({ isActive }) =>
              `btn w-full ${isActive ? "btn bg-blue-400" : ""}`
            }
          >
            {item.category}
          </NavLink>
        ))}
      </div>
  );
};

export default Items;
