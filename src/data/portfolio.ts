// ─────────────────────────────────────────────────────────────
//  Everything on the site comes from this one file.
//  Edit the text here and the whole portfolio updates.
// ─────────────────────────────────────────────────────────────

export interface NavItem {
  id: string
  label: string
}

export interface Stat {
  label: string
  value: number
  suffix?: string
  decimals?: number
}

export interface SkillGroup {
  title: string
  blurb: string
  skills: string[]
}

export interface ExperienceItem {
  role: string
  org: string
  period: string
  points: string[]
}

export interface Project {
  title: string
  category: string
  filterCategory: 'Web' | 'AI' | 'Creative' | 'Mobile'
  description: string
  tech: string[]
  image: string
  githubUrl?: string
  liveUrl: string
  watchUrl?: string
}

export interface ResumeTimelineItem {
  title: string
  organization: string
  period: string
  details?: string[]
}

export const profile = {
  name: 'Heshanthi',
  headline: 'Full-stack developer building for the web, computer vision and AI.',
  intro:
    'I turn ideas into fast, well-animated software, from face recognition systems to blockchain apps and web platforms.',
  // TODO: replace these three with your real contact details.
  email: 'heshanthiprasangika10@gmail.com',
  github: 'https://github.com/heshanthiprasangika10-debug',
  linkedin: 'https://www.linkedin.com/in/heshanthi-prasangika-1610382a3/',
  // Put your photo in the /public folder and set it here, for example '/me.jpg'.
  photo: '/me.jpg',
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'resume', label: 'Resume' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const resume = {
  cvPath: '/Heshanthi_Prasangika_CV.pdf',
  name: 'Heshanthi Prasangika',
  headline: 'Full-Stack Developer | IT Undergraduate',
  location: 'Matara, Sri Lanka',
  links: {
    linkedin: 'https://www.linkedin.com/in/heshanthi-prasangika-1610382a3/',
    github: 'https://github.com/heshanthiprasangika10-debug',
    email: 'heshanthiprasangika10@gmail.com',
  },
  summary:
    'HND in Information Technology undergraduate at SLIATE, ATI Galle, and Software Engineering Trainee, with hands-on experience in full-stack web and mobile development using React, Java, Next.js, Flutter, Firebase and MySQL.',
  skillGroups: [
    { title: 'Languages', skills: ['Java', 'JavaScript', 'TypeScript', 'C#', 'PHP', 'Hack', 'Dart', 'Python'] },
    { title: 'Frontend', skills: ['React.js', 'Angular', 'Tailwind CSS', 'Blade', 'Flask Jinja2', 'HTML'] },
    { title: 'Backend', skills: ['Firebase', 'Laravel', 'Django', 'Node.js'] },
    { title: 'Databases', skills: ['PostgreSQL', 'Supabase', 'Firebase', 'MySQL'] },
    { title: 'Tools', skills: ['Git', 'GitHub', 'VS Code', 'Android Studio'] },
    { title: 'Mobile', skills: ['Flutter', 'React Native'] },
    { title: 'AI & Data', skills: ['Computer Vision', 'NumPy'] },
  ],
  experience: [
    {
      title: 'Software Engineering Trainee',
      organization: 'NGJA',
      period: 'Present · ~6 months',
    },
    {
      title: 'Computer Operator',
      organization: 'University of Ruhuna',
      period: '2022–2023',
      details: [
        'Coordinated staff and student communication.',
        'Managed administrative tasks under deadlines.',
        'Improved the filing system.',
        'Handled data entry and record management.',
      ],
    },
  ] satisfies ResumeTimelineItem[],
  education: [
    {
      title: 'Higher National Diploma in Information Technology',
      organization: 'SLIATE ATI Galle',
      period: '2024–Present',
    },
    {
      title: 'G.C.E. Advanced Level',
      organization: '',
      period: '2021/2022',
      details: ['IT – C', 'Media – B', 'Logic and Scientific Method – C'],
    },
    {
      title: 'G.C.E. Ordinary Level',
      organization: '',
      period: '2018',
      details: ['1A, 2B, C5, 1S'],
    },
  ] satisfies ResumeTimelineItem[],
  certifications: ['Personal Secretary Course · NAITA', 'IT Course · Open University'],
  languages: ['Sinhala · Native', 'English · Professional Working Proficiency'],
}

export const about: string[] = [
  "I'm finishing my HND in Information Technology at SLIATE, Galle, and I love building things that work well and feel good to use.",
  'My final year project is a face recognition attendance system. Alongside it I have built an air-writing tool driven by hand tracking, a bus booking platform and a Snake game that teaches itself to play.',
  'I also have professional experience as a Computer Operator at the University of Ruhuna, which taught me to keep details organised and to think about the people who use what I build.',
]

export const stats: Stat[] = [
  { label: 'GPA out of 4.0', value: 3.8, decimals: 1 },
  { label: 'Projects built', value: 10, suffix: '+' },
  { label: 'Technologies used', value: 15, suffix: '+' },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    blurb: 'Responsive interfaces with motion that has a purpose.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Angular', 'Vite', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend and data',
    blurb: 'Servers, APIs and databases behind the screen.',
    skills: ['PHP', 'Java', 'C#', 'Python', 'Flask', 'MySQL', 'Supabase', 'PostgreSQL', 'Laravel'],
  },
  {
    title: 'AI and vision',
    blurb: 'Teaching software to see, track and learn.',
    skills: ['OpenCV', 'MediaPipe', 'dlib', 'PyTorch', 'Reinforcement learning'],
  },
  {
    title: 'Tools',
    blurb: 'How I ship and keep work organised.',
    skills: ['Git and GitHub', 'VS Code', 'WAMP','XAMPP', 'Firebase', 'Solidity', 'Hardhat'],
  },
]

