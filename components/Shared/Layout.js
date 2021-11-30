import Navigation from './Navigation/Navigation'
import Footer from './Footer/Footer'
import Cookie from './Cookie/Cookie'
import Meta from '../core/Meta'


const Layout = ({className, children}) => {
    return (
        <div className={`gh_page __page_${className}`}>
            <Meta />

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
