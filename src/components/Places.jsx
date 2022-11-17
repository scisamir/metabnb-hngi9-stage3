import React from 'react'
import location from '../svg/location.svg'
import p2i1 from '../img/p2i1.png'
import p2i2 from '../img/p2i2.png'
import p2i3 from '../img/p2i3.png'
import p2i4 from '../img/p2i4.png'
import p2i5 from '../img/p2i5.png'
import p2i6 from '../img/p2i6.png'
import p2i7 from '../img/p2i7.png'
import p2i8 from '../img/p2i8.png'
import p2i9 from '../img/p2i9.png'
import p2i10 from '../img/p2i10.png'
import p2i11 from '../img/p2i11.png'
import p2i12 from '../img/p2i12.png'
import p2i13 from '../img/p2i13.png'
import p2i14 from '../img/p2i14.png'
import p2i15 from '../img/p2i15.png'
import p2i16 from '../img/p2i16.png'

export default function Places() {
  return (
    <div id='places'>
        <div id="planav">
            <span>Resturant</span>
            <span>Cottage</span>
            <span>Castle</span>
            <span>fantast city</span>
            <span>beach</span>
            <span>Carbins</span>
            <span>Off-grid</span>
            <span>Farm</span>
            <div id="locsvg"><img src={location} alt="" /></div>
        </div>
        <div id="platems">
            <img src={p2i1} alt="" />
            <img src={p2i2} alt="" />
            <img src={p2i3} alt="" />
            <img src={p2i4} alt="" />
            <img src={p2i5} alt="" />
            <img src={p2i6} alt="" />
            <img src={p2i7} alt="" />
            <img src={p2i8} alt="" />
            <img src={p2i9} alt="" />
            <img src={p2i10} alt="" />
            <img src={p2i11} alt="" />
            <img src={p2i12} alt="" />
            <img src={p2i13} alt="" />
            <img src={p2i14} alt="" />
            <img src={p2i15} alt="" />
            <img src={p2i16} alt="" />
        </div>
    </div>
  )
}
