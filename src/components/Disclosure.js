import { Helmet } from "react-helmet"
import Plain from "./Plain"

export default function Disclosure(){
    return (
        <div className="app">
            <Helmet>
                <title>Gluten Free Disclosure | Custom Cakes | Utah</title>
                <link rel="canonical" href="https://frostedbynes.com/disclosure/" />
                <meta name="description" content="We offer gluten free options for all our cakes. Please see what that means for you." />
            </Helmet>
            <Plain title="DISCLOSURE" classes="logo-purple-bg">
                <div className="bold-small">Although I provide cakes that are GLUTEN FREE (without any gluten containing ingredients) my kitchen is not a dedicated gluten free space. Gluten containing foods are prepared in the same kitchen at separate times, and before thorough cleaning and disinfecting. However, as someone with symptomatic Celiac Disease, I can assure you that I am diligent in avoiding cross contamination, and I would not provide you with a gluten free cake that I would not eat myself! With that said, there is still a risk and you will need to decide if that’s a risk worth taking.</div>
            </Plain>
        </div>
    )
}