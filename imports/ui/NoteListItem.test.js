import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { Meteor } from 'meteor/meteor';

import NoteListItem from './NoteListItem';

if (Meteor.isClient) {
    describe('NoteListItem', function() {
        it('should render title and time stamp', function() {
            const title = 'Test title';
            const updatedAt = 1523925639903;
            const wrapper = mount( <NoteListItem note={{ title, updatedAt }}/>);

            expect(wrapper.find('h5').text()).toBe(title);
            expect(wrapper.find('p').text()).toBe('4/16/18');
        });

        it('should set default title if no title set', function() {
            const title = '';
            const updatedAt = 1523925639903;
            const wrapper = mount( <NoteListItem note={{ title, updatedAt }}/>);    
            
            expect(wrapper.find('h5').text()).toBe('Untitled note');
        })
    })
}