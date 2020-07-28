import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class HomePage extends React.Component {
    

    render() {
        const { user, users } = this.props;
        return (
            <div>
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in </p>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const connectedHomePage = connect(mapState)(HomePage);
export { connectedHomePage as HomePage };