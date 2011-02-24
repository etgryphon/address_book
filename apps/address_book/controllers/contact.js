// ==========================================================================
// Project:   AddressBook.contactController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals AddressBook */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
AddressBook.contactController = SC.ObjectController.create(
/** @scope AddressBook.contactController.prototype */ {

  contentBinding: 'AddressBook.contactsController.selection',
  contentBindingDefault: SC.Binding.oneWay().single()

}) ;
