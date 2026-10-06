```javascript
// ============================================================
// Automotive Model-Based Design Course
// Website engine
//
// IMPORTANT:
// Normally you should not need to edit this file.
// Course content belongs in content/module1.js.
// ============================================================

const nav = document.getElementById("course-nav");
const view = document.getElementById("lesson-view");

const module = window.courseModules[0];


// ============================================================
// Navigation helper
// ============================================================

function addButton(parent, label, id, handler) {
  const button = document.createElement("button");

  button.textContent = label;
  button.dataset.id = id;

  button.addEventListener("click", handler);

  parent.appendChild(button);
}


// ============================================================
// Render left navigation
// ============================================================

function renderNavigation() {
  nav.innerHTML = "";

  // Module title
  const moduleTitle = document.createElement("div");
  moduleTitle.className = "nav-module-title";
  moduleTitle.textContent = module.title;

  nav.appendChild(moduleTitle);


  // Opening lectures
  const openingHeading = document.createElement("div");
  openingHeading.className = "nav-section-heading";
  openingHeading.textContent = "Getting started";

  nav.appendChild(openingHeading);

  module.openingLectures.forEach((lecture) => {
    addButton(
      nav,
      lecture.title,
      lecture.id,
      () => renderLecture(lecture.id)
    );
  });


  // Lessons and module work
  const lessonsHeading = document.createElement("div");
  lessonsHeading.className = "nav-section-heading";
  lessonsHeading.textContent = "Module 1";

  nav.appendChild(lessonsHeading);

  module.lessons.forEach((lesson) => {
    addButton(
      nav,
      lesson.title,
      lesson.id,
      () => renderLesson(lesson.id)
    );
  });
}


// ============================================================
// Highlight active navigation button
// ============================================================

function clearActiveButtons(id) {
  const buttons = nav.querySelectorAll("button");

  buttons.forEach((button) => {
    button.classList.remove("active");

    if (button.dataset.id === id) {
      button.classList.add("active");
    }
  });
}


// ============================================================
// Render opening lecture
// ============================================================

function renderLecture(id) {
  const lecture = module.openingLectures.find(
    (item) => item.id === id
  );

  if (!lecture) {
    return;
  }

  clearActiveButtons(id);

  let html = "";

  html += `<div class="content-card">`;

  html += `<p class="content-label">Opening lecture</p>`;

  html += `<h1>${lecture.title}</h1>`;

  if (lecture.intro) {
    html += `<p class="lead">${lecture.intro}</p>`;
  }

  if (lecture.details) {
    html += `<p>${lecture.details}</p>`;
  }


  // Sections
  if (lecture.sections) {
    lecture.sections.forEach((section) => {

      html += `<section class="lesson-section">`;

      html += `<h2>${section.heading}</h2>`;


      if (section.paragraphs) {
        section.paragraphs.forEach((paragraph) => {
          html += `<p>${paragraph}</p>`;
        });
      }


      if (section.bullets) {
        html += `<ul>`;

        section.bullets.forEach((bullet) => {
          html += `<li>${bullet}</li>`;
        });

        html += `</ul>`;
      }


      if (section.outcomes) {
        html += `<ul>`;

        section.outcomes.forEach((outcome) => {
          html += `<li>${outcome}</li>`;
        });

        html += `</ul>`;
      }

      html += `</section>`;
    });
  }


  if (lecture.closing) {
    html += `
      <div class="closing-note">
        <p>${lecture.closing}</p>
      </div>
    `;
  }

  html += `</div>`;

  view.innerHTML = html;
}


// ============================================================
// Render lesson
// ============================================================

function renderLesson(id) {
  const lesson = module.lessons.find(
    (item) => item.id === id
  );

  if (!lesson) {
    return;
  }

  clearActiveButtons(id);

  let html = "";

  html += `<div class="content-card">`;

  html += `<p class="content-label">Module 1</p>`;

  html += `<h1>${lesson.title}</h1>`;


  // Duration
  if (lesson.duration) {
    html += `
      <p class="lesson-meta">
        <strong>Estimated time:</strong> ${lesson.duration}
      </p>
    `;
  }


  // Current status
  if (lesson.status === "planned") {
    html += `
      <div class="status-note">
        <strong>Content status:</strong> Planned
      </div>
    `;
  }


  // Description
  if (lesson.description) {
    html += `<p class="lead">${lesson.description}</p>`;
  }


  // Topics
  if (lesson.topics && lesson.topics.length > 0) {

    html += `<section class="lesson-section">`;

    html += `<h2>Topics</h2>`;

    html += `<ul>`;

    lesson.topics.forEach((topic) => {
      html += `<li>${topic}</li>`;
    });

    html += `</ul>`;

    html += `</section>`;
  }


  // Exercise
  if (lesson.exercise) {

    html += `<section class="lesson-section">`;

    html += `<h2>Exercise</h2>`;

    html += `<p>${lesson.exercise}</p>`;

    html += `</section>`;
  }


  // Output
  if (lesson.output) {

    html += `<section class="lesson-section">`;

    html += `<h2>Output</h2>`;

    html += `<p>${lesson.output}</p>`;

    html += `</section>`;
  }


  html += `
    <div class="lesson-placeholder">
      <p>
        The full written lesson, screenshots, downloads,
        exercise instructions and knowledge check will be
        added here when this lesson is developed.
      </p>
    </div>
  `;

  html += `</div>`;

  view.innerHTML = html;
}


// ============================================================
// Module home page
// ============================================================

function showModuleHome() {

  clearActiveButtons("");

  let html = "";

  html += `<div class="content-card">`;

  html += `
    <p class="content-label">Course module</p>
    <h1>${module.title}</h1>
  `;


  if (module.description) {
    html += `<p class="lead">${module.description}</p>`;
  }


  if (module.estimatedTime) {
    html += `
      <p>
        <strong>Estimated time:</strong>
        ${module.estimatedTime}
      </p>
    `;
  }


  // Opening lectures
  html += `
    <section class="lesson-section">
      <h2>Getting started</h2>
      <p>
        Begin with the two short opening lectures before moving
        into the eight main lessons.
      </p>

      <ul>
  `;

  module.openingLectures.forEach((lecture) => {
    html += `<li>${lecture.title}</li>`;
  });

  html += `
      </ul>
    </section>
  `;


  // Main lessons
  html += `
    <section class="lesson-section">
      <h2>Module 1 lessons</h2>
      <ul>
  `;

  module.lessons.forEach((lesson) => {
    html += `<li>${lesson.title}</li>`;
  });

  html += `
      </ul>
    </section>
  `;


  // Lesson template
  html += `
    <section class="lesson-section">
      <h2>Standard lesson format</h2>

      <ol>
        <li>Goal in one sentence</li>
        <li>Concept with text and diagram</li>
        <li>Numbered walkthrough with annotated screenshots</li>
        <li>Downloads</li>
        <li>Exercise</li>
        <li>Check</li>
      </ol>
    </section>
  `;


  html += `
    <div class="closing-note">
      <p>
        Start with Lecture 1: Welcome to Module 1.
      </p>
    </div>
  `;

  html += `</div>`;

  view.innerHTML = html;
}


// ============================================================
// Start website
// ============================================================

renderNavigation();
showModuleHome();
```
