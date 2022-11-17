import React from 'react'
import p1img from '../img/p1img.png'
import mbtoken from '../svg/mbtoken.svg'
import metamask from '../svg/metamask.svg'
import opensea from '../svg/opensea.svg'
import p2i1 from '../img/p2i1.png'
import p2i2 from '../img/p2i2.png'
import p2i3 from '../img/p2i3.png'
import p2i4 from '../img/p2i4.png'
import p2i5 from '../img/p2i5.png'
import p2i6 from '../img/p2i6.png'
import p2i7 from '../img/p2i7.png'
import p2i8 from '../img/p2i8.png'
import lmore from '../img/lmore.png'

export default function Home() {
  return (
    <div id="homecomp">
        <div id='home'>
            <main id='main' className='row'>
                    <div id='intro' className='col-md-7'>
                        <div>
                            <h1>Rent a <span className="ctext">Place</span> away from <span className="ctext">Home</span> in the <span className="ctext">Metaverse</span></h1>
                            <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                            <span>
                                <input type="text" name="text" id="text" placeholder='    Search for location' />
                                <button>Search</button>
                            </span>
                        </div>
                    </div>
                    <div id='p1img' className='col-md-5'>
                        <img src={p1img} alt="" />
                    </div>
            </main>

            <div id='homebar'>
                <div>
                    <img src={mbtoken} alt="" />
                </div>
                <div>
                    <img src={metamask} alt="" />
                </div>
                <div>
                    <img src={opensea} alt="" />
                </div>
            </div>
        </div>

        <div id="insp">
            <h2>Inspiration for your next adventure</h2>
            <div id="insp_items">
                <img src={p2i5} alt="" />
                <img src={p2i6} alt="" />
                <img src={p2i7} alt="" />
                <img src={p2i8} alt="" />
                <img src={p2i1} alt="" />
                <img src={p2i2} alt="" />
                <img src={p2i3} alt="" />
                <img src={p2i4} alt="" />
            </div>
        </div>

        <div id="learn_more" className='row'>
            <div id="ldesc" className='col-md-5'>
                <h2>Metabnb NFTs</h2>
                <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                <div id="ltext">
                    <a href="">Learn more</a>
                </div>
                
            </div>
            <div id="limg" className='col-md-6'>
                <img src={lmore} alt="" />
            </div>
        </div>
    </div>
  )
}
