/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Yongxin Wang",
    "role": "Web Developer",
    "contact": {
        "email": "quoniamy@gmail.com",
        "github": "QuoniamYIF",
        "twitter": "@Quoniam",
        "blog": "https://quoniamyif.github.io"
    },
    "skills": [
        "html/css/js", "node", "meteor", "gulp","c++", "Algorithm", "machine learning", "matlab/octave", "python", "..."
    ],
    "bioPic": "images/bio.jpeg"
};
var moto = "Hope is a good thing."
var education = {
    "schools": [
        {
            "name": "Xidian University",
            "degree": "Bachelor",
            "major":  "communication engineering",
            "dates": "2012~2016"
        },
    ],
    // "onlineCourses": [
    //     {
    //         "title":
    //         "school":
    //         "url"
    //     },
    // ],
};
var work = {
    "jobs": [
        {
            "employer": "Xi'an MuSheng electronic technology co",
            "title": "web developer",
            "dates": "2016/03~2016/06",
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

var htmlName = HTMLheaderName.replace("%data%", bio.name);
var htmlRole = HTMLheaderRole.replace("%data%", bio.role);
var htmlEmail = HTMLemail.replace("%data%", bio.contact.email);
var htmlGithub = HTMLgithub.replace("%data%", bio.contact.github);
var htmlMoto = HTMLwelcomeMsg.replace("%data%", moto);
var bioImg = HTMLbioPic.replace("%data%", bio.bioPic);
var twitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
var blog = HTMLblog.replace("%data%", bio.contact.blog);
$("#header").prepend(htmlRole).prepend(htmlName);
$("#topContacts").append(htmlEmail).append(htmlGithub).append(twitter).append(blog);
$("#footerContacts").append(htmlEmail).append(htmlGithub).append(twitter).append(blog);
$("#header").append(bioImg).append(htmlMoto).append(HTMLskillsStart);

for(skill in bio.skills) {
    var s = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(s);
}
work.display = function() {
    for(job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var htmlEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var htmlTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var htmlDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var htmlDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        var htmlJobInfo = htmlEmployer + htmlTitle + htmlDate + htmlDescription;
        $(".work-entry:last").append(htmlJobInfo);
    }
}
education.display = function() {
    for(school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var htmlName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var htmlDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var htmlDate =  HTMLonlineDates.replace("%data%", education.schools[school].dates);
        var htmlMajor =  HTMLschoolMajor.replace("%data%", education.schools[school].major);

        var school = htmlName + htmlDegree + htmlDate + htmlMajor;

        $(".education-entry:last").append(school);
    }
}
projects.display = function() {
    for(project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var projectDate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
        var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        var projectImage = "";

        if(projects.projects[project].images.length > 0) {
            for(img in projects.projects[project].images) {
                var img = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
                var htmlImg = HTMLprojectimgStart.replace("%data%", img);
                projectImage += htmlImg;
            }
        }

        var projectImages = HTMLrow.replace("%data%", projectImage);
        var project = projectTitle + projectDate + projectDescription + projectImages;

        $(".project-entry:last").append(project);
    }
}

projects.display();
work.display();
education.display();