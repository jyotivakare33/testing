const Summary = () => {
  return (
    <>
      <div>
        <div className="font-bold text-gray-800 dark:text-gray-200 text-left text-xl">
          Welcome back, Lilian
        </div>
        <div className="text-left text-gray-800 italic mt-6">
          You last visited this site on 1/28/24 at 6:45 PM{" "}
        </div>
        <div className="border-2 border-gray-200 border-solid rounded box-border h-60 w-[75vw] mt-6">
          <div className="font-bold text-gray-800 dark:text-gray-200 text-left text-l ml-4 mt-6">
            Recently Viewed Pages
          </div>
          <ul className="list-disc list-inside text-gray-800 dark:text-white text-left ml-8 mt-6">
            <li>Page Url</li>
            <li>Page Url</li>
            <li>Page Url</li>
            <li>Page Url</li>
            <li>Page Url</li>
            <li>Page Url</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-x-2	">
        {" "}
        <div>
          <div className="border-2 border-gray-200 border-solid rounded box-border h-44 w-[37.5vw] mt-6">
            <div className="font-bold text-gray-800 dark:text-gray-200 text-left text-l ml-4 mt-6">
              Your Inbox
            </div>
            <ul className="list-disc list-inside text-gray-800 dark:text-white text-left ml-8 mt-6">
              <li>Outstanding Tasks: 2</li>
              <li>Last Completed Task: 1/4/2024</li>
            </ul>
          </div>
        </div>{" "}
        <div>
          <div className="border-2 border-gray-200 border-solid rounded box-border h-44 w-[37.5vw] mt-6">
            <div className="font-bold text-gray-800 dark:text-gray-200 text-left text-l ml-4 mt-6">
              Project Inbox
            </div>
            <ul className="list-disc list-inside text-gray-800 dark:text-white text-left ml-8 mt-6">
              <li>New Reviews: 25</li>
              <li>Review Changes: 12</li>
              <li>Other: 0</li>
              <li>Not Submitted: 0</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
