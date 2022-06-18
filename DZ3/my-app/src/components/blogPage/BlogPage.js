import React from "react";

class BlogPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.title}
            </div>
        )
    }
}




export default BlogPage;