// import { useState } from "react";

import { useGlobalContext } from "../context";

const SearchForm = () => {
  // const [input, setInput] = useState("");
  const { setSearch } = useGlobalContext();
  function handleSubmit(e) {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    // console.log(e.target.elements.search.value);
    if (!searchValue) return;
    console.log(searchValue);
    // e.currentTarget.reset();
    setSearch(searchValue);
  }
  return (
    <section className="search-form">
      <h1 className="title">Racon Camera</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="eg: 'avengers'"
          className="form-input search-input"
        />
        <button className="search-btn">search</button>
      </form>
    </section>
  );
};

export default SearchForm;
