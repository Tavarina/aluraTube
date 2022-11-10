import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";


function HomePage() {

    // const mensagem = "Bem vindo ao AluraTube!";
    const estilosDaHomePage = {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        //backgroundColor: "red"
    }

    // console.log(config.playlists);

    return (
        <>
            <CSSReset />
            <div style={estilosDaHomePage}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists}>
                    Conte
                </Timeline>
            </div>
        </>
    );
}
export default HomePage

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }


const StyledHeader = styled.div`
 img{
 width:80px;
 height:80px;
 border-radius:50%;
 }
 .user-info {
    margin-top: 50px;
    display:flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
 }`;
 const StyledBanner = styled.div `
 /* background-color: blue; */
 background-image:  url(${({bg}) => bg});
 height: 230px;
 `;

function Header() {
    return (
        <StyledHeader>
           {/* <Banner src="banner.jpg" /> */}
    < StyledBanner bg={config.bg} />
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}
function Timeline(props) {
    // console.log("Dentro do componente", props.playlists);
    const playlistsNames = Object.keys(props.playlists)
    //Statement
    //Retorno por expressão

    return (
        <StyledTimeline>
            {playlistsNames.map((playlistsName) => {
                const videos = props.playlists[playlistsName];
                console.log(playlistsName);
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistsName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}