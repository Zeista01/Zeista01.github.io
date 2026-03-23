export const personalInfo = {
  name: "Aniket Kumar",
  title: "Robotics & Controls Engineer",
  tagline: "Building autonomous systems where math meets metal — from bipedal walkers to MPC-based quadruped locomotion.",
  email: "aniket21singh07@gmail.com",
  github: "https://github.com/Zeista01",
  linkedin: "https://www.linkedin.com/in/aniket-kumar-84829b2a7/",
  location: "Nagpur, India",
  resumeUrl: "#",
};

export const aboutText = {
  paragraphs: [
    "I'm a Mechanical Engineering student at VNIT Nagpur with a deep interest in robotics and autonomous systems. My work sits at the intersection of control theory, kinematics, and machine learning — building systems that can reason about and move through the physical world.",
    "I've worked on everything from scratch-built bipedal robots using inverse kinematics to MPC-based quadruped locomotion controllers inspired by MIT Cheetah 3 research. I'm drawn to problems where rigorous mathematics directly translates into real hardware behavior.",
    "Outside of robotics, I'm actively involved at IvLabs, VNIT's robotics research group, where I've conducted workshops and helped others get started with Python and OpenCV. I believe in learning by building, and I'm always working on something new.",
  ],
  stats: [
    { label: "Projects Built", value: "5+" },
    { label: "Hardware Platforms", value: "4+" },
    { label: "Certifications", value: "4" },
    { label: "Workshops Led", value: "2+" },
  ],
};

export const skills = {
  categories: [
    {
      name: "Control Systems",
      items: [
        { name: "LQR / MPC / PID", level: 88 },
        { name: "Convex QP Optimization", level: 80 },
        { name: "MATLAB / Simulink", level: 85 },
        { name: "State-Space Modeling", level: 82 },
        { name: "Trajectory Tracking", level: 85 },
      ],
    },
    {
      name: "Robotics",
      items: [
        { name: "Inverse Kinematics", level: 88 },
        { name: "Centroidal Dynamics", level: 78 },
        { name: "Gait & Contact Scheduling", level: 75 },
        { name: "Path Tracking (Pure Pursuit)", level: 80 },
        { name: "Lane Segmentation (U-Net)", level: 75 },
      ],
    },
    {
      name: "Programming",
      items: [
        { name: "Python", level: 88 },
        { name: "C / C++", level: 78 },
        { name: "MATLAB", level: 85 },
        { name: "PyTorch", level: 72 },
        { name: "OpenCV", level: 80 },
      ],
    },
    {
      name: "Hardware & Tools",
      items: [
        { name: "CARLA Simulator", level: 80 },
        { name: "Arduino / ESP32", level: 82 },
        { name: "Jetson Nano", level: 75 },
        { name: "PCA9685 Motor Control", level: 85 },
        { name: "Quanser QBot Platform", level: 78 },
      ],
    },
  ],
};

export const projects = [
  {
    title: "Quadruped MPC Locomotion Controller",
    description:
      "Implemented a centroidal dynamics–based convex QP MPC controller from scratch, taking reference from the MIT Cheetah 3 paper (Di Carlo et al., IROS 2018). Achieved stable trotting on flat ground and staircase climbing/descending with terrain-adaptive height control. Generated detailed response plots for GRF distribution, CoM height tracking, body orientation, contact scheduling, and force balance.",
    tags: ["Python", "MPC", "Convex QP", "Centroidal Dynamics", "Gait Planning", "IROS 2018"],
    image: "/images/featured/go2.png",
    github: "https://github.com/Zeista01/Dynamic_locomotion_through_convex_opt",
    demo: "",
    featured: true,
  },
  {
    title: "QBot Trajectory Tracking (LQR)",
    description:
      "Implemented an LQR controller for real-time trajectory tracking on a differential-drive QBot at IIT BHU. Developed the control strategy in MATLAB/Simulink to minimize state deviation and control effort, then validated through hardware experiments on the Quanser QBot platform using inverse kinematics for state estimation from encoder data.",
    tags: ["MATLAB", "Simulink", "LQR", "Differential Drive", "Quanser", "State Estimation"],
    image: "/images/featured/Qbot.png",
    github: "https://github.com/Zeista01/LQR-control-on-DDWMR",
    demo: "",
    featured: true,
  },
  {
    title: "ADAS Simulation (CARLA)",
    description:
      "Simulated Advanced Driver Assistance features in CARLA. Implemented Pure Pursuit path-tracking for smooth trajectory following and Car Following logic for safe inter-vehicle spacing. Built a Lane Segmentation model using U-Net architecture for real-time lane detection.",
    tags: ["CARLA", "Python", "Pure Pursuit", "U-Net", "Lane Segmentation", "ADAS"],
    image: "/images/featured/Carla.png",
    github: "https://github.com/Zeista01/Advanced-Driving-Assistance-System-",
    demo: "",
    featured: true,
  },
  {
    title: "Bipedal Robot",
    description:
      "Built a bipedal robot using inverse kinematics with PCA9685 servo motor control. Developed a stabilization algorithm targeting center-of-mass (CoM) balance. Simulated and validated walking patterns in both Python and MATLAB before deploying to hardware. Showcased at the C.V. Raman Expo.",
    tags: ["Python", "MATLAB", "Inverse Kinematics", "PCA9685", "COM Stabilization"],
    image: "/images/featured/Biped.jpg",
    github: "https://github.com/Zeista01/Bipedal-Robot",
    demo: "",
    featured: true,
  },
];

