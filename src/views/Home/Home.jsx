import "./Home.scss";
import Header from "../../Components/Header/Header";
import RightSideBar from "../../Components/RightSideBar/RightSideBar";
import Content from "../../Components/Content/Content";
import PostPopup from "../../Components/PostPopup/PostPopup";

const Home = () => {

    return (
        <div className='home'>
            <Header />
            <RightSideBar />
            <Content />
        </div>
    )
}

export default Home;
