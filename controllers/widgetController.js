var widgets = [{
	id:1,
	name:'Custom widget',
	price:'5',
	desc:'widget for alert'
}];

module.exports = function(app){
	/**
	* Show AllWidgets
	*/
	app.get('/', function(req, res) {
		res.render('./widgets/index',{widgets:widgets});
	});

	/**
	* Show Form for Create a New Widget
	*/
	app.get('/create', function(req, res) {
		res.render('./widgets/create')
	});

	/**
	* Add New Widget
	*/
	app.post('/add', function(req, res) {
		var indx;
		if(widgets.length==1){
			indx = widgets.length;
		}else{
			indx = widgets.length - 1;
		}
		widgets[indx] = {
			id:indx,
			name:req.body.name,
			price:req.body.price,
			desc:req.body.desc,
		}
		res.render('./widgets/index',{widgets:widgets})
	});

	/**
	* Edit Widget
	*/
	app.post('/widget/:id/edit', function(req, res) {
		res.render('./widgets/edit')
	});

	/**
	* Delete Widget
	* inProgress
	*/
	app.del('/widget/:id/delete', function(req, res) {
		if(req.params.id==1){
			delete widgets[0];
		}else{
			delete widgets[req.params.id];
		}
		res.render('./widgets/index',{widgets:widgets})
	});

	/**
	* Update Widget
	*/
	app.put('/widget/:id/update', function(req, res) {
		res.render('./widgets/update')
	});
};	
	