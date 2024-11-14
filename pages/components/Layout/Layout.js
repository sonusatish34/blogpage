import React from 'react';
import Header from '../Hamburger/HamburgerMenu'
import Footer from '../Footer/Footer';
const Layout = ({ children , city, phoneno ,locname}) => {
    return (
        <div>
            <Header phoneno={phoneno} locname={locname}/>
            <main>{children}</main>
            <Footer locname={locname}/>
        </div>
    );
};

export default Layout;
