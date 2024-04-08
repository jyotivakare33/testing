import Sidebar from "./Sidebar";
import ReviewsDataTable from "./ReviewsDataTable";

import React, { useState, useEffect } from "react";

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState([]);
  const [searchresults, setSearchResults] = useState(false);
  const [email, setEmail] = useState("");
  const [searchType, setSearchType] = useState("");

  const [validEmail, setValidEmail] = useState(false);

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    const emailRegex = /^([a-zA-Z0-9]+)$/;

    setEmail(enteredEmail);
    setValidEmail(emailRegex.test(enteredEmail));
  };

  const handleSelectChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleSearchResults = () => {
    console.log(searchType);
    (searchType === "reviewid" || searchType === "granteename") && validEmail
      ? setSearchResults(true)
      : setSearchResults(false);
  };

  const fetchData = async () => {
    const response = await fetch("/reviewsData");
    const data = await response.json();
    setReviewsData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  searchresults ? console.log(true) : console.log(false);

  return (
    <div className="container">
      <div className="flex-1" />
      <Sidebar />
      <div className="flex-2">
        <div>
          <div className="flex justify-between">
            {" "}
            <div className="text-justify font-bold text-3xl">Reviews</div>
            <button
              type="button"
              className="py-2 px-10 align-end inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:bg-white dark:text-gray-800"
            >
              Add New
            </button>
          </div>

          <hr className="border-1 mt-6" />
          <div className=" py-3 text-start text-m font-bold text-black uppercase">
            Review Search{" "}
          </div>

          <div className="grid grid-rows-1 grid-flow-col">
            <div className=" text-start text-xs font-medium text-black uppercase">
              Review ID
            </div>

            <p className=" text-start text-xs font-medium text-black uppercase">
              Grantee Name
            </p>
          </div>

          <div className="grid grid-flow-rows-1 grid-flow-col gap-x-10 mt-4 justify-evenly w-full items-start	">
            <div>
              <div className="relative">
                <select
                  id="select-1"
                  className=" border border-gray-200 py-3 px-4 pe-16 block w-full rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  value={searchType}
                  onChange={handleSelectChange}
                >
                  <option selected="">Open this select menu</option>
                  <option value="reviewid">Review Id</option>
                  <option value="granteename">Grantee Name</option>
                </select>
              </div>
            </div>

            {/* <p className=" text-start text-xs font-medium text-black uppercase">
              OR
            </p> */}
            <input
              type="text"
              className="py-3 px-4 block w-96 border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="This is placeholder"
              value={email}
              onChange={handleEmailChange}
            />

            <button
              type="button"
              className="py-2 px-10 align-end inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:bg-white dark:text-gray-800"
              onClick={handleSearchResults}
            >
              Search
            </button>
          </div>
        </div>
        {validEmail ? null : <span>Please enter a valid value</span>}

        <div className=" py-3 text-start text-m font-bold text-black uppercase">
          Search Results{" "}
        </div>
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="border rounded-lg overflow-hidden dark:border-gray-700">
                {searchresults ? (
                  <ReviewsDataTable reviewsData={reviewsData} />
                ) : (
                  <div className="w-full">There is no Data to display</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
