import React from 'react'
import logo from '../../img/lo.jpg'
import '../../App.css'


const Hero = () => {
    return (
        <section className='center'>
            <h1>BUILD YOUR CAKE</h1>
            <p> Create your own cake online with our cake creator! Choose between alot of flavours, toppings and treat  </p>

            <h4>GET 20% OFF YOUR FIRST BANKING ORDER</h4>
            <form>
                <input type='text' className='form-control' placeholder='Enter Email Address'  autoFocus /> <button>GET EARLY ACCESS</button>
            </form>

                <h5 className="thirty">32</h5>
                <h6 className="six">Days to Lunch</h6>

                {/* <div className="icon">
                    <p className="facebook">1</p><p className="instagram">2</p><p className="twitter">3</p>
                </div> */}

<div className="short">Simplify your Baking Process</div>
<div className="long">Take your baking skills to the next level, Visualize your designs before you begin</div>

<div className="grid1">
<h5>Variety of build options</h5>
<p>Cake shape and size is chosen. This is selected based on the number of people intended to serve</p>
</div>

<div className="grid2">
<h5>Fun and Intuitive ui</h5>
<p>We have flour flavours to choose from, you could go with them or go all natural flavoring</p>
</div>

<div className="grid3">
<h5>Access to bakers in your location</h5>
<p>Buttercream or fondant or just plain icing sugar, it is available to be chosen</p>
</div>

                <div className="screen">
                    <h3>Main Screens</h3>
                    <h4>Take your baking skills to the next level, Visualize your design before you begin</h4>
                </div>

               

                <div className="demo">
                    <h2>WATCH A DEMO</h2>
                </div>

                <div className="television">
                    <img className="#" src="#" />
                </div>

                <div className="access">
                    <h2>BE THE FIRST TO GET ACCESS WHEN THE WEBSITE GOES LIVE</h2>
                    <p>GET 20% OFF YOUR FIRST BAKING ORDER</p>
                </div>

                <div className="baker">
                <img src={logo} alt='' /> <h2>MASTERBAKER.</h2>
                </div>

                <div className="location">
                    <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                </div>

                <div className="phone">
                    <p>(704) 555-0127</p>
                </div>

                <form className="last">
                <input type='text' className='form-control' placeholder='Enter Email Address'  autoFocus /> <button>GET EARLY ACCESS</button>
            </form>
        </section>
        
    )
}

export default Hero
 

