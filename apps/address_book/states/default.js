// ==========================================================================
// Project:   AddressBook
// Copyright: ©2010 Evin Grano
// ==========================================================================
/*globals AddressBook SCUDS*/
/** @mixin
  @extends AddressBook
  @author Evin Grano
  @version 0.1
  @since 0.1
*/
AddressBook.mixin( /** @scope AddressBook */{
  
  rootState: SC.State.design({    
    substatesAreConcurrent: YES,
    mainStates: SC.State.plugin('AddressBook.mainStates'),
    modalStates: SC.State.plugin('AddressBook.modalStates')  
  }),
  
  mainStates: SC.State.design({
    
    loading: SC.State.design({
      enterState: function(){
        console.log('address book is loading');
        var lp = AddressBook.getPath('extrasPage.loadingPane');
        lp.append();
        this._lp = lp;
      },
    
      exitState: function(){
        this._lp.remove();
      },
    
      // events
      callForData: function(){
        var store = AddressBook.get('store');
        var query = SC.Query.create({
          store: store,
          recordType: AddressBook.Group,
          orderBy: "name DESC",
          successfulCallback: function(){
            AddressBook.sendEvent('dataLoaded');
          }
        });
        AddressBook.groupsController.set('content', store.find(query) );
      },
    
      dataLoaded: function(){
        this.gotoState('ready');
      }
    }),
  
    ready: SC.State.design({
    
      enterState: function(){
        // Step 1: Instantiate Your Views
        // The default code here will make the mainPane for your application visible
        // on screen.  If you app gets any level of complexity, you will probably 
        // create multiple pages and panes.  
        AddressBook.getPath('mainPage.mainPane').append() ;
      },
      exitState: function(){},
    
      refreshGroups: function(){
        var c = AddressBook.groupsController.get('content');
        if (c) c.refresh();
      },
    
      refreshGroup: function(){
        var c = AddressBook.groupController.get('content');
        if (c) c.refresh();
      },
    
      // Events
      addGroup: function(){
        var group, now, hash, store = AddressBook.get('store'), rec;
        if (store) {
          hash = { name: 'New Group', contacts: [], canDelete: YES};
          now = hash.name + SC.DateTime.create().get('milliseconds');
          hash.id = SCUDS.Sha1.sha1Hash(now);
          rec = store.createRecord(AddressBook.Group, hash);
          rec.commitRecord();
        }
      }
    })
  })
  
});