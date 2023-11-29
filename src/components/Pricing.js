import { Helmet } from "react-helmet";
import Description from "./Description";
import Plain from "./Plain";

export default function Pricing(){
    return(
        <div className="App">
            <Helmet>
                <title>Cake Pricing | Gluten Free Buttercream Cakes | Utah</title>
                <link rel="canonical" href="https://frostedbynes.com/pricing/" />
                <meta name="description" content="Our selection of gluten free cakes feature affordable pricing and can be customized to match your vision." />
            </Helmet>
            <Plain classes='logo-purple-bg quarter margin' secondaryText="">
                PRICING
            </Plain>
            <Plain hash='cutie-cakes' title={`3.5 INCH TRIPLE LAYER "CUTIE CAKES"`} classes='logo-purple-bg three-quarter margin top' secondaryText={`Our 4 inch round 3 layer "lunchbox" style cakes make great party favors or personalized indivual servings for 1-4 people while remaining customizable.`}>
                <Description name="Single" price="$10" />
                <Description name="Half Dozen" price="$50" />
            </Plain>
            <Plain hash='6-inch-rounds' title="6 INCH ROUND" classes='logo-purple-bg three-quarter margin top' secondaryText="A 6 inch round layer cake is the perfect way to add elegance and fun to small gatherings of 8 to 16 people. You can enjoy a generous slice of cake without worrying about leftovers or waste.">
                <Description name="Custom Single Layer" price="$20" />
                <Description name="Custom Double Layer" price="$40" />
                <Description name="Custom Triple Layer" price="$50" />
            </Plain>
            <Plain hash='6-inch-hearts' title="6 INCH HEART" classes='logo-purple-bg three-quarter margin top' secondaryText="A 6 inch heart-shaped layer cake allows for small gatherings of 8 to 16 people while adding a unique touch to the design.">
                <Description name="Custom Single Layer" price="$20" />
                <Description name="Custom Double Layer" price="$40" />
                <Description name="Custom Triple Layer" price="$50" />
            </Plain>
            <Plain hash='8-inch-rounds' title="8 INCH ROUND" classes='logo-purple-bg three-quarter margin top' secondaryText={`An 8 inch round layer cake is the go-to party cake that still allows for that "grand" entrance. Feeds 12-24 depending on the layers.`}>
                <Description name="Custom Single Layer" price="$25" />
                <Description name="Custom Double Layer" price="$50" />
                <Description name="Custom Triple Layer" price="$65" />
            </Plain>
            <Plain hash='sheet-cakes' title="SHEET CAKES" classes='logo-purple-bg three-quarter margin top' secondaryText="A sheet cake with our delicious cake and buttercream is a cost effective way to feed an army. Feeds 25-50 people.">
                <Description name={`Half Sheet (18x13)`} price="$40" />
            </Plain>
            <Plain hash='custom-cakes' title="CUSTOM CAKES" classes='logo-purple-bg three-quarter margin top' secondaryText="Make your vision come to life, for cases not covered in our standard offerings.">
                <Description name="Specialty Cakes" price="Free Quote" />
            </Plain>
        </div>
    )
}