// ==========================================================================
// Project:   AddressBook.contactsController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals AddressBook */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
AddressBook.contactsController = SC.ArrayController.create(
/** @scope AddressBook.contactsController.prototype */ {

  contentBinding: 'AddressBook.groupController.contacts',
  contentBindingDefault: SC.Binding.oneWay()

}) ;
