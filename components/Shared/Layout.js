import React from 'react'
import Navigation from './Navigation/Navigation'
import Footer from './Footer/Footer'

const Layout = ({className, children}) => {
    return (
        <div className={`gh_page __page_${className}`}>
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
