import React from 'react';
import { connect } from 'react-redux';
import { setDelCircle } from '../.././TodoActions';

const mapStateToProps = ({ todos, delCircle, textHeaderBtn }) => ({ ...todos, ...delCircle, ...textHeaderBtn });

const mapDispatchToProps = { setDelCircle };

const Header = ({  textHeaderBtn, setDelCircle }) => {
    return (
        <header className="header">
            <span className="header__data">Сегодня</span>
            <div className="header__btn" onClick={() => setDelCircle()}>{ textHeaderBtn }</div>
        </header>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
