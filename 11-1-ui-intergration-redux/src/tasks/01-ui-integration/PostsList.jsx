import React, { Component } from "react";

import store from "./store";

export default class PostsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            authors: [],
        };
    }

    componentDidMount() {
        const state = store.getState();
        this.setState({ posts: state.posts, authors: state.authors });
        this.unsubscribe = store.subscribe(this.onStoreUpdated);
    }

    componentWillUnmount() {
        this.unsubscribe?.();
    }

    onStoreUpdated = () => {
        const state = store.getState();
        this.setState({ posts: state.posts, authors: state.authors });
    };

    render() {
        const { posts, authors } = this.state;

        const renderedPosts = posts.map(post => {
            const author = authors.find(author => author.authorId === post.authorId) || { name: "Unknown" };
            const { name } = author;

            return <li key={post.id}>{post.title}, by {name}</li>;
        });

        return (
            <div>
                <h4>Posts</h4>
                <ul>
                    {renderedPosts}
                </ul>
            </div>
        );
    }
}