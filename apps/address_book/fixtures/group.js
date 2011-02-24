// ==========================================================================
// Project:   AddressBook.Group Fixtures
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals AddressBook */

sc_require('models/group');

AddressBook.Group.FIXTURES = [

  { guid: 1,
    type: 'Group',
    name: "Group 1",
    contacts: [
      {
        guid: 50,
        type: 'Contact',
        firstName: 'Bob',
        lastName: 'Jones',
        company: {
          guid: 100,
          type: 'Company',
          name: 'Hummer Winblad'
        },
        addresses: [
          {
            guid: 150,
            type: 'Address',
            street1: 'blah',
            street2: 'blah 2',
            city: 'Somewhere',
            state: 'NY',
            zipcode: '123456-1234' 
          },
          {
            guid: 151,
            type: 'Address',
            street1: '123 Main St',
            city: 'Upperbomb',
            state: 'AL',
            zipcode: '123456-1234' 
          }
        ]
      }
    ],
    canDelete: YES
  },
  
  { guid: 2,
    name: "Group 2",
    contacts: [
      {
        guid: 51,
        type: 'Contact',
        firstName: 'Ann',
        lastName: 'Thomas',
        company: {
          guid: 101,
          type: 'Company',
          name: 'Eloqua'
        },
        addresses: [
          {
            guid: 152,
            type: 'Address',
            street1: 'blah',
            street2: 'blah 2',
            city: 'Somewhere',
            state: 'NY',
            zipcode: '123456-1234' 
          }
        ]
      }
    ],
    canDelete: YES
  },
  
  { guid: 3,
    name: "Group 3",
    canDelete: YES
  },
  
  { guid: 4,
    name: "Group 4",
    canDelete: YES
  },
  
  { guid: 5,
    name: "Group 5",
    canDelete: YES
  }

];
