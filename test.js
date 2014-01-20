


// EACH
_.each(function(){
	if(i%3===0){
		console.log(i);
	}
});

// BIND
var func=function(){console.log(this)};
var obj={a:2};
var f=_.bind(func,obj);
//f();

// THROTTLE
var b=function(){
	console.log(this);
}
//b();b();
var thro=_.throttle(b,500);
//thro();thro(); // attend 500 ms avant de rappeler la fonction une deuxième fois;

// DEBOUNCE 

var f1 = _.debounce (f,0);


// BACKBONNNEEEEEE

Backbone 
var user = new Backbone.Model({
	id:0,
	name:'thomas',
	email:'thomas@gmail.com'
}); // définit l'user
user.attributes; // renvoie l'entrée user

// partie client
user.get('name');// récupère le nom
user.set('name','toto'); // redéfinit l'user

// partie serveur
//user.save(); // update la bdd en spécifiant une URL

// extend
_.extend({name:'moe'},
	{
		age:50,
	}
);

var MyModel= Backbone.Model.extend({
	over_18:function(){
		return this.get('age')>18;
	}
});

var myModel= new MyModel();
myModel.set({
	name:'toto',
	age:26,
});
myModel.over_18();

console.log('toto');


// Exo
var Task = Backbone.Model.extend({
	initialize:function(){
		this.on('change:completed',this.onCompleteChange());
	},
	onCompleteChange:function(){
		console.log('modification done on '+this.get('name'));
	},
	defaults:{
		name:'first try',
		completed:false
	},	
	finished:function(){
		console.log(this.get('completed')) ;
	},
	validate:function(attributes,options){
		//console.log(attributes);
		if(typeof(attributes.completed)!=='boolean'){
			console.log('do not set bad values!!!!');
		}
	},
	localStorage: new Backbone.LocalStorage('tasks-backbone'),
});

var task1 = new Task();
task1.attributes;
task1.finished();
task1.set({'completed':true,validate:true});
task1.finished();
task1.save({name:'toto'});
task1.fetch();
console.log(task1.attributes);




var TaskCollection= Backbone.Collection.extend({
	model:Task, // on définit le model à instancier
	sort:function(){
		var sorted= this.sortBy(function(model){
			return model.get('name')
;		});
		taskCollection.reset(sorted) ;
	},
	completed:function(){
		return this.filter(function(task){
			return task.get('completed'); // renvoie les entrées avec true
		});
	},
	remaining:function(){
		return this.without.apply(this,this.completed()); // renvoie toutes les entrées du tableau sans celles taggées a true
	}
});
var taskCollection=new TaskCollection(); // instanciation de la collection
console.log(taskCollection);
taskCollection.add([
	{id:0, name:'olivier', completed:true}, // création de l'instance de Task
	{id:1, name:'adrien', completed:false},
	{id:2, name:'thomas', completed:true}
]);
console.log('Collection size : '+ taskCollection.length);

console.log(taskCollection.get(1).attributes);
/*taskCollection.reset([ // reset de la collection et repush le nouveau tableau
	{id:0,name:'go to Gabon',completed:false}
]);
console.log('Collection size : '+ taskCollection.length);*/

var mycolsorted= taskCollection.sortBy(function(model){
	return model.get('name').toLowerCase();
});
console.log(mycolsorted);

//OUTPUT
mycolsorted.forEach(function(model){
	console.log(model.get('name'));
});


var obj={
	do_sth: function(){
		console.log('caca');
	}
}
_.extend(obj,Backbone.Events);
obj.on('salut',obj.do_sth);