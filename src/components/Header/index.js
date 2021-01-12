import React from 'react';

const Header = (props) => {
    const [text, setText] = React.useState('Править');
    const [change, setChange] = React.useState(true);

    function changeText () {
        if (change && props.list.length > 0) {
            setChange(false);
            setText('Отменить');
            props.getDelTask(true);
        } else {
            setChange(true);
            setText('Править');
            props.getDelTask(false);
        }
    }

    return (
        <header className="header">
            <span className="header__data">Сегодня</span>
            <div className="header__btn" onClick={ changeText }>{ text }</div>
        </header>
    )
}

export default Header
