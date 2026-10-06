```javascript
// ============================================================
// Module 1: Simulink Fundamentals for Automotive
// Course: MATLAB & Simulink for Automotive
//
// This file contains the CONTENT of Module 1.
// The website engine is handled separately by app.js.
//
// Structure:
//   - 2 opening lectures
//   - 8 lessons
//   - Module project
//   - Assessment
// ============================================================

window.courseModules = [
  {
    id: "module-1",

    title: "Module 1: Simulink Fundamentals for Automotive",

    description:
      "Build, run, organise and debug a Simulink model of a real automotive system, and understand where Model-Based Design fits into vehicle development.",

    estimatedTime: "6–8 hours over about one week",

    format:
      "Written lessons, annotated screenshots, downloadable models, and auto-checked exercises.",


    // ========================================================
    // OPENING LECTURES
    // ========================================================

    openingLectures: [
      {
        id: "lecture-1",
        title: "Lecture 1: Welcome to Module 1",

        intro:
          "Welcome to Module 1: Simulink Fundamentals for Automotive.",

        details:
          "This module introduces Simulink as a practical engineering tool for Model-Based Design in automotive development.",

        sections: [
          {
            heading: "Module goal",

            paragraphs: [
              "By the end of this module, you should be able to build, run, organise and debug a Simulink model of a real automotive system.",
              "You should also be able to explain where Model-Based Design fits into a vehicle development process."
            ]
          },

          {
            heading: "What you will work with",

            bullets: [
              "Written lessons instead of video lectures",
              "Annotated screenshots",
              "Downloadable Simulink models",
              "Auto-checked exercises",
              "A practical automotive modelling project"
            ]
          },

          {
            heading: "Module project",

            paragraphs: [
              "The module project is a quarter-car suspension model driven by a road input representing a speed-breaker bump.",
              "The results will be plotted and checked against a target."
            ]
          },

          {
            heading: "Module outcomes",

            bullets: [
              "Understand why Simulink is used in automotive development",
              "Build a basic Simulink model",
              "Work with signals, units and data types",
              "Understand basic simulation solver settings",
              "Model a simple automotive plant",
              "Organise models using subsystems and parameters",
              "Debug common Simulink problems",
              "Organise a control model into clean subsystems"
            ]
          }
        ],

        closing:
          "When you are ready, continue to Lecture 2: Getting ready."
      },


      {
        id: "lecture-2",
        title: "Lecture 2: Getting ready",

        intro:
          "Before building your first model, make sure your MATLAB and Simulink environment is ready.",

        details:
          "This module uses only core MATLAB and Simulink. No additional toolboxes are required.",

        sections: [
          {
            heading: "Prerequisites",

            paragraphs: [
              "You should know basic MATLAB, including variables, vectors, plotting and writing a script.",
              "You should also be comfortable with first-year mechanics and calculus, including Newton's second law, differential equations and basic damping."
            ]
          },

          {
            heading: "MATLAB and Simulink",

            bullets: [
              "Core MATLAB and Simulink are sufficient for this module",
              "No additional toolboxes are required",
              "A college MATLAB licence may be available through your institution",
              "MATLAB Online can be useful if you are working on a low-specification laptop"
            ]
          },

          {
            heading: "Model compatibility",

            paragraphs: [
              "The models for the course are saved in an older release format so that they can open on a wide range of MATLAB versions."
            ]
          },

          {
            heading: "What you will download",

            bullets: [
              "Starter Simulink models",
              "Finished Simulink models",
              "MATLAB parameter scripts",
              "Broken models for debugging practice",
              "A one-page Simulink shortcuts and common-block cheat sheet"
            ]
          },

          {
            heading: "How to use the module",

            paragraphs: [
              "Work through the lessons in order.",
              "Complete the exercise for each lesson before moving on.",
              "Use the checks and auto-check scripts to confirm your understanding.",
              "Keep your models organised because the final project builds on the skills introduced throughout the module."
            ]
          }
        ],

        closing:
          "Your setup is ready. Open Lesson 1.1 to begin the main course content."
      }
    ],


    // ========================================================
    // LESSONS
    // ========================================================

    lessons: [

      {
        id: "lesson-1-1",
        title: "Lesson 1.1: Why Simulink, and where it sits in automotive development",

        duration: "≈ 30 min",

        status: "planned",

        description:
          "Understand why Simulink is used in automotive development and how it fits into the vehicle development process.",

        topics: [
          "The V-cycle in automotive: requirements, design, implementation and testing",
          "Model-in-the-loop (MIL)",
          "Software-in-the-loop (SIL)",
          "Hardware-in-the-loop (HIL)",
          "What employers expect from a model-based design engineer"
        ],

        output:
          "A one-page concept map, plus a 5-question check."
      },


      {
        id: "lesson-1-2",
        title: "Lesson 1.2: Your first Simulink model",

        duration: "≈ 60 min",

        status: "planned",

        description:
          "Build and run your first Simulink model using basic blocks, connections and a Scope.",

        topics: [
          "Opening Simulink",
          "The Library Browser",
          "Blocks, lines and ports",
          "Source blocks",
          "Math blocks",
          "Continuous blocks",
          "Sink blocks",
          "Constant",
          "Gain",
          "Sum",
          "Integrator",
          "Scope",
          "Running a simulation",
          "Reading the Scope"
        ],

        exercise:
          "Model a vehicle moving at constant speed and integrate the speed to obtain distance.",

        output:
          "L12_first_model.slx"
      },


      {
        id: "lesson-1-3",
        title: "Lesson 1.3: Signals, units and data types",

        duration: "≈ 45 min",

        status: "planned",

        description:
          "Learn how to keep Simulink models readable and avoid problems caused by unclear signals and units.",

        topics: [
          "Signal names",
          "Signal dimensions",
          "Sample time display",
          "Why units matter",
          "Using signal labels to keep models readable"
        ],

        exercise:
          "Convert km/h to m/s correctly inside a Simulink model."
      },


      {
        id: "lesson-1-4",
        title: "Lesson 1.4: Solvers and simulation settings",

        duration: "≈ 60 min",

        status: "planned",

        description:
          "Understand basic solver choices and how simulation settings affect model results.",

        topics: [
          "Fixed-step solvers",
          "Variable-step solvers",
          "Step size",
          "Stop time",
          "What changes when simulation settings are inappropriate"
        ],

        exercise:
          "Run the same model using three different step sizes and compare the results.",

        output:
          "A short written comparison table."
      },


      {
        id: "lesson-1-5",
        title: "Lesson 1.5: Modelling the plant: vehicle longitudinal speed",

        duration: "≈ 75 min",

        status: "planned",

        description:
          "Turn a basic automotive force-balance equation into a Simulink plant model for vehicle longitudinal speed.",

        topics: [
          "Traction force",
          "Aerodynamic drag",
          "Rolling resistance",
          "Force-balance equations",
          "Turning equations into Simulink blocks",
          "Open-loop step response",
          "Time constant"
        ],

        exercise:
          "Find the top speed for a given motor force.",

        output:
          "L15_vehicle_plant.slx"
      },


      {
        id: "lesson-1-6",
        title: "Lesson 1.6: Subsystems, parameters and MATLAB scripts",

        duration: "≈ 60 min",

        status: "planned",

        description:
          "Organise model logic into subsystems and use MATLAB scripts to define model parameters.",

        topics: [
          "Grouping logic into subsystems",
          "Masking basics",
          "Defining parameters in a MATLAB script",
          "Loading parameters into the model",
          "Sending results to the MATLAB workspace",
          "Plotting results in MATLAB"
        ],

        exercise:
          "Rewrite the Lesson 1.5 vehicle plant using a parameter script and a subsystem."
      },


      {
        id: "lesson-1-7",
        title: "Lesson 1.7: Debugging Simulink models",

        duration: "≈ 60 min",

        status: "planned",

        description:
          "Learn to identify and fix common problems that prevent a Simulink model from behaving correctly.",

        topics: [
          "Algebraic loops",
          "Unconnected ports",
          "Wrong units",
          "Solver failures",
          "Using the Simulation Data Inspector to compare runs"
        ],

        exercise:
          "Work through a broken-model pack containing five models with bugs to find and fix.",

        output:
          "A completed bug log."
      },


      {
        id: "lesson-1-8",
        title: "Lesson 1.8: Organising control models",

        duration: "≈ 60 min",

        status: "planned",

        description:
          "Bring the modelling skills together by organising a control model into clean, understandable subsystems.",

        topics: [
          "Subsystems for the plant",
          "Subsystems for the controller",
          "Subsystems for the reference",
          "Parameters in a MATLAB script",
          "Sending results to the MATLAB workspace",
          "Plotting results",
          "Using the Simulation Data Inspector to compare runs"
        ],

        exercise:
          "Restructure the Lesson 1.7 model into clean subsystems driven by a parameter script."
      },


      // ======================================================
      // MODULE PROJECT
      // ======================================================

      {
        id: "module-project",
        title: "Module Project: Quarter-car suspension",

        duration: "Module project",

        status: "planned",

        description:
          "Build a quarter-car suspension model driven by a road input representing a speed-breaker bump.",

        topics: [
          "Quarter-car suspension model",
          "Road input",
          "Speed-breaker bump",
          "Plotting model results",
          "Checking results against a target"
        ],

        output:
          "A completed quarter-car suspension model with plotted results checked against the target."
      },


      // ======================================================
      // ASSESSMENT
      // ======================================================

      {
        id: "assessment",
        title: "Module 1 Assessment",

        duration: "Throughout the module",

        status: "planned",

        description:
          "Use short checks and auto-check scripts to confirm that the models work and that the main concepts are understood.",

        topics: [
          "Short quiz after each lesson",
          "Auto-check script for Lesson 1.5",
          "Auto-check script for Lesson 1.6",
          "Auto-check script for Lesson 1.8",
          "Module project as a portfolio item"
        ],

        output:
          "Completed lesson checks, auto-check results and the Module 1 project."
      }
    ]
  }
];
```
