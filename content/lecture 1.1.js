// Module 1 overview content: Simulink Fundamentals for Automotive
// Each lecture's `html` field is a ready-to-insert HTML string (e.g. element.innerHTML = lecture.html).

const module1 = {
  id: "module-1",
  title: "Module 1: Simulink Fundamentals for Automotive",
  intro:
    "This module opens with two short lectures. Lecture 1 shows you what you'll learn and why it matters. Lecture 2 gets you ready to start.",

  lectures: [
    {
      id: "1-overview-1",
      title: "Lecture 1: Welcome to Module 1",
      html: `
<p>Learn to build your first working vehicle model in Simulink, close a control loop around it, and find the faults that break real models.</p>

<table>
  <tbody>
    <tr><th>Time</th><td>About 8 hours, over one week</td></tr>
    <tr><th>Level</th><td>Beginner. No Simulink experience needed</td></tr>
    <tr><th>Format</th><td>Written lessons, annotated screenshots and downloadable models</td></tr>
    <tr><th>Software</th><td>MATLAB and Simulink. No extra toolboxes</td></tr>
  </tbody>
</table>

<h3>Why this module matters</h3>
<p>Carmakers and EV companies design their control software in Simulink long before any code reaches a vehicle. They build a model, test it on a computer, and only then move to hardware. This approach is called model-based design, and it is one of the most asked-for skills in automotive engineering jobs.</p>
<p>This module gives you the foundation. You won't just learn where the blocks are. You'll build a model of a vehicle, put a controller on it, and learn how to tell when a model is wrong.</p>

<h3>What you'll be able to do</h3>
<p>By the end of this module, you can:</p>
<ul>
  <li>Build, run and read a Simulink model using the core blocks</li>
  <li>Choose sensible solver and step-size settings, and explain what happens when they are wrong</li>
  <li>Turn a vehicle equation into a working Simulink model</li>
  <li>Close a feedback loop and tune a PID controller against clear targets</li>
  <li>Organise a model into subsystems and drive it from a MATLAB script</li>
  <li>Find and fix common model faults, such as algebraic loops and unit mistakes</li>
  <li>Explain where model-based design fits in a vehicle development process</li>
</ul>

<p>That's what the module covers. In the next lecture, you'll set up everything you need to start.</p>
`
    },

    {
      id: "1-overview-2",
      title: "Lecture 2: Getting ready",
      html: `
<p>You now know what this module teaches and why it matters. This lecture covers what you need before the first lesson.</p>

<h3>Before you start</h3>
<p><strong>You should already know</strong></p>
<ul>
  <li>Basic MATLAB: variables, vectors, plotting, writing a short script. If you need a refresher, use the free one-page Module 0 guide.</li>
  <li>First-year mechanics and calculus: Newton's second law and simple differential equations.</li>
</ul>
<p><strong>You don't need</strong></p>
<ul>
  <li>Any earlier Simulink experience</li>
  <li>Control theory. The ideas are introduced when you need them.</li>
  <li>Extra toolboxes. Core MATLAB and Simulink are enough.</li>
</ul>

<h3>Getting the software</h3>
<p>Pick whichever option works for you:</p>
<ul>
  <li><strong>Your college licence:</strong> many colleges hold a campus-wide MATLAB licence. Check with your department or computer centre; a short guide in the module shows how to activate it.</li>
  <li><strong>MATLAB Online:</strong> runs in your browser, so it works on a low-spec laptop. Free usage hours are limited, so check MathWorks' current terms.</li>
  <li><strong>Version note:</strong> all models are saved in an older release format so they open on most versions.</li>
</ul>

<h3>What you'll download</h3>
<ul>
  <li>Starter and finished Simulink models (<code>.slx</code>) for each lesson</li>
  <li>MATLAB scripts (<code>.m</code>) with the parameters used in the models</li>
  <li>A one-page cheat sheet of Simulink shortcuts and common blocks (PDF)</li>
</ul>

<h3>How to get the most from this module</h3>
<ul>
  <li>There are no videos. Read at your own pace and keep Simulink open beside the lesson.</li>
  <li>Build every model yourself before opening the finished version.</li>
  <li>Note down the mistakes you make. Each one you record is one you'll spot faster next time.</li>
</ul>

<p><strong>You're ready. Open Lesson 1.1 to begin.</strong></p>
`
    }
  ],

  lessons: [
    {
      id: "1-1",
      number: "1.1",
      title: "Why Simulink, and where it sits in automotive development",
      minutes: 30,
      level: "Beginner",
      software: "None needed for this lesson",

      // 1. GOAL (2 min)
      goal: `
<p>By the end of this lesson, you can:</p>
<ul>
  <li>Explain, in simple words, where Simulink fits in developing a vehicle</li>
  <li>Describe the V-cycle used in automotive development</li>
  <li>Tell MiL, SiL and HiL apart</li>
  <li>Name the skills expected from a model-based design engineer</li>
</ul>
`,

      // 2. CONCEPT (16 min)
      concept: `
<h4>Why engineers use Simulink (2 min)</h4>
<p>A modern vehicle has many control systems: motor control, battery management, braking, and more. Testing every new idea on a real vehicle is slow, expensive and sometimes unsafe.</p>
<p>So engineers first build a <strong>model</strong>: a mathematical copy of the system that runs on a computer. They test the idea there, fix problems early, and only then move to real hardware. Simulink is a tool for building and running such models. Designing and testing this way is called <strong>model-based design (MBD)</strong>.</p>

<h4>The V-cycle (5 min)</h4>
<p>Automotive companies follow a structured process so that nothing is forgotten. It is drawn as a "V" and called the <strong>V-cycle</strong>.</p>
<pre>
 Requirements  ·····················  Acceptance testing
      \\                                      /
       System design  ···········  System testing
            \\                            /
             Software design  ·····  Software testing
                  \\                  /
                    Implementation
</pre>
<p>How to read it:</p>
<ul>
  <li><strong>Going down the left side</strong>, you start with <em>what the vehicle must do</em> (requirements) and break it into smaller design pieces.</li>
  <li><strong>At the bottom</strong>, you build it (implementation).</li>
  <li><strong>Going up the right side</strong>, you test it, level by level.</li>
  <li><strong>The dotted lines</strong> show that every test checks something defined on the left. Software testing checks the software design. System testing checks the system design. Acceptance testing checks the original requirements.</li>
</ul>
<p>Three ideas to remember:</p>
<ol>
  <li><strong>Every test has a purpose.</strong> You always test against something written earlier.</li>
  <li><strong>Late problems are expensive.</strong> A fault found on a finished vehicle costs far more than one found on a computer.</li>
  <li><strong>It is not a one-way trip.</strong> When a test fails, you go back, fix the design, and test again.</li>
</ol>
<p>Simulink sits in the middle of this picture. The model is used to <strong>design</strong> the controller and also to <strong>test</strong> it early, long before hardware exists.</p>

<h4>MiL, SiL and HiL (5 min)</h4>
<p>The right side of the V has several kinds of testing. Three are used so often in automotive that they have short names. The idea is a steady progression: <strong>Model &rarr; Software &rarr; Hardware</strong>.</p>
<table>
  <thead><tr><th>Short name</th><th>Full name</th><th>What is being tested</th><th>Simple idea</th></tr></thead>
  <tbody>
    <tr><td><strong>MiL</strong></td><td>Model-in-the-Loop</td><td>The model of the controller</td><td>"Does my control idea work?"</td></tr>
    <tr><td><strong>SiL</strong></td><td>Software-in-the-Loop</td><td>The actual software code, running on a computer</td><td>"Does the real code behave like my model?"</td></tr>
    <tr><td><strong>HiL</strong></td><td>Hardware-in-the-Loop</td><td>The real controller hardware, connected to a simulated vehicle</td><td>"Does the real controller work, even in dangerous situations?"</td></tr>
  </tbody>
</table>
<p>In all three, the controller is tested inside a "loop": it receives signals, makes decisions, and sends outputs back to a simulated vehicle or battery.</p>
<p>Why HiL matters: you can test things that would be risky on a real vehicle, such as sensor failures or extreme temperatures, without any danger to people or equipment.</p>
<p>You may also hear <strong>PiL</strong> (processor-in-the-loop). You don't need it yet.</p>

<h4>What employers expect (4 min)</h4>
<p>Job advertisements for model-based design roles commonly ask for the skills below. You will practise many of them across Module 1.</p>
<table>
  <thead><tr><th>Skill</th><th>In plain words</th></tr></thead>
  <tbody>
    <tr><td>Understanding requirements</td><td>Read what the system must do and turn it into something you can build and test</td></tr>
    <tr><td>Building clear Simulink models</td><td>Models that other engineers can read and follow</td></tr>
    <tr><td>Working with signals and data</td><td>Know what each signal means, its unit, and its range</td></tr>
    <tr><td>Running simulations</td><td>Choose sensible settings and read the results</td></tr>
    <tr><td>Debugging models</td><td>Find out why a model behaves wrongly, and fix it</td></tr>
    <tr><td>Organising models and parameters</td><td>Keep models tidy, so they can be reused and changed safely</td></tr>
    <tr><td>Testing and verification</td><td>Show with evidence that the model meets the requirements</td></tr>
    <tr><td>Communicating decisions</td><td>Explain what you built and why, in writing and in meetings</td></tr>
  </tbody>
</table>
<p>Skills in this list come up again and again, but exact requirements differ between companies. A good habit is to read a few real job advertisements, as you'll do in the exercise.</p>
`,

      // 3. WALKTHROUGH (5 min)
      walkthrough: `
<p>To see how everything connects, follow one example feature from idea to finished vehicle. The example is <strong>battery over-temperature protection</strong>: reduce the motor's power when the battery gets too hot. The numbers below are made up for learning.</p>
<table>
  <thead><tr><th>V-cycle stage</th><th>What happens for this feature</th></tr></thead>
  <tbody>
    <tr><td>1. Requirements</td><td>"If battery temperature goes above 55 &deg;C, limit motor torque to 50% within 1 second."</td></tr>
    <tr><td>2. System design</td><td>Decide the signals: battery temperature is the input, torque limit is the output. Decide which control unit handles it.</td></tr>
    <tr><td>3. Software and model design</td><td>Build a Simulink model that takes temperature in and gives a torque limit out.</td></tr>
    <tr><td>4. <strong>MiL test</strong></td><td>Run the model with temperature rising from 40 &deg;C to 65 &deg;C. Check that the torque limit drops to 50% in time.</td></tr>
    <tr><td>5. Implementation</td><td>Code is created from the model for the real controller.</td></tr>
    <tr><td>6. <strong>SiL test</strong></td><td>Run the code on a computer with the same test signals. The results should match the MiL results.</td></tr>
    <tr><td>7. <strong>HiL test</strong></td><td>Load the code on the real controller. A simulated battery and vehicle supply the signals. Test extreme cases, such as a faulty temperature sensor.</td></tr>
    <tr><td>8. Vehicle test</td><td>Final checks on a real vehicle, against the original requirement.</td></tr>
  </tbody>
</table>
<p>Notice what the model gave you: you found most problems in steps 4 to 6, long before touching a real battery.</p>
`,

      // 4. DOWNLOADS (set `file` once the PDFs exist)
      downloads: [
        {
          title: "Concept map template",
          type: "PDF",
          file: "",
          note: "A blank page with three branches to fill in"
        },
        {
          title: "One-page summary",
          type: "PDF",
          file: "",
          note: "The V-cycle and MiL/SiL/HiL on one sheet, for quick revision"
        }
      ],
      downloadsNote: "No Simulink model is needed in this lesson.",

      // 5. EXERCISE (5 min)
      exercise: {
        title: "Draw your one-page concept map",
        html: `
<ol>
  <li>Open the concept map template. The centre says "Automotive model-based design". The three branches are <strong>The V-cycle</strong>, <strong>Testing stages</strong> and <strong>The engineer</strong>.</li>
  <li>Under each branch, write at least three items in your own words, such as stages, terms, or skills.</li>
  <li>Check yourself: can you explain each branch aloud in one minute?</li>
</ol>
<p><strong>Optional extension:</strong> Pick one vehicle function you know, such as regenerative braking, and write one sentence for how it would pass through each stage of the V. Then read two or three real job advertisements for model-based design roles and underline the skills from the employer table.</p>
`,
        sampleAnswerHtml: `
<ul>
  <li><strong>The V-cycle:</strong> requirements, system design, software design, implementation, testing, feedback if tests fail</li>
  <li><strong>Testing stages:</strong> MiL (model), SiL (software on a computer), HiL (real hardware with a simulated vehicle)</li>
  <li><strong>The engineer:</strong> builds models, understands signals, debugs, tests against requirements, explains decisions</li>
</ul>
`
      },

      // 6. CHECK (2 min)
      check: {
        questions: [
          {
            id: "q1",
            question: "What is the purpose of the V-cycle?",
            options: [
              { id: "A", text: "To list the parts of a vehicle" },
              { id: "B", text: "To organise development so that each design stage has a matching test stage" },
              { id: "C", text: "To describe the shape of a vehicle body" },
              { id: "D", text: "To measure engine power" }
            ],
            answer: "B",
            explanation: "The V-cycle matches each design stage on the left with a test stage on the right."
          },
          {
            id: "q2",
            question: "What does MiL mean?",
            options: [
              { id: "A", text: "Motor-in-the-Loop" },
              { id: "B", text: "Machine-in-the-Loop" },
              { id: "C", text: "Model-in-the-Loop" },
              { id: "D", text: "Memory-in-the-Loop" }
            ],
            answer: "C",
            explanation: "MiL is Model-in-the-Loop, testing the control idea using a model."
          },
          {
            id: "q3",
            question: "What is the main difference between SiL and HiL?",
            options: [
              { id: "A", text: "SiL tests only on a real vehicle, HiL only on paper" },
              { id: "B", text: "SiL runs the software on a computer, HiL runs it on real controller hardware" },
              { id: "C", text: "SiL is for batteries, HiL is for motors" },
              { id: "D", text: "There is no difference" }
            ],
            answer: "B",
            explanation: "SiL tests software on a computer; HiL tests the real controller hardware connected to a simulated vehicle."
          },
          {
            id: "q4",
            question: "Why are models useful before physical testing?",
            options: [
              { id: "A", text: "They remove the need for any later testing" },
              { id: "B", text: "They are only needed for documents" },
              { id: "C", text: "Problems can be found early, safely and cheaply" },
              { id: "D", text: "They make the vehicle lighter" }
            ],
            answer: "C",
            explanation: "Models let you find problems early, without risk, and repeat tests quickly. Later testing is still needed."
          },
          {
            id: "q5",
            question: "Which two skills are expected from a model-based design engineer?",
            options: [
              { id: "A", text: "Welding and painting" },
              { id: "B", text: "Building clear Simulink models and debugging" },
              { id: "C", text: "Tyre fitting and wheel balancing" },
              { id: "D", text: "Sales and invoicing" }
            ],
            answer: "B",
            explanation: "Building clear models and debugging are core skills. Other skills are in the employer table."
          }
        ]
      },

      next: "Lesson 1.2, where you open Simulink and build your first model."
    }
  ]
};
