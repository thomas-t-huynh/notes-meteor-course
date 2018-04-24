import expect from 'expect';
import { Meteor } from 'meteor/meteor';

import { validateNewUser } from './users';

if (Meteor.isServer) {
    describe('Users', function() {
        it('should validate user', function() {
            const user = {
                emails: [
                    {
                        address: 'test@test.com',
                    }
                ]
            };
            const res = validateNewUser(user);

            expect(res).toBe(true);
        })

        it('should reject invalid email', function() {
            const user = {
                emails: [
                    {
                        address: 'testtest.com',
                    }
                ]
            };
            expect(() => {
                validateNewUser(user);
            }).toThrow();
        })
    })
}
