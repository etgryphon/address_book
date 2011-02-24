// ==========================================================================
// Project:   AddressBook.Group
// Copyright: ©2010 Evin Grano
// ==========================================================================
/*globals AddressBook */

/** @class

  This is the Group Model for groups of people

  @extends SC.Record
  @version 0.1
*/
AddressBook.Group = SC.Record.extend(
/** @scope AddressBook.Group.prototype */ {
  
  nestedRecordNamespace: AddressBook,
  primaryKey: 'id',
  
  type: SC.Record.attr(String, { isRequired: YES, defaultValue: 'Group' }),
  name: SC.Record.attr(String, { isRequired: YES, defaultValue: 'Group Name' }),
  contacts: SC.Record.toMany('AddressBook.Contact', { isNested: YES }),
  canDelete: SC.Record.attr(Boolean, { isRequired: YES, defaultValue: YES }),
  
  // Datas source stuff
  // designDocument: 'group'
  designDocument: 'data',
  recordDatabase: 'addrs_group'

}) ;
