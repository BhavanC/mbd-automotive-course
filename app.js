/*
  WEBSITE ENGINE

  This file controls how the course is displayed.
  Normally, you should NOT edit this file when writing lessons.
*/

const nav = document.getElementById("course-nav");
const view = document.getElementById("lesson-view");

const module = window.courseModules[0];

function addButton(parent, label, id, handler) {
  const button = document.createElement("button");
  button.className = "nav-button";
  button.textContent = label;
  button.dataset.id = id;
  button.addEventListener("click", handler);
  parent.appendChild(button);
  return button;
}

function renderNavigation() {
  nav.innerHTML = "";

  const moduleTitle = document.createElement("div");
  moduleTitle.className = "nav-group-title";
  moduleTitle.textContent = module.title;
  nav.appendChild(moduleTitle);

  module.openingLectures.forEach((lecture) => {
    addButton(nav, lecture.title, lecture.id, () => {
      renderLecture(lecture.id);
    });
  });

  module.lessons.forEach((lesson) => {
    addButton(nav, lesson.title, lesson.id, () => {
      renderLesson(lesson.id);
    });
  });
}

function clearActiveButtons(id) {
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.id === id);
  });
}

function renderLecture(id) {
  const lecture = module.openingLectures.find(item => item.id === id);
  if (!lecture) return;

  clearActiveButtons(id);

  let html = `
    <article class="content-card">
      <button class="back-link" onclick="showModuleHome()">← Module overview</button>
      <h2>${lecture.title}</h2>
  `;

  if (lecture.intro) {
    lecture.intro.forEach(text => {
      html += `<p class="meta">${text}</p>`;
    });
  }

  if (lecture.details) {
    html += `<h3>Module details</h3>`;
    lecture.details.forEach(([label, value]) => {
      html += `<p><strong>${label}:</strong> ${value}</p>`;
    });
  }

  if (lecture.sections) {
    lecture.sections.forEach(section => {
      html += `<section>`;
      html += `<h3>${section.heading}</h3>`;

      if (section.paragraphs) {
        section.paragraphs.forEach(paragraph => {
          html += `<p>${paragraph}</p>`;
        });
      }

      if (section.outcomes) {
        html += `<ol class="outcomes">`;
        section.outcomes.forEach(outcome => {
          html += `<li>${outcome}</li>`;
        });
        html += `</ol>`;
      }

      if (section.bullets) {
        html += `<ul>`;
        section.bullets.forEach(bullet => {
          html += `<li>${bullet}</li>`;
        });
        html += `</ul>`;
      }

      html += `</section>`;
    });
  }

  if (lecture.closing) {
    html += `<p><strong>${lecture.closing}</strong></p>`;
  }

  html += `</article>`;
  view.innerHTML = html;
}

function renderLesson(id) {
  const lesson = module.lessons.find(item => item.id === id);
  if (!lesson) return;

  clearActiveButtons(id);

  view.innerHTML = `
    <article class="content-card">
      <button class="back-link" onclick="showModuleHome()">← Module overview</button>
      <h2>${lesson.title}</h2>

      <div class="lesson-placeholder">
        <p>${lesson.description}</p>
        <p>We will build this lesson when its content is ready.</p>
      </div>
    </article>
  `;
}

function showModuleHome() {
  document.querySelectorAll(".nav-button").forEach(button => {
    button.classList.remove("active");
  });

  view.innerHTML = `
    <article class="content-card">
      <p class="eyebrow">Module 1</p>
      <h2>${module.title}</h2>

      <p>
        This module begins with two short lectures, followed by the course
        lessons. Choose an item from the left to begin.
      </p>

      <h3>Opening lectures</h3>
      <ul>
        <li>Lecture 1: Welcome to Module 1</li>
        <li>Lecture 2: Getting ready</li>
      </ul>

      <h3>Lessons</h3>
      <p>Lessons 1.1–1.7 will be developed one at a time.</p>
    </article>
  `;
}

renderNavigation();
showModuleHome();
