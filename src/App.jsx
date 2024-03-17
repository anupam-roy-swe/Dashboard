import { BrowserRouter, Route, Routes } from "react-router-dom";

// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FaBahai } from "react-icons/fa";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Ecommerce from "./pages/Ecommerce";

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
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white '>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>Sidebar</div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full '>
              <Navbar />
            </div>
            {/* routes */}
            <div>
              {/* Dashboard */}
              <Routes>
                <Route path='/' element={<Ecommerce />} />
                <Route path='/' element='ecomarce' />
                {/* page */}

                <Route path='/' element='ecomarce' />
                <Route path='/' element='ecomarce' />
                <Route path='/' element='ecomarce' />
                {/* app */}
                <Route path='/' element='ecomarce' />
                <Route path='/' element='ecomarce' />
                <Route path='/' element='ecomarce' />
                <Route path='/' element='ecomarce' />
                <Route path='/' element='ecomarce' />
                {/* charts */}
                <Route path='/' element='ecomarce' />
                <Route path='/' element='ecomarce' />
                <Route path='/' element='ecomarce' />
                <Route path='/' element='ecomarce' />
                <Route path='/' element='ecomarce' />
                <Route path='/' element='ecomarce' />
                <Route path='/' element='ecomarce' />
                <Route path='/' element='ecomarce' />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
