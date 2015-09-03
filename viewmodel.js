// Hook in to constellation UI

var Constellation = Package["constellation:console"].API;
    
Constellation.addTab({
  name: 'Viewmodel',
  headerContentTemplate: 'Constellation_viewmodel_header',
  menuContentTemplate: 'Constellation_viewmodel_menu',
  mainContentTemplate: 'Constellation_viewmodel_main'
});

Template.Constellation_viewmodel_header.helpers({
  
});

Template.Constellation_viewmodel_main.helpers({
  
});

Template.Constellation_viewmodel_menu.helpers({
  
});

Template.Constellation_viewmodel_main.onRendered(function () {
  this.$('.jquery-tree').jstree({
    'core' : {
	  'data' : [
	  'Simple root node',
		{
		  'id' : 'node_2',
		  'text' : 'Root node with options',
		  'state' : { 'opened' : true, 'selected' : true },
		  'children' : [ { 'text' : 'Child 1' }, 'Child 2']
		 }
	  ]
	}
  });
});