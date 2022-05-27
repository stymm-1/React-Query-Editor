import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-github";
import { Button } from "../reusable/Button";


const Editor = ({ setQuery, value, setValue, isOpen }) => {
  const onChange = (newValue) => {
    setValue(newValue);
  };

  const onSubmit = () => {
    var Z = value.toLowerCase().slice(value.indexOf("from") + "from".length);
    setQuery(Z.split(" ")[1]);
  };
 
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
    <main
      className={`${
        isOpen ? "col-start-2" : "col-start-1"
      } col-end-3 row-start-2 row-end-3 mx-6 my-12 lg:mx-12`}
    >
      <label htmlFor="editor">
        <AceEditor
          id="editor"
          aria-label="editor"
          mode="mysql"
          theme="github"
          name="editor"
          fontSize={16}
          minLines={15}
          maxLines={10}
          width="100%"
          showPrintMargin={false}
          showGutter
          placeholder="Write your Query here..."
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
          }}
          value={value}
          onChange={onChange}
          showLineNumbers
        />
      </label>
      <div>
        <Button handleClick={onSubmit} iconName="fas fa-play">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <title id="run">run query</title>
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Run Query
        </Button>
        <button
        className="bg-primary-dark text-white hover:bg-secondary-dark font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ml-3"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Help
      </button>
      </div>
    </main>
    {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                  Predefined SQL Queries
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <ul class="list-none hover:list-disc">
                  <li>select * from customers</li>
                  <li>select * from categories
</li>
                  <li>select * from employee_territories
</li>
                  <li>select * from order_details
</li>
                  <li>select * from orders
</li>
<li>select * from products
</li>
<li>select * from regions
</li>
<li>select * from shippers
</li>
<li>select * from suppliers
</li>
<li>select * from territories
</li>
                </ul>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>

    
  );
};

export default Editor;
