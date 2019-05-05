import React from "react";

const Pagination = ({ page, count }) => {
  const array = [];
  for (let i = 1; i <= count; i++) {
    array.push(i);
  }
  return (
    <>
      <ul style={{ display: "flex", listStyle: "none" }}>
        {array.map((item, index) => (
          <li
            key={item}
            style={
              index + 1 === page
                ? { color: "red", padding: "0 5px" }
                : { color: "white", padding: "0 5px" }
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Pagination;
