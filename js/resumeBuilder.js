// Datas I'm going to have multiple so the helper s
var bio = {
  name: "Matthew McKenna",
  role: "Digital Cartographer",
  pic:"images/mee.jpg",
  welcome:"Get in touch if you have any questions my resume doesn't answer!",
  skills:["JavaScript", "HTML", "GIS", "Networks", "Cartography"],
  contacts:{
    twitter:"mpmckenna8",
    mobile:"Please contact by e-mail to obtain mobile #",
    email:"mpmckenna8@me.com",
    github:"mpmckenna8",
    location:"San Francisco"
  },
}



// work data basically has a jobs array
var work = {jobs:[]
}

worknow = {};
worknow.position = "Volunteer Supervisor";

worknow.employer = "San Francisco Bicycle Coalition";

worknow.location = "San Francisco";

worknow.years = '3.5 years';

worknow.description = "Oversee field operations for the bicycle valet service while overseeing volunteers and coordinating operations at a wide variety of sites.";

console.table(worknow)


work.jobs.push(worknow);
var wornow = {};
wornow.position = "Barista";
wornow.employer = "It's a Grind";
wornow.location = "San Francisco";
wornow.years = "5 years";
wornow.description = "Provide customer service in a fast paced San Francisco coffee shop during the launch of a number of innovative coffee products."
work.jobs.push(wornow);

console.log('now work is', work)

function job(){
  this.position;
  this.employer;
  this.location;
  this.years;
  this.description;
  this.addtowork = function(){
    console.log(this);
    work.jobs.push(this)
  }
}

var cof = new job();

cof.position = "Docent";
cof.employer = "Conservatory of Flowers";
cof.location = "San Francisco";
cof.years = "4 years";
cof.description = "Am a Jungle Guide for 2nd to 5th grade field tripts to the " +
"Conservatory of Flowers, which is a historical green house in Golden Gate Park.";

cof.addtowork();

console.log(cof)


var education = {"schools":[],
            "onlineCourses":[{
              "title":"JavaScript Basics",
              "school":"Udacity",
              "url":"https://www.udacity.com/course/ud804",
              "dates":"April 2014"}
            ]};

education.schools.push({"location":"San Francisco, CA"})

education.schools[0]["name"] = 'City College of San Francisco';

education.schools[0]["years"] = "2012-2013";

education.schools[0]["degree"] = "GIS (Geographic Information Systems) Certification"

education.schools.push({"name":"University of Wisconsin",
"location":"Madison, WI", "degree":"BA", "major":"International Studies", "years": "2004-2008"})
//console.log(JSON.stringify(edu));

education.schools[0]["major"]  = "Geographic Information Systems"



var projects = {projects:[{
  "title":"California State Congresses Maps",
  "dates":"2015",
  "description":"A page where you can check out the districts for the upper and lower houses of the California State Congress.",
  "url":"http://secure-sands-4200.herokuapp.com/#/map",
  "images":[{
    "url":"images/CAmap.jpg"}
    ]
  },
  {
    "title":"Maptimes Spherical Veronoi Map",
    "dates":"2015",
    "description":"Pretty much copied a Joson Davies spherical veronoi inserting Maptimes for the points.",
    "url":"http://mpmckenna8.github.io/d3prac/sphver/index.html",
    "images":[

    ]
  }]}

  var baseball = new Project

  baseball.title = "MLB World Series Column Chart";
  baseball.dates = "October 2014";
  baseball.description = "Major League Baseball World series total wins column chart with map showing current franchise locations.";
  baseball.url = "http://mpmckenna8.github.io/chartMap/index.html";
  baseball.images = [];

  console.log(baseball)
projects.projects.push(baseball);



projects.display = function(){
  console.log(this)
  var projdiv = $("#projects")
  for(i in this.projects){
    console.log(this.projects[i])

    projdiv.append(HTMLprojectStart);



    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", this.projects[i].title).replace("#", this.projects[i].url)
    + HTMLprojectDates.replace("%data%", this.projects[i].dates)
     + HTMLprojectDescription.replace("%data%", this.projects[i].description) )

     if(projects.projects[i].images.length > 0){
       for (image in projects.projects[i].images){
         var formimage = HTMLprojectImage.replace("%data%", projects.projects[i].images[image].url);
         $(".project-entry:last").append(formimage)
       }
     }


  }
}
projects.display();


var formatName = HTMLheaderName.replace("%data%", bio.name);
console.log(formatName);


var formatRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formatRole);
$("#header").prepend([formatName]);

//var formatCon = HTMLcontactGeneric.replace("%data%", bio.contacts.mobile).replace("%contact%", "Best to contact by:");

var forMob = HTMLmobile.replace("%data%", bio.contacts.mobile);

var formatemail = HTMLemail.replace("%data%", bio.contacts.email);

var formtwit = HTMLtwitter.replace("%data%", bio.contacts.twitter);


var formskills = [];
for(i in bio.skills){
  console.log(i)
  formskills.push(HTMLskills.replace("%data%", bio.skills[i]))

}

var formskillsStart = HTMLskillsStart;

$("#topContacts")
.append(formatemail).append(forMob).append(formtwit)  //.append(formatCon)

if(bio.skills.length > 0 ){

$("#header").append(formskillsStart)//.append(formskills);
  $("#skills").append(formskills)


}

console.log(formskills)

var formpic = HTMLbioPic.replace("%data%", bio.pic);

var formwel = HTMLwelcomeMsg.replace("%data%", bio.welcome)

$("#header").append(formpic).append(formwel)


var soap;

for(i in work.jobs){
  displayWork(work, i)

}

//$("#workExperience").append(formWorkLen).append(formWorkEm).append(formworkTit).append(formworkDate).append(formWorkPlace).append(formWorkDesc)
education.init = function(){
  console.log(this)

  var edudiv = $("#education");
  for( ble in this.schools){
    edudiv.append(HTMLschoolStart);

    var hoo = this.schools[ble];
    var name = HTMLschoolName.replace("%data%", hoo.name);
    var degree = HTMLschoolDegree.replace("%data%", hoo.degree);
    var dates = HTMLschoolDates.replace("%data%", hoo.years);
    var loca = HTMLschoolLocation.replace("%data%", hoo.location );
    var major = HTMLschoolMajor.replace("%data%", hoo.major);
    var allofit = name + degree + dates + loca + major;
    $(".education-entry:last").append(allofit)
  }

}

education.init();
education.displayone = function(){

}


function displayWork(work,i){
  console.log('gonna add some jobs', i)
  soap =   $("#workExperience").append(HTMLworkStart)
  formWorkEm = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
  formworkDate = HTMLworkDates.replace("%data%", work.jobs[i].years);


  $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i].position)).append(HTMLworkDates.replace("%data%", work.jobs[i].years))
  .append(HTMLworkLocation.replace("%data%", worknow.location)).append(HTMLworkDescription.replace("%data%", work.jobs[i].description))
  $("#workExperience").append(soap)

}

$(document).click(function(loc){
  console.log(loc)
  console.log(loc.clientX, loc.clientY);
  logClicks(loc.clientX,loc.clientY);
  });

$("#main").append(internationalizeButton);

function inName(name){
  var spliced = bio.name.split(" ");
  console.log(spliced[0] + " " + spliced[1].toUpperCase())
  return spliced[0] + " " + spliced[1].toUpperCase()
}

function Project(){
  this.title;
  this.dates;

}

$("#mapDiv").append(googleMap)
