import Main from "../data/main";
import "./home.scss";

const Home = () => {

    return (
        <div>
            <ul>
            {
                Main.blog.map((item)=>{
                    return (<>
                    <li>{item.name}</li>
                    <li>{item.title}</li>
                    <li>{item.description}</li>
                    </>)
                })
            }
            </ul>

        </div>
    )
}

export default Home;
