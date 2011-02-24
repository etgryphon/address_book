// ==========================================================================
// Project:   AddressBook - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals AddressBook */

// This page describes the main user interface for your application.  
AddressBook.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'groupLabel groupList groupButtonBar nameLabel nameList contactButtonBar detailsLabel detailsView detailButtonBar'.w(),
    
    groupLabel: SC.LabelView.design({
      classNames: ['big-label'],
      layout: { left: 0, top: 0, minWidth: 259, width: 0.25, height: 44 },
      textAlign: SC.ALIGN_CENTER,
      tagName: "h1", 
      value: "Group"
    }),
    
    groupList: SC.ListView.design({
      classNames: ['master-list'],
      layout: { left: 0, top: 56, minWidth: 259, width: 0.25, bottom: 36 },
      rowHeight: 43,
      rowSpacing: 2,
      canEditContent: YES,
      selectionBinding: 'AddressBook.groupsController.selection',
      contentBinding: 'AddressBook.groupsController',
      contentValueKey: 'name'
    }),
    
    groupButtonBar: SC.View.design({
      layout: { left: 0, bottom: 0, width: 0.25, height: 36 },
      childViews: 'addButton removeButton refreshGroupsButton refreshGroupButton'.w(),
      addButton: SC.ButtonView.design({
        title: '+',
        titleMinWidth: 10,
        layout: { left: 10, top: 5, width: 50, height: 24 },
        target: AddressBook,
        action: 'addGroup'
      }),

      removeButton: SC.ButtonView.design({
        title: '-',
        titleMinWidth: 10,
        layout: { left: 70, top: 5, width: 50, height: 24 },
        target: AddressBook,
        action: 'removeGroup'
      }),
      
      refreshGroupsButton: SC.ButtonView.design({
        title: 'List',
        layout: { left: 130, top: 5, width: 80, height: 24 },
        target: AddressBook,
        action: 'refreshGroups'
      }),
      
      refreshGroupButton: SC.ButtonView.design({
        title: 'Group',
        layout: { left: 220, top: 5, width: 80, height: 24 },
        target: AddressBook,
        action: 'refreshGroup'
      })
    }),
    
    nameLabel: SC.LabelView.design({
      classNames: ['big-label'],
      layout: { left: 0.25, top: 0, minWidth: 259, width: 0.25, height: 44 },
      textAlign: SC.ALIGN_CENTER,
      tagName: "h1", 
      value: "Name"
    }),
    
    nameList: SC.ListView.design({
      classNames: ['master-list'],
      layout: { left: 0.25, top: 56, minWidth: 259, width: 0.25, bottom: 36 },
      rowHeight: 43,
      rowSpacing: 2,
      selectionBinding: 'AddressBook.contactsController.selection',
      contentBinding: 'AddressBook.contactsController',
      contentValueKey: 'displayName'
    }),
    
    contactButtonBar: SC.View.design({
      layout: { left: 0.25, bottom: 0, width: 0.25, height: 36 },
      childViews: 'addButton removeButton'.w(),
      addButton: SC.ButtonView.design({
        title: '+',
        titleMinWidth: 10,
        layout: { left: 10, top: 5, width: 50, height: 24 },
        target: AddressBook,
        action: 'addContact'
      }),

      removeButton: SC.ButtonView.design({
        title: '-',
        titleMinWidth: 10,
        layout: { left: 70, top: 5, width: 50, height: 24 },
        target: AddressBook,
        action: 'removeContact'
      })
    }),
    
    detailsLabel: SC.LabelView.design({
      classNames: ['big-label'],
      layout: { left: 0.5, top: 0, minWidth: 259, width: 0.5, height: 44 },
      textAlign: SC.ALIGN_CENTER,
      tagName: "h1", 
      value: "Details"
    }),
    
    detailsView: AddressBook.ContactDetailsView.design({
      classNames: ['details'],
      layout: { left: 0.5, top: 56, minWidth: 259, width: 0.5, bottom: 36 },
      contentBinding: SC.Binding.from('AddressBook.contactController').oneWay()
    }),
    
    detailButtonBar: SC.View.design({
      layout: { left: 0.5, bottom: 0, right: 5, height: 36 },
      childViews: 'editButton'.w(),
      
      editButton: SC.ButtonView.design({
        title: 'Edit Contact',
        layout: { centerX: 0, top: 5, width: 100, height: 24 },
        target: AddressBook,
        action: 'editContact'
      })
    })
  })
});
