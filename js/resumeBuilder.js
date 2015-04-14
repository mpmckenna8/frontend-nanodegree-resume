
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

worknow.years = 3.5

console.table(worknow)
