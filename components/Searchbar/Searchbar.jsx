'use client'
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import $ from "jquery";

const Searchbar = () => {
  const [showResult, setshowResult] = useState(false);
  const searchContentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContentRef.current && !$(event.target).closest('.search_content').length) {
        if (!$(event.target).hasClass('search_bar_input') && !$(event.target).hasClass('search_result_btn') && showResult) {
          setshowResult(false);
        }
      }
    };
  
    const handleSearchBarInputClick = () => {
      setshowResult(true);
    };
  
    $(document).on('mousedown', handleClickOutside);
    $('.search_bar_input').on('click', handleSearchBarInputClick);
  
    return () => {
      $(document).off('mousedown', handleClickOutside);
      $('.search_bar_input').off('click', handleSearchBarInputClick);
    };
  }, [showResult]); 
  
  return (
    <div className="w-full relative">
      <div class="input-group relative">
        <textarea
          placeholder="Address, School, City, etc"
          class="search_bar_input pl-6 pt-3 resize-none !rounded-full w-full h-[55px]"
          aria-label="With textarea"
        ></textarea>
        <button className="search_result_btn flex justify-center items-center absolute top-1.5 right-1.5 p-2.5 bg-[#1A1816] hover:bg-gray-800 !rounded-full text-white z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23px"
            height="23px"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M232.49 215.51L185 168a92.12 92.12 0 1 0-17 17l47.53 47.54a12 12 0 0 0 17-17ZM44 112a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68"
            ></path>
          </svg>
        </button>
      </div>

      <div ref={searchContentRef} className={`${showResult ? 'block' : 'hidden'} z-20 max-h-[300px] search_content absolute top-16 w-full text-gray-500 
      border shadow-lg rounded-lg overflow-y-scroll bg-white transition-all ease-in-out`}>
        <div className="search_content_title px-4 pt-4">
          <p className="font-semibold text-sm">Nearby Cities</p>
        </div>

        <Link
          href="linktoregion"
          className="search_content_items flex items-center justify-between py-3 px-4 hover:bg-gray-100"
        >
          <div className="flex items-center gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M17 9h2V7h-2zm0 4h2v-2h-2zm0 4h2v-2h-2zm0 4v-2h4V5h-9v1.4l-2-1.45V3h13v18zM1 21V11l7-5l7 5v10H9v-5H7v5zm2-2h2v-5h6v5h2v-7L8 8.45L3 12zm8 0v-5H5v5v-5h6z"
              ></path>
            </svg>
            <p className="text-sm search_content_items_region">
              Quatre Bornes, Plaine willems
            </p>
          </div>

          <div className="search_content_items_results_count text-xs bg-gray-200 text-black rounded-full px-2 py-1">
            250 results
          </div>
        </Link>

        <Link
          href="linktoregion"
          className="search_content_items flex items-center justify-between py-3 px-4 hover:bg-gray-100"
        >
          <div className="flex items-center gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M17 9h2V7h-2zm0 4h2v-2h-2zm0 4h2v-2h-2zm0 4v-2h4V5h-9v1.4l-2-1.45V3h13v18zM1 21V11l7-5l7 5v10H9v-5H7v5zm2-2h2v-5h6v5h2v-7L8 8.45L3 12zm8 0v-5H5v5v-5h6z"
              ></path>
            </svg>
            <p className="text-sm search_content_items_region">
              Quatre Bornes, Plaine willems
            </p>
          </div>

          <div className="search_content_items_results_count text-xs bg-gray-200 text-black rounded-full px-2 py-1">
            250 results
          </div>
        </Link>

        <Link
          href="linktoregion"
          className="search_content_items flex items-center justify-between py-3 px-4 hover:bg-gray-100"
        >
          <div className="flex items-center gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M17 9h2V7h-2zm0 4h2v-2h-2zm0 4h2v-2h-2zm0 4v-2h4V5h-9v1.4l-2-1.45V3h13v18zM1 21V11l7-5l7 5v10H9v-5H7v5zm2-2h2v-5h6v5h2v-7L8 8.45L3 12zm8 0v-5H5v5v-5h6z"
              ></path>
            </svg>
            <p className="text-sm search_content_items_region">
              Quatre Bornes, Plaine willems
            </p>
          </div>

          <div className="search_content_items_results_count text-xs bg-gray-200 text-black rounded-full px-2 py-1">
            250 results
          </div>
        </Link>

        <Link
          href="linktoregion"
          className="search_content_items flex items-center justify-between py-3 px-4 hover:bg-gray-100"
        >
          <div className="flex items-center gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M17 9h2V7h-2zm0 4h2v-2h-2zm0 4h2v-2h-2zm0 4v-2h4V5h-9v1.4l-2-1.45V3h13v18zM1 21V11l7-5l7 5v10H9v-5H7v5zm2-2h2v-5h6v5h2v-7L8 8.45L3 12zm8 0v-5H5v5v-5h6z"
              ></path>
            </svg>
            <p className="text-sm search_content_items_region">
              Quatre Bornes, Plaine willems
            </p>
          </div>

          <div className="search_content_items_results_count text-xs bg-gray-200 text-black rounded-full px-2 py-1">
            250 results
          </div>
        </Link>

        <Link
          href="linktoregion"
          className="search_content_items flex items-center justify-between py-3 px-4 hover:bg-gray-100"
        >
          <div className="flex items-center gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M17 9h2V7h-2zm0 4h2v-2h-2zm0 4h2v-2h-2zm0 4v-2h4V5h-9v1.4l-2-1.45V3h13v18zM1 21V11l7-5l7 5v10H9v-5H7v5zm2-2h2v-5h6v5h2v-7L8 8.45L3 12zm8 0v-5H5v5v-5h6z"
              ></path>
            </svg>
            <p className="text-sm search_content_items_region">
              Quatre Bornes, Plaine willems
            </p>
          </div>

          <div className="search_content_items_results_count text-xs bg-gray-200 text-black rounded-full px-2 py-1">
            250 results
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Searchbar;
