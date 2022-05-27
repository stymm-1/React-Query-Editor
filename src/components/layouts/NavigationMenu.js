import React from "react";

const Navbar = React.memo(({ setQuery, setValue, isOpen, setIsOpen }) => {
  const handleQuery = (queryName) => {
    setQuery(queryName);
    setValue(`select * from ${queryName}`);
  };
  return (
    <>
      <nav
        className={`${
          isOpen ? "col-start-2" : "col-start-1"
        } col-end-3 row-start-1 row-end-2 bg-primary-dark shadow`}
      >
        <div className="px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center">
                <a className="text-white font-bold align-middle" href="/">
                  React SQL Editor
                </a>
              </div>

              <a
                className="text-gray-300 hover:text-white py-2 rounded-md text-sm font-medium"
                href="https://github.com/stymm-1/React-Query-Editor"
                target="_blank"
                rel="noreferrer"
                title="github repository"
              >
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="text-lg leading-lg text-white opacity-75 hover:opacity-100 transition-opacity"
                >
                  <title id="github">github repository</title>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
});

export default Navbar;
