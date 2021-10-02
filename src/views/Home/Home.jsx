import "./Home.scss";
import Header from "../../Components/Header/Header";
import RightSideBar from "../../Components/RightSideBar/RightSideBar";
import Content from "../../Components/Content/Content";
import PostPopup from "../../Components/PostPopup/PostPopup";
import Main, {addblog} from "../../data/Blogs";

const Home = () => {

    return (
        <div className='home'>
            <Header />
            <RightSideBar />
            <Content />
            <button onClick={()=>{addblog("jjjjjjjjj")}}></button>
        </div>
    )
}

export default Home;
