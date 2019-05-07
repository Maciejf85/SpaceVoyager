import React from "react";
import PageList from "./layout/Pagination";

const Pagination = ({ page, count }) => {
  const array = [];
  for (let i = 1; i <= count; i++) {
    array.push(i);
  }
  return (
    <>
      <ul style={{ display: "flex", listStyle: "none" }}>
        {array.map((item, index) => (
          <PageList isActive={page === index + 1} key={item}>
            {item}
          </PageList>
        ))}
      </ul>
    </>
  );
};

export default Pagination;
