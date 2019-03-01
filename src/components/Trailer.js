import React, { Component, Fragment } from 'react';
import { Action, Functions } from './Functions';
import Calender from '../images/calender.svg';
import ThumbsUp from '../images/thumbs_up.svg';
import ThumbsUpGreen from '../images/thumbs_up_green.svg';
import ThumbsDown from '../images/thumbs_down.svg';
import Maybe from '../images/maybe.svg';


class Trailer extends Component {
    render() {
        let { EventCode, EventTitle, EventLanguage, TrailerURL, EventGenre, ShowDate } = this.props.data;

        // replacing watch part of the trailer url with embed for youtube video to play in iframe
        TrailerURL = TrailerURL.replace('watch?v=', 'embed/');

        // array of genre's
        EventGenre = EventGenre.split('|');

        // getting date and month
        ShowDate = ShowDate.substring(0, ShowDate.length-5).replace(',', '');

        // getting year
        let show_year = ShowDate.substr(ShowDate.length-4);

        // getting the poster of the movie for blurry background
        const img = require(`../images/${EventCode}.jpg`);
        let bkg_style = {
            background: `url(${img})  center center / cover no-repeat`,
            filter: 'blur(\'24px\')'
        };

        // stats which would be retrieve from props
        const stats = [
            {id: 'stat_1', image: ThumbsUp, alt: 'thumbsup', top: '100%', bottom: '92,222 votes'},
            {id: 'stat_2', image: Calender, alt: 'calender', top: ShowDate, bottom: show_year}
        ];

        // actions which will be bound to a function
        const actions = [
            {id: 'act_1', image: ThumbsUpGreen, alt: 'thumbsup', tag: 'will watch', stat: '(92879)'},
            {id: 'act_2', image: Maybe, alt: 'maybe', tag: 'maybe', stat: '(0)'},
            {id: 'act_3', image: ThumbsDown, alt: 'thumbsdown', tag: 'won\'t watch', stat: '(108)'}
        ];

        return(
            <Fragment>
                <iframe src={TrailerURL} title={EventTitle}>
                </iframe>
                <div className={'trailer-info'}>
                    <h4>{EventTitle}</h4>
                    <p className={'upper'}>{EventLanguage}</p>
                    <div className={'genre'}>
                        {EventGenre.map((item) => <p className={'upper'} key={item}>{item}</p>)}
                    </div>
                    <div className={'trailer-stats'}>
                        {stats.map((item) => <Functions key={item.id} data={item}/>)}
                    </div>
                    <p>Something about movie goes here. lorem ipsum for now.</p>
                    <a><p>Read more</p></a>
                    <div className={'actions'}>
                        {actions.map((item) => <Action key={item.id} data={item}/>)}
                    </div>
                </div>
                <div className={'background'} style={bkg_style}></div>
            </Fragment>
        )
    }
}

export default Trailer;