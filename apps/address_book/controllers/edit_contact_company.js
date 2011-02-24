// ==========================================================================
// Project:   AddressBook.editContactCompanyController
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals AddressBook */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
AddressBook.editContactCompanyController = SC.ObjectController.create(
/** @scope AddressBook.editContactCompanyController.prototype */ {

  contentBinding: 'AddressBook.editContactController.company',
  contentBindingDefault: SC.Binding.oneWay()

}) ;
