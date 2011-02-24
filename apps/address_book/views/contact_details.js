// ==========================================================================
// Project:   AddressBook.ContactDetailsView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals AddressBook */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
AddressBook.ContactDetailsView = SC.View.extend( SC.ContentDisplay,
/** @scope AddressBook.ContactDetailsView.prototype */ {
  content: null,
  displayProperties: 'content'.w(),
  contentDisplayProperties: 'firstName lastName addresses'.w(),
  
  render: function(context, firstTime){
    var addrs, comp, c = this.get('content');
    if (c){
      context = context.begin('span').addClass('firstName').text(c.get('firstName')).end();
      context = context.begin('span').addClass('lastName').text(c.get('lastName')).end();
      comp = c.get('company');
      if (comp){ 
        context = context.begin('div').addClass('company').text(comp.get('displayText')).end();
        addrs = comp.get('addresses') || [];
        addrs.forEach( function(i){
          context = context.begin('div').addClass('co_address').text(i.get('displayText')).end();
        });
      }
      addrs = c.get('addresses') || [];
      addrs.forEach( function(i){
        context = context.begin('div').addClass('address').text(i.get('displayText')).end();
      });
    }
  }

});
