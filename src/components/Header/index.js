import React from 'react';
import { connect } from 'react-redux';
import { setDelCircle } from '../.././TodoActions';

const mapStateToProps = ({ todos }) => ({ todos});
const mapDispatchToProps = { setDelCircle };

const Header = ({  todos, setDelCircle }) => {
    return (
        <header className="header">
            <span className="header__data">Сегодня</span>
            <div className="header__btn"
                onClick={todos.blockBtn ? null : () => setDelCircle()}>
                { todos.delCircle ? 'Отменить' : 'Править' }
            </div>
        </header>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
