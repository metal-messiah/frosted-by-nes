import { Helmet } from "react-helmet";
import InstagramView from "./InstagramView";





export default function Photos(){
    return (
        <div className="app">
            <Helmet>
                    <title>Photographs of Cakes Make By Nes | Buttercream Cakes | Utah</title>
                    <link rel="canonical" href="https://frostedbynes.com/photos/" />
                    <meta name="description" content="Check out some photos of the cakes we have made for our customers. We love seeing your vision come to life!" />
                    <script async src="//www.instagram.com/embed.js"></script>
            </Helmet>
            <InstagramView />
        </div>
    )
}