// ==========================================================================
// Project:   AddressBook
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals AddressBook SCUDS*/

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
AddressBook = SC.Object.create( SC.StatechartManager,
  /** @scope AddressBook.prototype */ {

  NAMESPACE: 'AddressBook',
  VERSION: '0.1.0',

  // This is your application store.  You will use this store to access all
  // of your model data.  You can also set a data source on this store to
  // connect to a backend server.  The default setup below connects the store
  // to any fixtures you define.
  store: SC.Store.create({
    dataSource: SCUDS.CouchDBDataSource.create({ database: 'addrs_book' })
  }),
  
  // ..........................................................
  //  NESTED STORE (In Place Edit and save|Cancel| Destroy )
  // 
  
  /**
    Helper function used to create a nested store.
    @param {SC.Record} content
    @returns {SC.Object} hash containing the store and the record passed in to this function.
  */
  createNestedStoreFromContent: function(content){
    if (!content) return;
    
    // Create the nested store.
    var store = content.get('store').chain({ 'lockOnRead': NO });
    
    // Recreate the content record from the nested store (in an enclosed run loop).
    SC.RunLoop.begin();
    var recordType = content.constructor;
    var pk = content.get('primaryKey');
    var newContent = store.find(recordType, content.get(pk));
    SC.RunLoop.end();

    // Return the new content record and the store to the caller.
    return { content: newContent, store: store };
  },

  /**
    Helper function to commit a nested store
    @param {SC.ObjectController|SC.ArrayController} controller
    @returns void
  */
  commitStore: function(controller){
    if (!controller || !controller.store) return;
    controller.store.commitChanges(YES) ; // publish changes to root store    
    this.destroyStore(controller) ;
  },
  
  /**
    Helper function for destruction of a nested store.
    @param {SC.ObjectController|SC.ArrayController} controller
    @returns void 
  */
  destroyStore: function(controller){
    if (!controller || !controller.store) return;
    controller.store.destroy() ;       // discard changes
    controller.store = null ;          // forget it
  }
  
}) ;
