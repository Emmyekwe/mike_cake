import React from 'react'
import logod from '../../img/logod.jpeg'
import top from '../../img/top.png'
import facebook from '../../img/facebook.png'
import twitter from '../../img/twitter.png'
import instagram from '../../img/instagram.png'
import square from '../../img/square.png'
import top_left from '../../img/top_left.png'
import mid from '../../img/mid.png'
import cake from '../../img/cake.png'
import one from '../../img/1.png'
import two from '../../img/2.png'
import three from '../../img/3.png'
import toppings from '../../img/toppings.png'
import a from '../../img/a.jpeg'
import b from '../../img/b.jpeg'
import c from '../../img/c.jpeg'
import d from '../../img/d.jpeg'
import e from '../../img/e.jpeg'
import f from '../../img/f.jpeg'

import '../../App.css'


const Hero = () => {
    return (
        <section className='center'>
            <div className="logo">
                        <img src={logod} alt='logo' />  
            </div>
            <h1>BUILD YOUR CAKE</h1>
            <p> Create your own cake online with our cake creator! Choose between alot of flavours, toppings and treat  </p>
            <div className="top">
            <img src={top} alt='top' />
            </div>
            <div className="cake">
            <img src={cake} alt='cake' />
            </div>
            <h4>GET 20% OFF YOUR FIRST BANKING ORDER</h4>
            <div className="upperF">
                <input type='text' className='form-control' placeholder='Enter Email Address'  autoFocus /> <button>GET EARLY ACCESS</button>
            </div>
            <div className="square">
            <img src={square} alt='square' />
            </div>
                <h5 className="thirty">32</h5>
                <h6 className="six">Days to Lunch</h6>


                <div className="icons">
                    <div className="facebook"> <img src={facebook} alt='facebook' /> </div><div className="instagram"><img src={instagram} alt='instagram' /></div><div className="twitter"><img src={twitter} alt='twitter' /></div>
                </div> 


                <div className="top_left">
            <img src={top_left} alt='top_left' />
            </div>
            <div className="mid">
            <img src={mid} alt='mid' />
            </div>
<div className="short">Simplify your Baking Process</div>
<div className="long">Take your baking skills to the next level, Visualize your designs before you begin</div>

        <div className="toppings">
        <img src={toppings} alt="toppings" />
        </div>

<div className="grid1">
    <img src={one} alt="one" />
<h5>Variety of build options</h5>
<p>Cake shape and size is chosen. This is selected based on the number of people intended to serve</p>
</div>

<div className="square2">
            <img src={square} alt='square' />
            </div>

<div className="grid2">
<img src={two} alt="two" />
<h5>Fun and Intuitive ui</h5>
<p>We have flour flavours to choose from, you could go with them or go all natural flavoring</p>
</div>

<div className="grid3">
<img src={three} alt="three" />
<h5>Access to bakers in your location</h5>
<p>Buttercream or fondant or just plain icing sugar, it is available to be chosen</p>
</div>

                <div className="screen">
                    <h3>Main Screens</h3>
                    <h4>Take your baking skills to the next level, Visualize your design before you begin</h4>
                <div className="a">
                    <img src={a} alt='a' />
                    <h6>Home Page</h6>
                </div>
                <div className="b">
                    <img src={b} alt='b' />
                    <h6>Selection Page</h6>
                </div>
                <div className="c">
                <img src={c} alt='c' />
                <h6>Cake shape and size</h6>
            </div>
            <div className="d">
                    <img src={d} alt='d' />
                    <h6>Cake flavour and fillings</h6>
                </div>
                <div className="e">
                    <img src={e} alt='e' />
                    <h6>Cake icing and toppings</h6>
                </div>
                <div className="f">
                    <img src={f} alt='f' />
                    <h6>Checkout</h6>
                </div>
            </div>
                <div className="square5">
            <img src={square} alt='square' />
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

                

                <div className="top_left2">
            <img src={top_left} alt='top_left' />
            </div>

            <div className="bottomF">
                <input type='text' className='form-control' placeholder='Enter Email Address'  autoFocus /> <button>GET EARLY ACCESS</button>
            </div>

            <div className="square3">
            <img src={square} alt='square' />
            </div>
            <div className="bottom">
            <h6>Copyright, Masterbaker <a href="#">General Policy | Terms of Use</a> </h6> 
                </div>
        </section>
     
    )
}

export default Hero
 

