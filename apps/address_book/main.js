// ==========================================================================
// Project:   AddressBook
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals AddressBook */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
AddressBook.main = function main() {
  AddressBook.initStatechart();
  AddressBook.sendEvent('callForData');
} ;

function main() { AddressBook.main(); }
