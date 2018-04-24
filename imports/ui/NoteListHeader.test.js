import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import { NoteListHeader } from './NoteListHeader';

if (Meteor.isClient) {
    describe('NoteListHeader', function() {
        it('should call handleLogout on click', function() {
            const spy = expect.createSpy();
            const wrapper = mount( <NoteListHeader title="title" meteorCall={spy} />);

            wrapper.find('button').simulate('click');

            expect(spy).toHaveBeenCalledWith('notes.insert');
        })

    })
}