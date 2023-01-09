import TopNavBar from "../components/TopNavBar"
import Footer from "../components/Footer"

export default function Layout ({children}) {
    return (
        <>
            <TopNavBar></TopNavBar>
            <div className="layout">
                {children}
            </div>
            <Footer></Footer>
        </>
    )
}