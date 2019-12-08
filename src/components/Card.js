import React from 'react';
import Popup from "../Popup";
import AnchorLink from "react-anchor-link-smooth-scroll";

class Card extends React.Component {

    state = {
        displayPopup: false
    };

    renderPopup = () => {
        return (
            <div>
                <Popup onClick={(event) => {
                    event.preventDefault();
                    this.setState({displayPopup: false})
                }}/>
            </div>
        );
    };

    renderDetails = () => {
        const newArr = [];

        this.props.details.forEach(detail => newArr.push(<li>{detail}</li>));

        return (newArr);
    };

    renderCard = () => {
        return (
            <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__picture" style={this.props.pic}/>

                    <h4 className="card__heading">
                    <span className="card__heading--span" style={this.props.back}>
                        {this.props.title}
                    </span>
                    </h4>

                    <div className="card__details">
                        <ul>
                            {this.renderDetails()}
                        </ul>
                    </div>
                </div>
                <div className="card__side card__side--back" style={this.props.back}>
                    <div className="card__cta">
                        <div className="card__price-box">
                            <p className="card__price-only">Only</p>
                            <p className="card__price-value">{this.props.price}</p>
                        </div>
                        <button onClick={() => this.setState({displayPopup: true})} style={{marginTop: '1rem'}}
                           className='card__btn btn btn--white'>Buy it now! </button>

                    </div>
                </div>
            </div>
        );
    };

    render() {
        if (this.state.displayPopup){
            return [this.renderPopup(), this.renderCard()];
        }

        return this.renderCard();
    }

}

export default Card;