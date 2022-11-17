import React, { Component } from 'react'
import home_svg from '../svg/home.svg'
import menubar from '../svg/menu.svg'
import close from '../svg/close.svg'
import popund from '../svg/popund.svg'
import cancel from '../svg/cancel.svg'

export class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
        isOpen: false,
        isOpen_con: false,
    }
}

toggleModal = () => {
  if (this.state.isOpen) {
      this.setState({
          isOpen: false
      })
  } else {
      this.setState({
          isOpen: true
      })
  }
}

toggleConnect = () => {
  if (this.state.isOpen_con) {
      this.setState({
          isOpen_con: false
      })
  } else {
      this.setState({
          isOpen_con: true
      })
  }
}


  render() {
    return (
      <div>
        <nav id='nav' className='row'>
            <div id='#home_svg' className='col-md-4 col-4'><img src={home_svg} alt="" /></div>
            <div id='nav_links' className='col-md-5'>
                <a href={`/`}>Home</a>
                <a href={`places`}>Place to stay</a>
                <a href="">NFTs</a>
                <a href="">Community</a>
            </div>
            <div id='connect' className='col-md-3'>
                <button onClick={() => this.toggleConnect()}>Connect wallet</button>
            </div>
            <div id="menu_bar" className='col-2'><img onClick={() => this.toggleModal()} src={menubar} alt="" /></div>
            <div id='nav_links_md' className={this.state.isOpen ? 'show' : 'hidden'}>
                <a href={`/`}>Home</a>
                <a href={`places`}>Place to stay</a>
                <a href="">NFTs</a>
                <a href="">Community</a>
                <div id='connect_md'>
                  <button onClick={() => this.toggleConnect()}>Connect wallet</button>
                </div>
                <img onClick={() => this.toggleModal()} src={close} alt="" />
            </div>
        </nav>

        <div id="con_walletdiv" className={this.state.isOpen_con ? 'show_con' : 'hidden_con'}>
          <div>
            <div id='con_wallet'>
                <div id='con_intro'>
                  <span id='con_txt'>Connect Wallet</span>
                  <img onClick={() => this.toggleConnect()} src={cancel} alt="" />
                </div>
                <div id='con_img'><img src={popund} alt="" /></div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Header;
