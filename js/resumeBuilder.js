/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Yongxin Wang",
    "role": "Web Developer",
    "contacts": {
        "mobile": "18729482846",
        "email": "quoniamy@gmail.com",
        "github": "QuoniamYIF",
        "twitter": "@Quoniam",
        "blog": "https://quoniamyif.github.io",
        "location": "Shenzhen, Guangdong, China"
    },
    "welcomeMessage": "Hope is a good thing.",
    "skills": [
        "html/css/js", "node", "meteor", "gulp","c++", "Algorithm", "machine learning", "matlab/octave", "python", "..."
    ],
    "bioPic": "images/bio.jpeg"
};
var education = {
    "schools": [
        {
            "name": "Xidian University",
            "degree": "Bachelor",
            "location": "Xi'an, Shaanxi, China",
            "majors":  ["communication engineering"],
            "dates": "2012~2016"
        },
    ]
};
var work = {
    "jobs": [
        {
            "employer": "Xi'an MuSheng electronic technology co",
            "title": "web developer",
            "dates": "2016/03~2016/07",
            "location": "Shaan Xi,Xi'an",
            "description": "During this period,my major job is developing the website of company by using html,css,javascript,node and gulp."
        },
        {
            "employer": "Shenzhen vivebest technology co",
            "title": "web developer",
            "dates": "2016/09~now",
            "location": "Shenzhen, Guangdong, China",
            "description": "During this period,my major job is developing the website of company by using html,css,javascript,node and gulp."
        }
    ],
};
var projects = {
    "projects": [
        {
            "title": "void club",
            "date": "2015/10",
            "description": "a community that you can talk about anything you can talk about.",
            "images": [
                "images/void1.png",
                "images/void2.png"
            ]
        },
        {
            "title": "my blog",
            "date": "2015/5 - now",
            "description": "the blog of my own......",
            "images": [
                "images/blog1.png",
                "images/blog2.png"
            ]
        }
    ]
}

$("#mapDiv").append(googleMap);

bio.display = function() {
    var htmlName = HTMLheaderName.replace("%data%", bio.name);
    var htmlRole = HTMLheaderRole.replace("%data%", bio.role);
    var htmlEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var htmlGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var htmlMoto = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var bioImg = HTMLbioPic.replace("%data%", bio.bioPic);
    var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var blog = HTMLblog.replace("%data%", bio.contacts.blog);
    var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var location = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#header").prepend(htmlRole).prepend(htmlName);
    $("#topContacts").append(htmlEmail).append(htmlGithub).append(blog).append(mobile).append(location);
    $("#footerContacts").append(htmlEmail).append(htmlGithub).append(blog).append(mobile).append(location);
    $("#header").append(bioImg).append(htmlMoto).append(HTMLskillsStart);

    bio.skills.forEach(function(skill) {
        var s = HTMLskills.replace("%data%", skill);
        $("#skills").append(s);
    });
}

work.display = function() {
    work.jobs.forEach(function(job){
        $("#workExperience").append(HTMLworkStart);

        var htmlEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var htmlTitle = HTMLworkTitle.replace("%data%", job.title);
        var htmlDate = HTMLworkDates.replace("%data%", job.dates);
        var htmlLocation = HTMLworkLocation.replace("%data%", job.location);
        var htmlDescription = HTMLworkDescription.replace("%data%", job.description);

        var htmlJobInfo = htmlEmployer + htmlTitle + htmlDate + htmlLocation + htmlDescription;
        $(".work-entry:last").append(htmlJobInfo);
    });
}
education.display = function() {
    education.schools.forEach(function(school){
        $("#education").append(HTMLschoolStart);

        var htmlName = HTMLschoolName.replace("%data%", school.name);
        var htmlDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var htmlDate =  HTMLonlineDates.replace("%data%", school.dates);
        var htmlMajor =  "";
        var htmlLocation = HTMLschoolLocation.replace("%data%", school.location)

        if(school.majors.length > 0) {
            school.majors.forEach(function(major) {
                var major = HTMLschoolMajor.replace("%data%", major);
                htmlMajor += major;
            });
        }
        var school = htmlName + htmlDegree + htmlDate + htmlLocation + htmlMajor;

        $(".education-entry:last").append(school);
    });
}
projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var projectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var projectDate = HTMLprojectDates.replace("%data%", project.date);
        var projectDescription = HTMLprojectDescription.replace("%data%", project.description);
        var projectImage = "";

        if(project.images.length > 0) {
            project.images.forEach(function(image) {
                var img = HTMLprojectImage.replace("%data%", image);
                var htmlImg = HTMLprojectimgStart.replace("%data%", img);
                projectImage += htmlImg;
            });
        }

        var projectImages = HTMLrow.replace("%data%", projectImage);
        var project = projectTitle + projectDate + projectDescription + projectImages;

        $(".project-entry:last").append(project);
    });
}

bio.display();
projects.display();
work.display();
education.display();