// Newest first. Check the dates and bullet points so they match your real record.
export const experience: ExperienceItem[] = [
  {
    role: 'Software development intern',
    org: 'NGJA',
    period: '2026',
    points: [
      'Built the Agreement and Warranty Manager in PHP and MySQL, including reminder emails before agreements expire.',
      'Worked on an action plan explorer that merges two Excel files into one searchable, filterable system.',
    ],
  },
  {
    role: 'HND in Information Technology',
    org: 'SLIATE Advanced Technological Institute, Galle',
    period: 'Final year',
    points: [
      'GPA of about 3.8 out of 4.0.',
      'Final year project: a face recognition attendance system.',
      'Coursework across Java, Python, PHP, C#, MySQL and web technologies.',
    ],
  },
  {
    role: 'Computer Operator',
    org: 'University of Ruhuna',
    period: 'Earlier career',
    points: [
      'Supported day-to-day administration, records and correspondence.',
      'Worked with staff and students to keep processes running smoothly.',
      'Handled data entry and record management, keeping information accurate and easy to find.',
      'Reorganised digital and physical records to make filing faster.'
    ],
  },
  {
    role: 'Professional courses',
    org: 'Open University of Sri Lanka and NAITA',
    period: 'Certificates',
    points: ['IT course, Open University of Sri Lanka.', 'Personal Secretary course, NAITA.'],
  },
]

function escapeSvgText(value: string) {
  return value.replace(/[&<>"]/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
    }
    return entities[character]
  })
}

