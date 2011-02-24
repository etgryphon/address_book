// ==========================================================================
// Project:   AddressBook.Address
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals AddressBook */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
AddressBook.Address = SC.Record.extend(
/** @scope AddressBook.Address.prototype */ {
  
  primaryKey: 'id',
  type: SC.Record.attr(String, { isRequired: YES, defaultValue: 'Address' }),
  street1: SC.Record.attr(String, { defaultValue: 'Street 1' }),
  street2: SC.Record.attr(String, { defaultValue: 'Street 2' }),
  city: SC.Record.attr(String, { defaultValue: 'City' }),
  state: SC.Record.attr(String, { defaultValue: 'State' }),
  zipcode: SC.Record.attr(String, { defaultValue: '123456-3456' }),
  country: SC.Record.attr(String, { defaultValue: 'Country' }),
  
  // Computed Properties
  displayText: function(){
    var s1 = this.get('street1'),
        s2 = this.get('street2'),
        cy = this.get('city'),
        st = this.get('state'),
        zp = this.get('zipcode'),
        cn = this.get('country');
        
    return '%@ %@, %@, %@ %@ %@'.fmt(s1, s2, cy, st, zp, cn);
  }.property('street1', 'street2', 'city', 'state', 'zipcode', 'country').cacheable()

}) ;
