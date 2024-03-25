import Sidebar from "./Sidebar";

const Reviews = () => {
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
            <input
              type="text"
              className="py-3 px-4 block w-96 border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="This is placeholder"
            />
            <p className=" text-start text-xs font-medium text-black uppercase">
              OR
            </p>
            <input
              type="text"
              className="py-3 px-4 block w-96 border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="This is placeholder"
            />
            <button
              type="button"
              className="py-2 px-10 align-end inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:bg-white dark:text-gray-800"
            >
              Search
            </button>
          </div>
        </div>

        <div className=" py-3 text-start text-m font-bold text-black uppercase">
          Search Results{" "}
        </div>

        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Review ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Grantee ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Grantee Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                      >
                        Reviews Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-left">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        01234F2C{" "}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        98765432{" "}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        Kids Are First, Inc.{" "}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        Page U1/01/24 - 1/05/24RL
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        01234F2C{" "}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        98765432{" "}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        Kids Are First, Inc.{" "}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        Page U1/01/24 - 1/05/24RL
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        01234F2C{" "}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        98765432
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        Kids Are First, Inc.{" "}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        Page U1/01/24 - 1/05/24RL
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
