import ChangesTable from "./ChangesTable";
import ProjectInbox from "./ProjectInbox";
import Summary from "./Summary";

const Tab = () => {
  return (
    <div>
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-bold py-4 px-6 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-slate-950	 focus:outline-none focus:text-slate-950 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-slate-950 active"
            id="tabs-with-underline-item-1"
            data-hs-tab="#tabs-with-underline-1"
            aria-controls="tabs-with-underline-1"
            role="tab"
          >
            Summary
          </button>
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black py-4 px-6 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-black focus:outline-none focus:text-black disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-black"
            id="tabs-with-underline-item-2"
            data-hs-tab="#tabs-with-underline-2"
            aria-controls="tabs-with-underline-2"
            role="tab"
          >
            Project Inbox
          </button>
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black py-4 px-6 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-black focus:outline-none focus:text-black disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-black"
            id="tabs-with-underline-item-3"
            data-hs-tab="#tabs-with-underline-3"
            aria-controls="tabs-with-underline-3"
            role="tab"
          >
            Your Inbox
          </button>
        </nav>
      </div>
      <div className="mt-3">
        <div
          id="tabs-with-underline-1"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-1"
        >
          <Summary />
        </div>

        <div
          id="tabs-with-underline-2"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-2"
        >
          <div>
            <label
              htmlFor="hs-trailing-button-add-on-with-icon-and-button"
              className="sr-only"
            >
              Label
            </label>
            <div className="relative flex rounded-lg shadow-sm">
              <input
                type="text"
                id="hs-trailing-button-add-on-with-icon-and-button"
                name="hs-trailing-button-add-on-with-icon-and-button"
                placeholder="Enter Review Id"
                className="py-2 px-4 ps-9 block w-[483px] border border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                <svg
                  className="flex-shrink-0 size-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <button
                type="button"
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Search
              </button>
            </div>
          </div>
          <ProjectInbox />
          <ChangesTable />
        </div>
        <div
          id="tabs-with-underline-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-3"
        >
          <p className="text-gray-500 dark:text-gray-400">
            This is the{" "}
            <em className="font-semibold text-gray-800 dark:text-gray-200">
              third
            </em>{" "}
            item tab body.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tab;
