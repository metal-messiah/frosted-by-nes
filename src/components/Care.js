
import { Helmet } from "react-helmet";
import Plain from "./Plain";

export default function Care(){
    return (
        <div className="app flex center center-horiz padded">
            <Helmet>
                <title>Cutting and Storing Your Cakes | Serving for Parties</title>
                <link rel="canonical" href="https://frostedbynes.com/media/" />
                <meta name="description" content="Check out some photos of the cakes we have made for our customers. We love seeing your vision come to life!" />
                <script async src="//www.instagram.com/embed.js"></script>
            </Helmet>
            <Plain classes="logo-alt-pink-bg bold-smaller padded margin" titleClasses="logo-purple-color" title="Caring For and Cutting Your Cake" secondaryText="Keeping your cake moist and delicious before your big day can be simple and easy.  Cutting and serving your cake to your guests can be even easier!" />
            <img className="contain-width care" src={process.env.PUBLIC_URL + '/cake-care-cutting.jpg'} alt='How to care for and cut your cake.' />
        </div>
    )
}