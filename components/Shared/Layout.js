import React from 'react'
import Navigation from './Navigation/Navigation'
import Footer from './Footer/Footer'
import Cookie from './Cookie/Cookie'

const Layout = ({className, children}) => {
    return (
        <div className={`gh_page __page_${className}`}>
            <Cookie />
            {/* Page Navigaiton */}
            <Navigation />

            {/* Main Body Area */}
            <main>
                {children}
            </main>

            {/* Page Footer */}
            <Footer />
            
        </div>
    )
}

export default Layout
