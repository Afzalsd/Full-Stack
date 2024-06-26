import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Outlet} from 'react-router-dom'

function RootLayout() {
  return (
    <div>
      <Header />
      {/* dynamic content */}
        <div style={{minHeight:'100vh'}} className='container'>
            <Outlet />
        </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
