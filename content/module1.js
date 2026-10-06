/*
  MODULE 1 CONTENT

  This file is where you will work on Module 1.
  Do not change app.js just to add or edit course content.

  The two opening lectures below follow the supplied PDF.
  Lessons 1.1–1.7 are intentionally placeholders here because
  the supplied PDF does not provide their full lesson content.
*/

window.courseModules = [
  {
    id: "module-1",
    title: "Module 1: Simulink Fundamentals for Automotive",

    openingLectures: [
      {
        id: "lecture-1",
        title: "Lecture 1: Welcome to Module 1",
        type: "lecture",

        intro: [
          "Learn to build your first working vehicle model in Simulink, close a control loop around it, and find the faults that break real models."
        ],

        details: [
          ["Time", "About 8 hours, over one week"],
          ["Level", "Beginner. No Simulink experience needed"],
          ["Format", "Written lessons, annotated screenshots and downloadable models"],
          ["Software", "MATLAB and Simulink. No extra toolboxes"]
        ],

        sections: [
          {
            heading: "Why this module matters",
            paragraphs: [
              "Model-based design gives you a way to build, test and understand vehicle behaviour before you put the design on real hardware."
            ]
          },
          {
            heading: "What you'll be able to do",
            outcomes: [
              "Build, run and read a Simulink model using the core blocks",
              "Choose sensible solver and step-size settings, and explain what happens when they are wrong",
              "Turn a vehicle equation into a working Simulink model",
              "Close a feedback loop and tune a PID controller against clear targets",
              "Organise a model into subsystems and drive it from a MATLAB script",
              "Find and fix common model faults, such as algebraic loops and unit mistakes",
              "Explain where model-based design fits in a vehicle development process"
            ]
          }
        ],

        closing: "That's what the module covers. In the next lecture, you'll set up everything you need to start."
      },

      {
        id: "lecture-2",
        title: "Lecture 2: Getting ready",
        type: "lecture",

        intro: [
          "You now know what this module teaches and why it matters. This lecture covers what you need before the first lesson."
        ],

        sections: [
          {
            heading: "Before you start",
            paragraphs: [
              "You should already know"
            ]
          },
          {
            heading: "You should already know",
            paragraphs: [
              "Basic MATLAB and first-year mechanics/calculus requirements"
            ]
          },
          {
            heading: "You don't need",
            bullets: [
              "No prior Simulink",
              "No control theory required",
              "No extra toolboxes"
            ]
          },
          {
            heading: "Getting the software",
            paragraphs: [
              "Use your college license if you have one. MATLAB Online is also an option. Check the required version before you begin."
            ]
          },
          {
            heading: "What you'll download",
            bullets: [
              ".slx models",
              ".m scripts",
              "PDF cheat sheet"
            ]
          },
          {
            heading: "How to get the most from this module",
            paragraphs: [
              "There are no videos. Build the models yourself and note the mistakes you make while working through the material."
            ]
          }
        ],

        closing: "You're ready. Open Lesson 1.1 to begin."
      }
    ],

    lessons: [
      {
        id: "lesson-1-1",
        title: "Lesson 1.1",
        status: "placeholder",
        description: "Lesson content will be added here."
      },
      {
        id: "lesson-1-2",
        title: "Lesson 1.2",
        status: "placeholder",
        description: "Lesson content will be added here."
      },
      {
        id: "lesson-1-3",
        title: "Lesson 1.3",
        status: "placeholder",
        description: "Lesson content will be added here."
      },
      {
        id: "lesson-1-4",
        title: "Lesson 1.4",
        status: "placeholder",
        description: "Lesson content will be added here."
      },
      {
        id: "lesson-1-5",
        title: "Lesson 1.5",
        status: "placeholder",
        description: "Lesson content will be added here."
      },
      {
        id: "lesson-1-6",
        title: "Lesson 1.6",
        status: "placeholder",
        description: "Lesson content will be added here."
      },
      {
        id: "lesson-1-7",
        title: "Lesson 1.7",
        status: "placeholder",
        description: "Lesson content will be added here."
      }
    ]
  }
];
