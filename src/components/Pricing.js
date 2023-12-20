import { Helmet } from "react-helmet";
import Description from "./Description";
import Plain from "./Plain";
import { Link } from "react-router-dom";

export default function Pricing(){
    return(
        <div className="App">
            <Helmet>
                <title>Cake Pricing | Traditional and Gluten Free Cakes | Utah</title>
                <link rel="canonical" href="https://frostedbynes.com/pricing/" />
                <meta name="description" content="Our selection of traditional and gluten free cakes feature affordable pricing and can be customized to match your vision." />
            </Helmet>
            <Plain classes='logo-purple-bg margin' title="PRICING">
                <Link to="https://forms.gle/m6zgFcMAofR161vB9" >Click To Order</Link>
            </Plain>
            <Plain hash='cutie-cakes' title={`4 INCH DOUBLE LAYER "CUTIE CAKES"`} classes='logo-purple-bg three-quarter margin top' secondaryText={`Our 4 inch round 3 layer "lunchbox" style cakes make great party favors or personalized individual servings for 1-4 people while remaining customizable.`}>
                <hr />
                <div className="bold-small padded">(4" x 2" Per Layer)</div>
                <Description name="Single" price="$10" />
                <Description name="Half Dozen" price="$50" />
            </Plain>
            <Plain hash='6-inch-rounds' title={`6 INCH ROUND`} classes='logo-purple-bg three-quarter margin top' secondaryText="A 6 inch round layer cake is the perfect way to add elegance and fun to small gatherings of 8 to 16 people. You can enjoy a generous slice of cake without worrying about leftovers or waste.">
                <hr />
                <div className="bold-small padded">(6" x 2" Per Layer)</div>
                <Description name="Custom Single Layer" price="$20" />
                <Description name="Custom Double Layer" price="$40" />
                <Description name="Custom Triple Layer" price="$50" />
            </Plain>
            <Plain hash='6-inch-hearts' title="6 INCH HEART" classes='logo-purple-bg three-quarter margin top' secondaryText="A 6 inch heart-shaped layer cake allows for small gatherings of 8 to 16 people while adding a unique touch to the design.">
                <hr />
                <div className="bold-small padded">(6" x 2" Per Layer)</div>
                <Description name="Custom Single Layer" price="$20" />
                <Description name="Custom Double Layer" price="$40" />
                <Description name="Custom Triple Layer" price="$50" />
            </Plain>
            <Plain hash='8-inch-rounds' title="8 INCH ROUND" classes='logo-purple-bg three-quarter margin top' secondaryText={`An 8 inch round layer cake is the go-to party cake that still allows for that "grand" entrance. Feeds 12-24 depending on the layers.`}>
                <hr />
                <div className="bold-small padded">(8" x 2" Per Layer)</div>
                <Description name="Custom Single Layer" price="$25" />
                <Description name="Custom Double Layer" price="$50" />
                <Description name="Custom Triple Layer" price="$65" />
            </Plain>
            <Plain hash='sheet-cakes' title="SHEET CAKES" classes='logo-purple-bg three-quarter margin top' secondaryText="A sheet cake with our delicious cake and buttercream is a cost effective way to feed an army. Feeds 25-50 people.">
                <hr />
                <div className="bold-small padded">(18" x 13" x 2")</div>
                <Description name={`Half Sheet`} price="$40" />
            </Plain>
            <Plain hash='custom-cakes' title="CUSTOM CAKES" classes='logo-purple-bg three-quarter margin top' secondaryText="Make your vision come to life, for cases not covered in our standard offerings.">
                <Description name="Specialty Cakes" price="Free Quote" />
            </Plain>
        </div>
    )
}