function projectPlaceholder(title: string, category: string, accent: string) {
  const shortTitle = title.length > 35 ? `${title.slice(0, 32)}...` : title
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450">
    <defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="#15383d"/><stop offset="1" stop-color="#061013"/></linearGradient></defs>
    <rect width="800" height="450" fill="url(#bg)"/>
    <path d="M0 360 800 100M0 420 800 160" stroke="${accent}" stroke-opacity=".14" stroke-width="2"/>
    <circle cx="665" cy="130" r="95" fill="${accent}" fill-opacity=".08"/>
    <circle cx="665" cy="130" r="64" fill="none" stroke="${accent}" stroke-opacity=".4"/>
    <path d="M30 30h48M30 30v48M770 420h-48M770 420v-48" fill="none" stroke="${accent}" stroke-width="3"/>
    <text x="54" y="286" fill="#9fb3b1" font-family="Arial,sans-serif" font-size="18" letter-spacing="4">${escapeSvgText(category.toUpperCase())}</text>
    <text x="54" y="335" fill="#efe6d6" font-family="Georgia,serif" font-size="30">${escapeSvgText(shortTitle)}</text>
  </svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

// TODO: Replace the temporary GitHub profile links with each project's repository URL.
// TODO: Fill in tech for entries with an empty list; do not infer missing stacks.
export const projects: Project[] = [
  {
    title: 'TripLink – Bus Seat Booking System',
    category: 'Full-Stack Web',
    filterCategory: 'Web',
    description:
      'A full-stack bus seat booking system for Sri Lanka where passengers can search routes and book seats online. Includes route and schedule management, real-time seat selection and booking management.',
    tech: [],
    image: projectPlaceholder('TripLink – Bus Seat Booking System', 'Full-Stack Web', '#6fa8a6'),
    githubUrl: 'https://github.com/heshanthiprasangika10-debug',
    liveUrl: 'https://github.com/heshanthiprasangika10-debug/triplink-bus-booking',
  },
  {
    title: 'IntelliDesk – AI-Powered Office Helpdesk & Employee Management System',
    category: 'AI / Web Application',
    filterCategory: 'AI',
    description:
      'An AI-powered office helpdesk system for submitting, tracking and resolving support requests, combined with employee management features.',
    tech: [],
    image: projectPlaceholder(
      'IntelliDesk – AI-Powered Office Helpdesk & Employee Management System',
      'AI / Web Application',
      '#ff9d4d',
    ),
    githubUrl: 'https://github.com/heshanthiprasangika10-debug',
    liveUrl: 'https://github.com/heshanthiprasangika10-debug/IntelliDesk',
  },
  {
    title: 'Air Writing AI – Real-Time Computer Vision Project',
    category: 'AI / Computer Vision',
    filterCategory: 'AI',
    description:
      'A real-time air-writing system that tracks hand movements through a camera and converts the gestures into written text, using computer vision and machine learning concepts.',
    tech: [],
    image: projectPlaceholder('Air Writing AI – Real-Time Computer Vision Project', 'AI / Computer Vision', '#ff9d4d'),
    githubUrl: 'https://github.com/heshanthiprasangika10-debug',
    liveUrl: 'https://github.com/heshanthiprasangika10-debug/air_writing-AI-project',
  },
  {
    title: 'StockPro – Inventory Management System',
    category: 'Web Application',
    filterCategory: 'Web',
    description:
      'An inventory management system to track products, stock levels and stock movements, with stock-in/stock-out records and reporting features.',
    tech: [],
    image: projectPlaceholder('StockPro – Inventory Management System', 'Web Application', '#6fa8a6'),
    githubUrl: 'https://github.com/heshanthiprasangika10-debug',
    liveUrl: 'https://github.com/heshanthiprasangika10-debug/Inventory',
  },
  {
    title: 'AromaBistro – Restaurant Management & Ordering System',
    category: 'Web Application',
    filterCategory: 'Web',
    description:
      'A restaurant management and ordering system covering menu management and customer order processing.',
    tech: [],
    image: projectPlaceholder('AromaBistro – Restaurant Management & Ordering System', 'Web Application', '#6fa8a6'),
    githubUrl: 'https://github.com/heshanthiprasangika10-debug',
    liveUrl: 'https://github.com/heshanthiprasangika10-debug/aromabistro',
  },
  {
    title: 'Library Management System',
    category: 'Web Application',
    filterCategory: 'Web',
    description:
      'A web-based Library Management System to manage books, members and borrowing records, including issue/return tracking.',
    tech: [],
    image: projectPlaceholder('Library Management System', 'Web Application', '#6fa8a6'),
    githubUrl: 'https://github.com/heshanthiprasangika10-debug',
    liveUrl: 'https://github.com/heshanthiprasangika10-debug/Library-Management-System',
  },
  {
    title: 'Student Management System',
    category: 'Web Application',
    filterCategory: 'Web',
    description: 'A web-based Student Management System to manage student records and academic details.',
    tech: [],
    image: projectPlaceholder('Student Management System', 'Web Application', '#6fa8a6'),
    githubUrl: 'https://github.com/heshanthiprasangika10-debug',
    liveUrl: 'https://github.com/heshanthiprasangika10-debug/student-management',
  },
  {
    title: 'LMS – Learning Management System (Team Project)',
    category: 'Web Application',
    filterCategory: 'Web',
    description:
      'A web-based LMS built with PHP, MySQL, HTML, CSS and JavaScript by a team of 5 using Git, with user authentication, course enrolment and assignment submission.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Git'],
    image: projectPlaceholder('LMS – Learning Management System (Team Project)', 'Web Application', '#6fa8a6'),
    githubUrl: 'https://github.com/heshanthiprasangika10-debug',
    liveUrl: 'https://www.linkedin.com/posts/heshanthi-prasangika-1610382a3_webdevelopment-lms-html-ugcPost-7505142503596068864-sgV7/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEknWdkBKpIqj9baqwgYHas6_hv7Cm81Xyw',
  },
  {
    title: 'Face Recognition System',
    category: 'Python / AI',
    filterCategory: 'AI',
    description:
      'A real-time face detection and recognition system built with Python and OpenCV, applying machine learning concepts for image processing and user identification.',
    tech: ['Python', 'OpenCV'],
    image: projectPlaceholder('Face Recognition System', 'Python / AI', '#ff9d4d'),
    githubUrl: 'https://github.com/heshanthiprasangika10-debug',
    liveUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7506726574788890624/',
  },
  {
    title: 'Cupcake Website – E-Commerce Project',
    category: 'Web Application',
    filterCategory: 'Web',
    description:
      'A responsive online bakery website with a MySQL database for product management and order processing.',
    tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
    image: projectPlaceholder('Cupcake Website – E-Commerce Project', 'Web Application', '#6fa8a6'),
    githubUrl: 'https://github.com/heshanthiprasangika10-debug',
    liveUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7507459549814034432/',
  },
  
  {
    title: 'Sinhala Speech-to-Text System (Katha)',
    category: 'Python / AI',
    filterCategory: 'AI',
    description:
      'A Sinhala speech-to-text system built around a Whisper-small model fine-tuned on Sinhala. A FastAPI backend serves the transcriptions, and a browser interface called Katha lets you upload or record audio, read the transcript and copy it. Supports mp3, m4a and webm through ffmpeg.',
    tech: ['Python', 'Whisper', 'FastAPI', 'ffmpeg'],
    image: projectPlaceholder('Sinhala Speech-to-Text System', 'Python / AI', '#6fa8a6'),
    githubUrl: 'https://github.com/heshanthiprasangika10-debug',
    liveUrl: 'https://github.com/heshanthiprasangika10-debug/sinhala-stt-system',
  },
  {
    title: 'Short Film: Digital Divide – Group Project',
    category: 'Creative / Video',
    filterCategory: 'Creative',
    description:
      'A short film directed and produced by our group, highlighting the social impact of technology gaps. I managed the timeline, script development and team coordination.',
    tech: [],
    image: projectPlaceholder('Short Film: Digital Divide – Group Project', 'Creative / Video', '#ff9d4d'),
    githubUrl: '',
    liveUrl: '',
    watchUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7474853738361286657/',
  },
  {
    title: 'Quizzy – Android Quiz App',
    category: 'Mobile App',
    filterCategory: 'Mobile',
    description:
      'An interactive Android quiz app with a user-friendly interface that helps users test and improve their knowledge. Built by our group for the Mobile Application Development module using Kotlin, Firebase and SQLite.',
    tech: ['Kotlin', 'Android Studio', 'Firebase', 'SQLite'],
    image: projectPlaceholder('Quizzy – Android Quiz App', 'Mobile App', '#ff9d4d'),
    githubUrl: 'https://github.com/heshanthiprasangika10-debug',
    liveUrl:
      '',
    watchUrl:
      'https://www.linkedin.com/feed/update/urn:li:activity:7505144728762437632/',
  },
]
