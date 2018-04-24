import React from 'react';
import PrivateHeader from './PrivateHeader';
import NoteList from './NoteList';


export default Dashboard = () => (
    <div>
        <PrivateHeader title="Meteor plate" />
        <div className="page-content">
            <NoteList />
        </div>
    </div>
);