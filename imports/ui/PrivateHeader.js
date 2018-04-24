import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { createContainer } from 'meteor/react-meteor-data';

export const PrivateHeader = (props) => {
    // const onLogout = () => {
    //     Accounts.logout();
    // }

    return (
        <div className="header__bg">
            <div className="header">
                <h1 className="header__h1">{props.title}</h1>
                <button className="button button--logout" onClick={() => {
                    props.handleLogout()
                }}>Logout</button>
            </div>
        </div>
    );
}
 

PrivateHeader.propTypes = {
    title: React.PropTypes.string.isRequired,
    handleLogout: React.PropTypes.func.isRequired
}

export default createContainer(() => {
    return {
        handleLogout: () => Accounts.logout()
    }
}, PrivateHeader);

// export default PrivateHeader;