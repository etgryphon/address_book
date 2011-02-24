# ===========================================================================
# Project:   AddressBook
# Copyright: ©2010 My Company, Inc.
# ===========================================================================

# Add initial buildfile information here
config :all, :required => :sproutcore

# CORE FRAMEWORKS
config :scuds, :required => [:sproutcore, :'scuds/utils', :'scuds/couch_db']

# SPECIAL FRAMEWORKS AND THEMES
# These do not require any of the built-in SproutCore frameworks
%w(testing debug standard_theme empty_theme).each do |target_name|
  config target_name, 
    :required => [], :test_required => [], :debug_required => []
end

# CONFIGURE THEMES
config :standard_theme, 
  :theme_name => 'standard-theme',
  :test_required  => ['sproutcore/testing'],
  :debug_required => ['sproutcore/debug']

# This configuration section will be applied to all bundles used by your
# application, even bundles that come from other gems.
config :address_book do |c|
  c[:required] = [:sproutcore, :'sproutcore/statechart', :scuds]
  # c[:theme] = :standard_theme
end

#-----------------------------------------------------------------------------
# DEVELOPMENT PROXIES
#-----------------------------------------------------------------------------
proxy '/addrs_book/', :to => '127.0.0.1:5984'
proxy '/addrs_group/', :to => '127.0.0.1:5984'
