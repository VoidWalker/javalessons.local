/*
 This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Oleksandr Sohan",
    "role": "QA Engineer",
    "welcomeMessage": "Welcome to my CV!",
    "contacts": {
        "mobile": "0678456123",
        "email": "sohanoleksa@gmail.com",
        "github": "sohanoleksa@gmail.com",
        "location": "Zhytomyr"
    },
    "skills": ["awesomeness", "programming", "JS", "Data bases", "Codeception"],
    "photo": "images/fry.jpg"
};
var work = {
    "jobs": [
        {
            "employer": "ISM",
            "title": "QA",
            "location": "Zhytomyr",
            "dates": "2013-2016",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
                "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," +
                " quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." +
                " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu " +
                "fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa" +
                "qui officia deserunt mollit anim id est laborum."
        },
        {
            "employer": "ISM2",
            "title": "QA",
            "location": "Zhytomyr",
            "dates": "2013-2016",
            "description": "Lorem ipsum dolor sit amet, " +
                "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " +
                "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
                "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
                "in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat " +
                "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ]
};
var projects = {
    "project": [
        {
            "title": "Poortvliet",
            "dates": "2015",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
            "images": ["images/logo-poortvliet.png", "images/logo-poortvliet.png", "images/logo-poortvliet.png"],
            "link": "wonbolevard.com",
            "platform": "Magento 1.9",
            "responsibilities": "QA"
        },
        {
            "title": "KC",
            "dates": "2015",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
            "images": ["images/logo-depend.png"],
            "link": "depend.com",
            "platform": "Magento 1.9",
            "responsibilities": "QA"
        },
        {
            "title": "UV-Fashions",
            "dates": "2015",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
            "images": ["images/logo-uvfashions.png"],
            "link": "uv-fashions.com",
            "platform": "Magento 1.9",
            "responsibilities": "QA"
        }
    ]
};
var education = {
    "schools": [
        {
            "name": "#28",
            "location": "Zhytomyr",
            "degree": "junior",
            "majors": "minor",
            "dates": "1998-2004"
        },
        {
            "name": "City Lyceum",
            "location": "Zhytomyr",
            "degree": "middle",
            "majors": "minor",
            "dates": "2004-2008"
        }
    ],
    "university": [
        {
            "name": "ZVINAU",
            "city": "Zhytomyr",
            "degree": "Bechelor",
            "major": "CompSci",
            "years": "2009-2013"
        }
    ]
};
//
var formatedName = HTMLheaderName.replace("%data%", bio.name.replace(/[><]/g, ""));
var formatedRole = HTMLheaderRole.replace("%data%", bio.role.replace(/[><]/g, ""));
$("#header").prepend(formatedRole);
$("#header").prepend(formatedName);
for (var contact in bio.contacts) {
    if (bio.contacts.hasOwnProperty(contact)) {
        $("#topContacts").append(HTMLcontactGeneric
            .replace("%contact%", contact)
            .replace("%data%", bio.contacts[contact]));
    }
}
$("#header").append(HTMLbioPic.replace("%data%", bio.photo));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var skill in bio.skills) {
        if (bio.skills.hasOwnProperty(skill)) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
        }
    }
}
function displayWork() {
    for (var job in work.jobs) {
        if (work.jobs.hasOwnProperty(job)) {
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer)
                    + HTMLworkTitle.replace("%data%", work.jobs[job].title))
                .append(HTMLworkDates.replace("%data%", work.jobs[job].dates))
                .append(HTMLworkLocation.replace("%data%", work.jobs[job].location))
                .append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
        }
    }
}

displayWork();

$("#main").append(internationalizeButton);
function inName() {
    var names = bio.name.trim().split(" ");
    names[0] = names[0][0].toUpperCase() + names[0].slice(1).toLowerCase();
    names[1] = names[1].toUpperCase();
    return names[0] + ' ' + names[1];
}

projects.display = function () {
    for (project_key in projects.project) {
        if (projects.project.hasOwnProperty(project_key)) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.project[project_key].title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.project[project_key].dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.project[project_key].description));
            if (projects.project[project_key].images.length > 0) {
                for (image in projects.project[project_key].images) {
                    $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.project[project_key].images[image]));
                }
            }
        }
    }
};
projects.display();