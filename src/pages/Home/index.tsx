import Header from "../../components/Header"
import Footer from "../../components/Footer";
import Paths from "../../components/Paths";
import List from "../../components/List";

function Home(){
    return(
        <div>
            <Header />
            <div id="container">
                <Paths/>
                <List label="/" categoria="/"></List>
            </div>
            <Footer />
        </div>
    )
}

export default Home