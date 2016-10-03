var widgets = [{
	id:1,
	name:'Custom widget-1',
	price:'5',
	desc:'widget for alert'
},{
	id:2,
	name:'Custom widget-2',
	price:'5',
	desc:'widget for Form'
},{
	id:3,
	name:'Custom widget-3',
	price:'5',
	desc:'widget for Pagination'
},{
	id:4,
	name:'Custom widget-4',
	price:'5',
	desc:'widget for Bootstrap'
},{
	id:5,
	name:'Custom widget-5',
	price:'5',
	desc:'widget for Custom Validation'
}];

module.exports = function(app){

	/**
	* Show AllWidgets
	*/
	app.get('/', function(req, res) {
		if(widgets.length){
			res.render('./widgets/index',{widgets:widgets});
		}
		else{
			res.render('./widgets/index',{widgets:null});	
		}
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
		var indx = req.params.id - 1
		res.render('./widgets/edit',{widgets:widgets[indx]});
	});

	/**
	* Delete Widget
	*/
	app.del('/widget/:id/delete', function(req, res) {
		var indx = req.params.id - 1
		delete widgets[indx];
		newWidgets = [];
		widgets.forEach(function(widget){
			newWidgets.push(widget);
		})
	    res.render('./widgets/index', { widgets: newWidgets });
	});

	/**
	* Update Widget
	*/
	app.put('/widget/:id/update', function(req, res) {
		var indx = req.params.id - 1;
		widgets[indx] = {
			id:indx,
			name:req.body.name,
			price:req.body.price,
			desc:req.body.desc,
		}
		res.render('./widgets/index',{widgets:widgets})
	});
};	
	