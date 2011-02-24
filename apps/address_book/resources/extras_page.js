// SproutCore ViewBuilder Design Format v1.0
// WARNING: This file is automatically generated.  DO NOT EDIT.  Changes you
// make to this file will be lost.
/*globals AddressBook*/
AddressBook.extrasPage = SC.Page.design({
  loadingPane: SC.Pane.design({
    childViews: 'label1'.w(),
    
    label1: SC.LabelView.design({
      layout: { centerX: 0, centerY: 0, width: 200, height: 100},
      value: "Loading..."
    })
  }),
  
  editContactModal: SC.PanelPane.design({
    contentView: SC.View.design({
      layout: { centerX: 0, centerY: 0, width: 750, height: 450},
      childViews: 'label1 tf1 tf2 tf3 v1 '.w(),
      
      label1: SC.LabelView.design({
        layout: {top: 0,  left: 0, right: 0, height: 50},
        value: "Edit Contact"
      }), 
      
      tf1: SC.TextFieldView.design({
        layout: {top: 50, left: 15, right: 15, height: 22},
        hint: "first name",
        valueBinding: SC.Binding.from('AddressBook.editContactController.firstName')
      }), 
      
      tf2: SC.TextFieldView.design({
        layout: {top: 82, left: 15, right: 15, height: 22},
        hint: "last name",
        valueBinding: SC.Binding.from('AddressBook.editContactController.lastName')
      }), 
      
      tf3: SC.TextFieldView.design({
        layout: {top: 114, left: 15, right: 15, height: 22},
        hint: "last name",
        valueBinding: SC.Binding.from('AddressBook.editContactCompanyController.name')
      }), 
      
      v1: SC.View.design({
        layout: {top: 425, left: 0, width: 750, height: 25},
        childViews: 'b1 b2'.w(),
        
        b1: SC.ButtonView.design({
          layout: { right: 100, top: 0, width: 80, height: 24},
          target: 'AddressBook',
          action: 'cancel',
          title: "Cancel"
        }), 
        
        b2: SC.ButtonView.design({
          layout: { right: 10, top: 0, width: 80, height: 24},
          target: 'AddressBook',
          action: 'save',
          title: "Save"
        })
      })
    })
  }),
  pageName: "AddressBook.extrasPage"
});
