import React, { Component } from 'react'
import { MdMenu, MdSearch } from 'react-icons/md'
import { HeaderStyle } from './styleHead'


class Header extends Component {

    constructor(props) {
        super(props);
            this.state = { isHidden: true};
            this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({isHidden: !this.state.isHidden});
    }

    render() {
        return (
            <>

                <div className="header-div">
                    <button onClick={this.handleClick} className="menu_btn">
                        <MdMenu style={{ color: "#000040" }} size={34} />
                    </button>
                    <input type="text" placeholder="Pesquisar!" />
                    <button className="search-ico"><MdSearch size={32} /></button>
                </div>

            </>
        )
    }

}

export default Header;