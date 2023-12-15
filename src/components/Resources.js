import { Helmet } from "react-helmet";
import InstagramView from "./InstagramView";
import HeaderButton from "./Header-Button";
import Plain from "./Plain";

export default function Resources() {
    return (
        <div className="app">
            <Helmet>
                <title>Cakes Made By Nes | Buttercream Cakes | Utah</title>
                <link rel="canonical" href="https://frostedbynes.com/media/" />
                <meta name="description" content="Check out some photos of the cakes we have made for our customers. We love seeing your vision come to life!" />
                <script async src="//www.instagram.com/embed.js"></script>
            </Helmet>
            <Plain classes="logo-purple-bg">
                <div className='flex evenly'>
                    <HeaderButton linkTo="/care/" text="CAKE CARE AND CUTTING" />
                </div>
            </Plain>
            <InstagramView />
        </div>
    )
}