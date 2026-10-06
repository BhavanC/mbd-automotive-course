/*
  MODULE 1 CONTENT

  Source:
  Module 1: Simulink Fundamentals for Automotive

  This file contains the course content.
  The website engine is in app.js.
  Normally, you only edit this file when adding or changing
  course content.
*/

window.courseModules = [
  {
    id: "module-1",
    title: "Module 1: Simulink Fundamentals for Automotive",

    openingLectures: [

      // =========================================================
      // LECTURE 1
      // =========================================================

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
          [
            "Format",
            "Written lessons, annotated screenshots and downloadable models"
          ],
          [
            "Software",
            "MATLAB and Simulink. No extra toolboxes"
          ]
        ],

        sections: [

          {
            heading: "Why this module matters",

            paragraphs: [
              "Carmakers and EV companies design their control software in Simulink long before any code reaches a vehicle. They build a model, test it on a computer, and only then move to hardware. This approach is called model-based design, and it is one of the most asked-for skills in automotive engineering jobs.",

              "This module gives you the foundation. You won't just learn where the blocks are. You'll build a model of a vehicle, put a controller on it, and learn how to tell when a model is wrong."
            ]
          },

          {
            heading: "What you'll be able to do",

            paragraphs: [
              "By the end of this module, you can:"
            ],

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

        closing:
          "That's what the module covers. In the next lecture, you'll set up everything you need to start."
      },


      // =========================================================
      // LECTURE 2
      // =========================================================

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

            paragraphs: []
          },

          {
            heading: "You should already know",

            paragraphs: [
              "Basic MATLAB: variables, vectors, plotting, writing a short script. If you need a refresher, use the free one-page Module 0 guide.",

              "First-year mechanics and calculus: Newton's second law and simple differential equations."
            ]
          },

          {
            heading: "You don't need",

            bullets: [
              "Any earlier Simulink experience",

              "Control theory. The ideas are introduced when you need them.",

              "Extra toolboxes. Core MATLAB and Simulink are enough."
            ]
          },

          {
            heading: "Getting the software",

            paragraphs: [
              "Pick whichever option works for you:",

              "Your college licence: many colleges hold a campus-wide MATLAB licence. Check with your department or computer centre; a short guide in the module shows how to activate it.",

              "MATLAB Online: runs in your browser, so it works on a low-spec laptop. Free usage hours are limited, so check MathWorks' current terms.",

              "Version note: all models are saved in an older release format so they open on most versions."
            ]
          },

          {
            heading: "What you'll download",

            bullets: [
              "Starter and finished Simulink models (.slx) for each lesson",

              "MATLAB scripts (.m) with the parameters used in the models",

              "A one-page cheat sheet of Simulink shortcuts and common blocks (PDF)"
            ]
          },

          {
            heading: "How to get the most from this module",

            paragraphs: [
              "There are no videos. Read at your own pace and keep Simulink open beside the lesson.",

              "Build every model yourself before opening the finished version.",

              "Note down the mistakes you make. Each one you record is one you'll spot faster next time."
            ]
          }

        ],

        closing:
          "You're ready. Open Lesson 1.1 to begin."
      }

    ],


    // ===========================================================
    // LESSONS
    // ===========================================================
    //
    // The supplied Module 1 overview PDF ends by directing the
    // learner to Lesson 1.1. It does not contain the actual
    // content for Lessons 1.1–1.7.
    //
    // We will add those lessons when their source material
    // is available.
    // ===========================================================

    lessons: [

      {
        id: "lesson-1-1",
        title: "Lesson 1.1",
        status: "placeholder",
        description:
          "Lesson 1.1 content will be added here."
      },

      {
        id: "lesson-1-2",
        title: "Lesson 1.2",
        status: "placeholder",
        description:
          "Lesson 1.2 content will be added here."
      },

      {
        id: "lesson-1-3",
        title: "Lesson 1.3",
        status: "placeholder",
        description:
          "Lesson 1.3 content will be added here."
      },

      {
        id: "lesson-1-4",
        title: "Lesson 1.4",
        status: "placeholder",
        description:
          "Lesson 1.4 content will be added here."
      },

      {
        id: "lesson-1-5",
        title: "Lesson 1.5",
        status: "placeholder",
        description:
          "Lesson 1.5 content will be added here."
      },

      {
        id: "lesson-1-6",
        title: "Lesson 1.6",
        status: "placeholder",
        description:
          "Lesson 1.6 content will be added here."
      },

      {
        id: "lesson-1-7",
        title: "Lesson 1.7",
        status: "placeholder",
        description:
          "Lesson 1.7 content will be added here."
      }

    ]
  }
];
