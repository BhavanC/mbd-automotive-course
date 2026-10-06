// ============================================================
// Automotive Model-Based Design Course
// Main website engine
// ============================================================

const nav = document.getElementById("course-nav");
const view = document.getElementById("lesson-view");


// ------------------------------------------------------------
// Check that Module 1 loaded
// ------------------------------------------------------------

if (!window.courseModules || window.courseModules.length === 0) {

  view.innerHTML = `
    <div class="content-card">
      <h1>Course loading error</h1>
      <p>
        Module 1 could not be loaded.
        Please check that this file exists:
      </p>
      <p><strong>content/module1.js</strong></p>
    </div>
  `;

  throw new Error("courseModules was not loaded.");
}


const module = window.courseModules[0];


// ------------------------------------------------------------
// Create navigation button
// ------------------------------------------------------------

function addButton(label, id, clickFunction) {

  const button = document.createElement("button");

  button.textContent = label;
  button.type = "button";
  button.dataset.id = id;

  button.addEventListener("click", clickFunction);

  nav.appendChild(button);
}


// ------------------------------------------------------------
// Build navigation
// ------------------------------------------------------------

function renderNavigation() {

  nav.innerHTML = "";

  // Module title
  const moduleTitle = document.createElement("div");

  moduleTitle.className = "nav-module-title";
  moduleTitle.textContent = module.title;

  nav.appendChild(moduleTitle);


  // Getting started
  const gettingStarted = document.createElement("div");

  gettingStarted.className = "nav-section-heading";
  gettingStarted.textContent = "Getting started";

  nav.appendChild(gettingStarted);


  // Opening lectures
  module.openingLectures.forEach(function (lecture) {

    addButton(
      lecture.title,
      lecture.id,
      function () {
        renderLecture(lecture.id);
      }
    );

  });


  // Module lessons
  const moduleHeading = document.createElement("div");

  moduleHeading.className = "nav-section-heading";
  moduleHeading.textContent = "Module 1";

  nav.appendChild(moduleHeading);


  module.lessons.forEach(function (lesson) {

    addButton(
      lesson.title,
      lesson.id,
      function () {
        renderLesson(lesson.id);
      }
    );

  });
}


// ------------------------------------------------------------
// Highlight selected navigation item
// ------------------------------------------------------------

function setActive(id) {

  const buttons = nav.querySelectorAll("button");

  buttons.forEach(function (button) {

    button.classList.remove("active");

    if (button.dataset.id === id) {
      button.classList.add("active");
    }

  });
}


// ------------------------------------------------------------
// Render opening lecture
// ------------------------------------------------------------

function renderLecture(id) {

  const lecture = module.openingLectures.find(function (item) {
    return item.id === id;
  });


  if (!lecture) {
    return;
  }


  setActive(id);


  let html = "";

  html += '<div class="content-card">';

  html += '<p class="content-label">Opening lecture</p>';

  html += "<h1>" + lecture.title + "</h1>";


  if (lecture.intro) {

    html += '<p class="lead">';
    html += lecture.intro;
    html += "</p>";

  }


  if (lecture.details) {

    html += "<p>";
    html += lecture.details;
    html += "</p>";

  }


  if (lecture.sections) {

    lecture.sections.forEach(function (section) {

      html += '<section class="lesson-section">';

      html += "<h2>";
      html += section.heading;
      html += "</h2>";


      if (section.paragraphs) {

        section.paragraphs.forEach(function (paragraph) {

          html += "<p>";
          html += paragraph;
          html += "</p>";

        });

      }


      if (section.bullets) {

        html += "<ul>";

        section.bullets.forEach(function (bullet) {

          html += "<li>";
          html += bullet;
          html += "</li>";

        });

        html += "</ul>";

      }


      html += "</section>";

    });

  }


  if (lecture.closing) {

    html += '<div class="closing-note">';
    html += "<p>";
    html += lecture.closing;
    html += "</p>";
    html += "</div>";

  }


  html += "</div>";


  view.innerHTML = html;
}


// ------------------------------------------------------------
// Render lesson
// ------------------------------------------------------------

function renderLesson(id) {

  const lesson = module.lessons.find(function (item) {
    return item.id === id;
  });


  if (!lesson) {
    return;
  }


  setActive(id);


  let html = "";

  html += '<div class="content-card">';

  html += '<p class="content-label">Module 1</p>';

  html += "<h1>";
  html += lesson.title;
  html += "</h1>";


  if (lesson.duration) {

    html += '<p class="lesson-meta">';
    html += "<strong>Estimated time:</strong> ";
    html += lesson.duration;
    html += "</p>";

  }


  if (lesson.status) {

    html += '<div class="status-note">';
    html += "<strong>Status:</strong> ";
    html += lesson.status;
    html += "</div>";

  }


  if (lesson.description) {

    html += '<p class="lead">';
    html += lesson.description;
    html += "</p>";

  }


  // Topics
  if (lesson.topics && lesson.topics.length > 0) {

    html += '<section class="lesson-section">';

    html += "<h2>Topics</h2>";

    html += "<ul>";

    lesson.topics.forEach(function (topic) {

      html += "<li>";
      html += topic;
      html += "</li>";

    });

    html += "</ul>";

    html += "</section>";

  }


  // Exercise
  if (lesson.exercise) {

    html += '<section class="lesson-section">';

    html += "<h2>Exercise</h2>";

    html += "<p>";
    html += lesson.exercise;
    html += "</p>";

    html += "</section>";

  }


  // Output
  if (lesson.output) {

    html += '<section class="lesson-section">';

    html += "<h2>Output</h2>";

    html += "<p>";
    html += lesson.output;
    html += "</p>";

    html += "</section>";

  }


  html += `
    <div class="lesson-placeholder">
      <p>
        The full lesson content will be added here.
      </p>
    </div>
  `;


  html += "</div>";


  view.innerHTML = html;
}


// ------------------------------------------------------------
// Module home page
// ------------------------------------------------------------

function showModuleHome() {

  let html = "";

  html += '<div class="content-card">';

  html += '<p class="content-label">Course module</p>';

  html += "<h1>";
  html += module.title;
  html += "</h1>";


  if (module.description) {

    html += '<p class="lead">';
    html += module.description;
    html += "</p>";

  }


  if (module.estimatedTime) {

    html += "<p>";
    html += "<strong>Estimated time:</strong> ";
    html += module.estimatedTime;
    html += "</p>";

  }


  // Opening lectures
  html += '<section class="lesson-section">';

  html += "<h2>Getting started</h2>";

  html += `
    <p>
      Start with the two opening lectures before moving
      into the main lessons.
    </p>
  `;

  html += "<ul>";

  module.openingLectures.forEach(function (lecture) {

    html += "<li>";
    html += lecture.title;
    html += "</li>";

  });

  html += "</ul>";

  html += "</section>";


  // Lessons
  html += '<section class="lesson-section">';

  html += "<h2>Module 1</h2>";

  html += "<ul>";

  module.lessons.forEach(function (lesson) {

    html += "<li>";
    html += lesson.title;
    html += "</li>";

  });

  html += "</ul>";

  html += "</section>";


  html += '<div class="closing-note">';

  html += `
    <p>
      Start with <strong>Lecture 1: Welcome to Module 1</strong>.
    </p>
  `;

  html += "</div>";

  html += "</div>";


  view.innerHTML = html;
}


// ------------------------------------------------------------
// Start the website
// ------------------------------------------------------------

renderNavigation();

showModuleHome();
