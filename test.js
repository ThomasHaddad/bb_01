


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
	}
});

var task1 = new Task();
task1.attributes;
task1.finished();
task1.set({'completed':true});
task1.finished();
