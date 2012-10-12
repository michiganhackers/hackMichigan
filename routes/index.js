
/*
 * GET home page.
 */


var verbs = ['code','hack','learn','build','think','test'];
var eventName = 'MHACKS:Impact'
exports.index = function(req, res){
	i = Math.floor(Math.random()*verbs.length);
	// eventually this might be cooler to have change after page load?
	// easy switch
  res.render('index', { title: eventName, 
  	info: "Hack Michigan is Michigan Hackers second hackathon and aims to be the biggest student run hackathon ever held at the University of Michigan. The theme of this hackathon is “impact”. As such, we want each and every team to build something that has an impact on real people. Hack Michigan is scheduled for November 3rd - 4th, and will be held in North Quad. The event will be 28 hours long with 24 hours devoted to hacking." ,
  	verb: verbs[i]
  	});
};

exports.about = function(req, res){
	i = Math.floor(Math.random()*verbs.length);
	//need page for this
  res.render('about', { title: eventName,
  	info: "" ,
  	verb: verbs[i]
  });
};

exports.prizes = function(req, res){
 //need page for this
  res.render('prizes', { title: eventName});
};

exports.schedule = function(req, res){
 	//need page for this
  res.render('schedule', { title: eventName});
};

exports.sponsors = function(req, res){
 //need page for this
  res.render('sponsors', { title: eventName});
};

exports.contact = function(req, res){
 //need page for this
  res.render('contact', { title: eventName});
};