export const sideProjects = [
  {
    title: "Inverted Pendulum Control Playground (LQR vs MPC vs PID)",
    description:
      "Built a browser-native control-systems simulator for the cart-pole problem with real-time controller switching, state visualization, and live gain tuning. Implemented nonlinear RK4 physics, LQR with CARE-based gain computation, finite-horizon MPC with receding-horizon optimization, and dual-loop PID with anti-windup, then benchmarked all three controllers side-by-side.",
    tags: ["JavaScript", "Canvas", "Control Theory", "LQR", "MPC", "PID"],
    image: "/images/side-projects/inverted_pendulum.png",
    github: "https://github.com/Zeista01/cart_pole-demo",
    demo: "https://zeista01.github.io/cart_pole-demo/",
  },
  {
    title: "Algae Cleaning Bot (Ongoing)",
    description:
      "Developing an Algae Cleaning Bot under the Capacity Building on Design and Entrepreneurship (CBDE) program, a specialized initiative by the Indian Ministry of Education to foster design thinking and entrepreneurship in HEIs. Secured funding of Rs. 58,000 and actively developing the prototype, including mechanism iteration, system integration, and real-world validation planning.",
    tags: ["Robotics", "CBDE", "Product Development", "Prototype", "Design Thinking", "Entrepreneurship"],
    image: "/images/side-projects/algae_bot.jpg",
    github: "",
    demo: "",
  },
];

export const experience = [
  {
    role: "Robotics Research Intern",
    company: "IIT BHU — QBot LQR Project",
    period: "May 2025 — June 2025",
    description:
      "Implemented an LQR controller for real-time trajectory tracking on a differential drive QBot. Developed and tuned the full control strategy in MATLAB/Simulink, minimizing state deviation and control effort across diverse trajectories. Verified controller performance through rigorous hardware experiments on the Quanser QBot platform and used inverse kinematics for accurate state estimation from wheel encoder data.",
    tech: ["MATLAB", "Simulink", "LQR", "Quanser QBot", "Inverse Kinematics", "Embedded Control"],
  },
  {
    role: "Project Head",
    company: "IvLabs — VNIT Nagpur",
    period: "2023 — Present",
    description:
      "Project Head of IvLabs, VNIT's robotics research group. Conducted Python and OpenCV workshops for incoming freshers, introducing them to computer vision fundamentals. Showcased the Bipedal Robot at the C.V. Raman Expo, demonstrating inverse kinematics and COM-based stabilization to a broad technical audience.",
    tech: ["Python", "OpenCV", "Robotics", "Workshops", "Bipedal Robot"],
  },
];

export const publications = [
  {
    title: "Modern Robotics, Course 1: Foundations of Robot Motion",
    venue: "Northwestern University — Coursera",
    link: "#",
  },
  {
    title: "Control Bootcamp",
    venue: "Prof. Steve Brunton — University of Washington",
    link: "#",
  },
  {
    title: "Stanford EE364A — Convex Optimization I",
    venue: "Prof. Stephen Boyd — Stanford University",
    link: "#",
  },
  {
    title: "Photogrammetry",
    venue: "Prof. Cyrill Stachniss — University of Bonn",
    link: "#",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Side Projects", href: "#side-projects" },
  { label: "Certifications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];
