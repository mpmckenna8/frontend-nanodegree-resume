
var bio = {
  name: "Matthew Philip McKenna",
  role: "Digital Cartographer",
  email:"mpmckenna8@me.com",
  pic:"images/mee.jpg",
  welcome:"Get in touch if you have any questions my resume doesn't answer!",
  skills:["JavaScript", "HTML", "GIS", "Networks", "Cartography"],
  mobile:"Please contact by e-mail to obtain mobile #",
  contact:"email",
  twitter:"mpmckenna8"
}

var formatName = HTMLheaderName.replace("%data%", bio.name);
console.log(formatName);
$("#header").append([formatName]);

var formatRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").append(formatRole);


var formatCon = HTMLcontactGeneric.replace("%data%", bio.contact).replace("%contact%", "Best to contact by:");

var forMob = HTMLmobile.replace("%data%", bio.mobile);

var formatemail = HTMLemail.replace("%data%", bio.email);

var formtwit = HTMLtwitter.replace("%data%", bio.twitter);


var formskills = [];
for(i in bio.skills){
  console.log(i)
  formskills.push(HTMLskills.replace("%data%", bio.skills[i]))

}

var formskillsStart = HTMLskillsStart;

$("#header").append(formatCon).append(formatemail).append(forMob).append(formtwit).append(formskillsStart)//.append(formskills);

console.log(formskills)
$("#skills").append(formskills)

var formpic = HTMLbioPic.replace("%data%", bio.pic);

var formwel = HTMLwelcomeMsg.replace("%data%", bio.welcome)

$("#header").append(formpic).append(formwel)




var awesomeThoughts = "I am Matt, and I am awesome.";

console.log(awesomeThoughts.replace("awesome", "fun"));


var worknow = {
}

worknow.position = "Volunteer Supervisor";

worknow.employer = "San Francisco Bicycle Coalition";

worknow.location = "San Francisco";

worknow.years = '3.5 years';

worknow.description = "Oversee field operations for the bicycle valet service while overseeing volunteers and coordinating operations at a wide variety of sites.";

console.table(worknow)

var formWorkLen = HTMLworkStart

var formWorkEm = HTMLworkEmployer.replace("%data%", worknow.employer)

var formworkDate = HTMLworkDates.replace("%data%", worknow.years);

var formworkTit = HTMLworkTitle.replace("%data%", worknow.position);

var formWorkPlace = HTMLworkLocation.replace("%data%", worknow.location)

var formWorkDesc = HTMLworkDescription.replace("%data%", worknow.description);






$("#workExperience").append(formWorkLen).append(formWorkEm).append(formworkTit).append(formworkDate)
.append(formWorkPlace).append(formWorkDesc)


var edu = {};

edu["name"] = 'City College of San Francisco';

edu["years"] = "2012-2013";

edu["degree"] = "GIS (Geographic Information Systems) Certification"

$("#education").append(edu.name);
