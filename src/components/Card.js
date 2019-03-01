import React, { PureComponent } from 'react';
import Play from '../images/play.svg';

class Card extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isClicked: false
        };

        this.openMovie = this.openMovie.bind(this);
    }

    openMovie = () => {
        this.props.toggle(this.props.data.EventCode, this.props.index);
    };

    render() {
        const {EventTitle, EventCode, ShowDate} = this.props.data;

        // gets poster image
        const img = require(`../images/${EventCode}.jpg`);

        let date = ShowDate.split(' ');
        let card_classname = '';

        if (this.props.active === EventCode) {
            card_classname = 'card-wrapper card-active'
        } else {
            card_classname = 'card-wrapper'
        }

        return (
            <div className={card_classname} onClick={this.openMovie}>
                <div className={'card'}>
                    <div>
                        <div>
                            <h4>{date[0]}</h4>
                            <p>{date[1].substring(0,3)}</p>
                        </div>
                    </div>
                    <img src={img} alt={''}/>
                    <img src={Play} alt={'play'} className={'play'}/>
                </div>
                <p>{EventTitle}</p>
            </div>
        )
    }
}

export default Card;