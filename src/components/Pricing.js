import Description from "./Description";
import Plain from "./Plain";

export default function Pricing(){
    return(
        <div className="App">
            <Plain classes='logo-purple-bg quarter margin' secondaryText="">
                PRICING
            </Plain>
            <Plain hash='cutie-cakes' title={`3.5 INCH TRIPLE LAYER "CUTIE CAKES"`} classes='logo-purple-bg three-quarter margin top' secondaryText="A 6 inch round layer cake is the perfect way to add elegance and fun to small gatherings of 8 to 16 people. You can enjoy a generous slice of cake without worrying about leftovers or waste.">
                <Description name="Single" price="$10" />
                <Description name="Half Dozen" price="$50" />
            </Plain>
            <Plain hash='6-inch-rounds' title="6 INCH ROUND" classes='logo-purple-bg three-quarter margin top' secondaryText="A 6 inch round layer cake is the perfect way to add elegance and fun to small gatherings of 8 to 16 people. You can enjoy a generous slice of cake without worrying about leftovers or waste.">
                <Description name="Custom Single Layer" price="$20" />
                <Description name="Custom Double Layer" price="$40" />
                <Description name="Custom Triple Layer" price="$50" />
            </Plain>
            <Plain hash='6-inch-hearts' title="6 INCH HEART" classes='logo-purple-bg three-quarter margin top' secondaryText="A 6 inch round layer cake is the perfect way to add elegance and fun to small gatherings of 8 to 16 people. You can enjoy a generous slice of cake without worrying about leftovers or waste.">
                <Description name="Custom Single Layer" price="$20" />
                <Description name="Custom Double Layer" price="$40" />
                <Description name="Custom Triple Layer" price="$50" />
            </Plain>
            <Plain hash='8-inch-rounds' title="8 INCH ROUND" classes='logo-purple-bg three-quarter margin top' secondaryText="A 6 inch round layer cake is the perfect way to add elegance and fun to small gatherings of 8 to 16 people. You can enjoy a generous slice of cake without worrying about leftovers or waste.">
                <Description name="Custom Single Layer" price="$25" />
                <Description name="Custom Double Layer" price="$50" />
                <Description name="Custom Triple Layer" price="$65" />
            </Plain>
            <Plain hash='sheet-cakes' title="SHEET CAKES" classes='logo-purple-bg three-quarter margin top' secondaryText="A 6 inch round layer cake is the perfect way to add elegance and fun to small gatherings of 8 to 16 people. You can enjoy a generous slice of cake without worrying about leftovers or waste.">
                <Description name={`Half Sheet (18x13)`} price="$40" />
            </Plain>
            <Plain hash='custom-cakes' title="CUSTOM CAKES" classes='logo-purple-bg three-quarter margin top' secondaryText="A 6 inch round layer cake is the perfect way to add elegance and fun to small gatherings of 8 to 16 people. You can enjoy a generous slice of cake without worrying about leftovers or waste.">
                <Description name="Specialty Cakes" price="Get Quote" />
            </Plain>
        </div>
    )
}