import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewPost } from "./actions";

export class NewPostForm extends Component {
    state = {
        title: "",
        selectedAuthor: null,
    };


    onSelectedAuthorChanged = (e) => {
        const { value } = e.target;
        this.setState({ selectedAuthor: value || null });
    };

    onPostTitleChanged = (e) => {
        const { value } = e.target;
        this.setState({ title: value });
    };

    onAddNewPostClicked = () => {
        const { title, selectedAuthor } = this.state;
        const { addNewPost } = this.props;

        if (selectedAuthor && title.trim()) {
            addNewPost(selectedAuthor, title);
            this.setState({ title: "", selectedAuthor: null });
        }
    };

    render() {
        const { title = "", selectedAuthor = null } = this.state;
        const { authors = [] } = this.props;

        const authorsOptions = authors.map((author) => (
            <option key={author.authorId} value={author.authorId}>
                {author.name}
            </option>
        ));
        // Add an empty selection option
        authorsOptions.unshift(<option key="empty" value=""/>);

        return (
            <div>
                <h4>New Post</h4>
                <input type="text" onChange={this.onPostTitleChanged} value={title}/>
                <div>
                    Author:{" "}
                    <select
                        value={selectedAuthor || ""}
                        onChange={this.onSelectedAuthorChanged}
                    >
                        {authorsOptions}
                    </select>
                </div>
                <div>
                    <button onClick={this.onAddNewPostClicked}>Add New Post</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    authors: state.authors,
});

const mapDispatchToProps = {
    addNewPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPostForm);
