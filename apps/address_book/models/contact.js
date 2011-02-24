// ==========================================================================
// Project:   AddressBook.Contact
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals AddressBook */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
AddressBook.Contact = SC.Record.extend(
/** @scope AddressBook.Contact.prototype */ {
  
  primaryKey: 'id',
  type: SC.Record.attr(String, { isRequired: YES, defaultValue: 'Contact' }),
  firstName: SC.Record.attr(String, { defaultValue: 'First' }),
  lastName: SC.Record.attr(String, { defaultValue: 'Last' }),
  company: SC.Record.toOne('AddressBook.Company', { isNested: YES }),
  addresses: SC.Record.toMany('AddressBook.Address', { isNested: YES }),
  canDelete: SC.Record.attr(Boolean, { isRequired: YES, defaultValue: YES }),
  
  // Computed Properties
  displayName: function(){
    var fn = this.get('firstName'), 
        ln = this.get('lastName'), 
        dn, cn;
    if (fn || ln){
      dn = "%@, %@".fmt((ln || ''), (fn || ''));
    }
    else {
      dn = 'barf';
    }
    
    return dn;
    
  }.property('firstName', 'lastName', 'company').cacheable()

}) ;
