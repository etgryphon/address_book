// ==========================================================================
// Project:   AddressBook.Company
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals AddressBook */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
AddressBook.Company = SC.Record.extend(
/** @scope AddressBook.Company.prototype */ {
  
  nestedRecordNamespace: AddressBook,

  primaryKey: 'id',
  type: SC.Record.attr(String, { isRequired: YES, defaultValue: 'Company' }),
  name: SC.Record.attr(String, { defaultValue: 'Company' }),
  addresses: SC.Record.toMany('AddressBook.Address', { isNested: YES }),
  canDelete: SC.Record.attr(Boolean, { isRequired: YES, defaultValue: YES }),
  
  // Computed Properties
  displayText: function(){
    var name = this.get('name');
    return '%@'.fmt(name);
  }.property('name', 'addresses').cacheable()

}) ;
