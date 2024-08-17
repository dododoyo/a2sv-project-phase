"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import { useAppSelector } from "@/app/store";
import { updateQuery } from "@/app/features/search/searchSlice";

const SearchInput = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchQuery = useAppSelector(
    (state) => state.searchReducer.value.query
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateQuery(event.target.value));
  };

  return (
    <form className="mr-2">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 rounded-3xl bg-white text-black"
        value={searchQuery}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default SearchInput;
