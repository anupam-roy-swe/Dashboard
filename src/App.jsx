import { BrowserRouter } from "react-router-dom";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FaBahai } from "react-icons/fa";
const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bd-main-dark-bg'>
          <div className='fixed right-4 bottom-4 ' style={{ zIndex: "1000" }}>
            {/* <TooltipComponent> */}
            <button
              type='button'
              className='text-3xl p-3 hover:bg-gray-500 text-white'
              style={{ background: "blue", borderRadius: "50px" }}
            >
              <FaBahai />
            </button>
            {/* </TooltipComponent> */}
          </div>
          {activeMenu ? (
            <dir className='w-72 fixed sidebar dark:bg-white'>sidebar</dir>
          ) : (
            <div>sidebar w-0</div>
          )}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
