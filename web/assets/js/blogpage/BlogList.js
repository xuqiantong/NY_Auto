/**
 * Created by jeanliu on 3/16/17.
 */

import React from 'react';
import './BlogList.css';

var BLOGS = [
    { id: 0, title: "Celebrate Mother's day with NY Auto Depot",
        link: '...',
        imgpath: "./static/bundles/images/blogPic1.png",
        class: 'newArrival'
    },
    { id: 1, title: 'A new Mercedes just arrived',
        link: '...',
        imgpath: "./static/bundles/images/blogPic2.png",
        class: 'newArrival'
    },
    { id: 2, title: 'Price went down by $1000 for this BMW',
        link: '...',
        imgpath: "./static/bundles/images/blogPic2.png",
        class: 'priceReduced'
    }
];

function Image(props) {
    return (
        <div className={props.class}>
            <img src={props.path} alt="./images/carAlt.png" width="100%"/>
        </div>
    );
}

function Blog(props) {
    const blg = props.blog;
    return (
        <div className="blog">
            <div className="blog-name">
                {blg.title}
            </div>
            <Image className="blog-img" path={blg.imgpath} class={blg.class}/>
        </div>
    );
}

function LoadMore(props) {
    return (
        <div className="loadmore">
            Load More
        </div>
    );
}

export default class BlogList extends React.Component {
    render() {
        const dispblogs = BLOGS.map(
            (blog) => <div key={blog.id} className="col-lg-6"> <Blog blog={blog} /> </div>
        );

        return(
            <div className="blog-display col-lg-12 col-md-12">
                <div className="blog-list">
                    {dispblogs}
                </div>
                <LoadMore />
            </div>
        );
    }
}
