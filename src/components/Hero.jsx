import flipkartLogo from '../assets/images/flipkart.png'
import amazonLogo from '../assets/images/amazon.png'
import shoe from '../assets/images/shoe_image.png'


export default function Hero() {
    return (
        <main className="hero">
            <div className="heroContent">
                <h1>YOUR FEET DESERVE
                    THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE
                    HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>


                <div className="heroButtons">
                    <button id='btn1'>Shop Now</button>
                    <button id='btn2'>Category</button>
                </div>

                <div className="ecommerce">

                    <p>Available On</p>
                    <div className="ecomIcons">
                        <img src={flipkartLogo} alt="flipkart" />
                        <img src={amazonLogo} alt="amazon" />
                    </div>

                </div>
            </div>

            <div className="heroImage">
                <img src={shoe} alt="" />
            </div>

        </main>
    )
}
