import React, { Component } from 'react';

class Comments extends Component {
    constructor() {
        super()
            this.state = {
                lectureComments : ['hello',]
            }
    }
    render() {
        return(
            <div>
                Comments
                {this.state.lectureComments}
            </div>
        )
    }
}

export default Comments;