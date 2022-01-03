import Footer from './footer';
import Navbar from './navbar';

const Layout = ({ children }) => {
    return (
        <>
            {/* {localStorage.getItem('isLoggedIn') ? <Navbar /> : null} */}
            <Navbar />
            {children}
            {/* {localStorage.getItem('isLoggedIn') ? <Footer /> : null} */}
            <Footer />
        </>
    );
};

export default Layout;
