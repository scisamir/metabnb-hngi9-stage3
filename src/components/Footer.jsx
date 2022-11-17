import React from 'react'
import footersvg from '../svg/footersvg.svg'
import facebook from '../svg/facebook.svg'
import instagram from '../svg/instagram.svg'
import twitter from '../svg/twitter.svg'

export default function Footer() {
  return (
    <div id='footer' className='row'>
        <div id='foometa' className='col-md-3'>
            <div id='foometaimg'><img src={footersvg} alt="" /></div>
            <div id="icons">
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
            </div>
        </div>
        <div id='foocomm' className='col-md-3'>
            <h5>Community</h5>
            <span>NFT</span>
            <span>Tokens</span>
            <span>Landlords</span>
            <span>Discord</span>
        </div>
        <div id='fooplaces' className='col-md-3'>
            <h5><a href={`places`}>Places</a></h5>
            <span>Castle</span>
            <span>Farms</span>
            <span>Beach</span>
            <span>Learn more</span>
        </div>
        <div id='foobout' className='col-md-3'>
            <h5>About us</h5>
            <span>Road map</span>
            <span>Creators</span>
            <span>Career</span>
            <span>Contact us</span>
        </div>
        <div id='copyright'><span>&#169; 2022 Metabnb</span></div>
    </div>
  )
}
