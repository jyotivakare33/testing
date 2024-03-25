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
          <p className="text-gray-500 dark:text-gray-400">
            This is the{" "}
            <em className="font-semibold text-gray-800 dark:text-gray-200">
              second
            </em>{" "}
            item tab body.
          </p>
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
