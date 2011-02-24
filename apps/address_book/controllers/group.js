// ==========================================================================
// Project:   AddressBook.groupController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals AddressBook */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
AddressBook.groupController = SC.ObjectController.create(
/** @scope AddressBook.groupController.prototype */ {
  
  contentBinding: 'AddressBook.groupsController.selection',
  contentBindingDefault: SC.Binding.oneWay().single(),
  
  _contentDidChange: function(){
    // debugger;
    // var c = this.get('content');
    // if (c) c.refresh();
  }.observes('content')

}) ;
