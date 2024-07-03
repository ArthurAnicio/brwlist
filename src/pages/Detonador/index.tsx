import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Paths from "../../components/Paths"

function Detonador(){
    return(
        <div>
            <Header />
            <div id="container">
                <Paths/>
            </div>
            <Footer />
        </div>
    )
}

export default Detonador