// ==========================================================================
// Project:   AddressBook
// Copyright: ©2010 Evin Grano
// ==========================================================================
/*globals AddressBook */
/*jslint evil: true */

/** @mixin
  @extends AddressBook
  @author Evin Grano
  @version 0.1
  @since 0.1
*/
AddressBook.mixin( /** @scope Greenhouse */{
  
  modalStates: SC.State.design({
    modalReady: SC.State.design({
         
      editContact: function(){
        var c = AddressBook.contactController.get('content');
        var nested = AddressBook.createNestedStoreFromContent(c);
        AddressBook.editContactController.set('content', nested.content);
        AddressBook.editContactController.set('store', nested.store);
        this.gotoState('editContactModal');
      }
    
    }),
  
    editContactModal: SC.State.design({
    
      enterState: function(){
        var em = AddressBook.getPath('extrasPage.editContactModal');
        em.append();
        this._em = em;
      },
    
      exitState: function(){
        this._em.remove();
      },
    
      save: function(){
        var c = AddressBook.editContactController;
        AddressBook.commitStore(c);
        if (c) c.set('content', null);
        this.gotoState('modalReady');
      },
    
      cancel: function(){
        var c = AddressBook.editContactController;
        AddressBook.destroyStore(c);
        if (c) c.set('content', null);
        this.gotoState('modalReady');
      }
    })
  })
});
