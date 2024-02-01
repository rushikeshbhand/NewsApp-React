import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title,readMore, description, imageUrl, url} = this.props;
        return (
            <div>
                <div className="card" style={{width: '18rem'}}>
                    <img src={imageUrl} className="card-img-top" alt="error to load img" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={url} className="btn btn-primary">{readMore}</a>
                    </div>
                </div>
            </div>
        )
    }
}
