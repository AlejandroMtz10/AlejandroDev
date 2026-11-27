export type ProjectCategory = "web" | "desktop" | "lowcode";

export interface ProjectTech {
  name: string;
  icon: string;
  colorClass?: string;
}

export interface ProjectItem {
  key: string;
  category: ProjectCategory;
  picture: string;
  github?: string;
  sortDate: string; // YYYY-MM for chronological sorting
  stack: ProjectTech[];
}

export const PROJECTS: ProjectItem[] = [
  {
    key: "faceFrames",
    category: "web",
    picture: "/images/projects/Face-Frames.webp",
    github: "https://github.com/AlejandroMtz10/Face-Frames",
    sortDate: "2025-12",
    stack: [
      { name: "React", icon: "devicon:react" },
      { name: "Vite", icon: "devicon:vitejs" },
      { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
      { name: "JavaScript", icon: "devicon:javascript" },
      { name: "HTML", icon: "devicon:html5" },
      { name: "CSS", icon: "devicon:css3" },
      { name: "JSON", icon: "devicon:json" },
      { name: "Git", icon: "devicon:git" },
      { name: "GitHub", icon: "simple-icons:github", colorClass: "text-slate-900 dark:text-white" },
    ],
  },
  {
    key: "acaaz",
    category: "web",
    picture: "/images/projects/Acaaz.webp",
    sortDate: "2025-06",
    stack: [
      { name: "PHP", icon: "devicon:php" },
      { name: "JavaScript", icon: "devicon:javascript" },
      { name: "jQuery", icon: "devicon:jquery" },
      { name: "Bootstrap", icon: "devicon:bootstrap" },
      { name: "HTML", icon: "devicon:html5" },
      { name: "CSS", icon: "devicon:css3" },
      { name: "MySQL", icon: "devicon:mysql" },
      { name: "Git", icon: "devicon:git" },
      { name: "GitHub", icon: "simple-icons:github", colorClass: "text-slate-900 dark:text-white" },
    ],
  },
  {
    key: "aclink",
    category: "web",
    picture: "/images/projects/AcLink.webp",
    sortDate: "2025-03",
    stack: [
      { name: "PHP", icon: "devicon:php" },
      { name: "JavaScript", icon: "devicon:javascript" },
      { name: "jQuery", icon: "devicon:jquery" },
      { name: "Bootstrap", icon: "devicon:bootstrap" },
      { name: "HTML", icon: "devicon:html5" },
      { name: "CSS", icon: "devicon:css3" },
      { name: "MySQL", icon: "devicon:mysql" },
      { name: "Git", icon: "devicon:git" },
      { name: "GitHub", icon: "simple-icons:github", colorClass: "text-slate-900 dark:text-white" },
    ],
  },
  {
    key: "markedDrawings",
    category: "lowcode",
    picture: "/images/projects/Marked_Drawings.webp",
    sortDate: "2024-04",
    stack: [
      { name: "SharePoint", icon: "simple-icons:microsoftsharepoint", colorClass: "text-[#038387]" },
      { name: "Power Apps", icon: "simple-icons:powerapps", colorClass: "text-[#742774] dark:text-[#b45cb4]" },
      { name: "Power Automate", icon: "simple-icons:powerautomate", colorClass: "text-[#0066FF]" },
      { name: "Power BI", icon: "simple-icons:powerbi", colorClass: "text-[#F2C811]" },
    ],
  },
  {
    key: "goals",
    category: "lowcode",
    picture: "/images/projects/Goals.webp",
    sortDate: "2024-02",
    stack: [
      { name: "SharePoint", icon: "simple-icons:microsoftsharepoint", colorClass: "text-[#038387]" },
      { name: "Power Apps", icon: "simple-icons:powerapps", colorClass: "text-[#742774] dark:text-[#b45cb4]" },
      { name: "Power Automate", icon: "simple-icons:powerautomate", colorClass: "text-[#0066FF]" },
      { name: "Power BI", icon: "simple-icons:powerbi", colorClass: "text-[#F2C811]" },
    ],
  },
  {
    key: "msoTrucks",
    category: "lowcode",
    picture: "/images/projects/MSO_Trucks.webp",
    sortDate: "2023-12",
    stack: [
      { name: "SharePoint", icon: "simple-icons:microsoftsharepoint", colorClass: "text-[#038387]" },
      { name: "Power Apps", icon: "simple-icons:powerapps", colorClass: "text-[#742774] dark:text-[#b45cb4]" },
      { name: "Power BI", icon: "simple-icons:powerbi", colorClass: "text-[#F2C811]" },
    ],
  },
  {
    key: "toterShipment",
    category: "desktop",
    picture: "/images/projects/Toter_Detail_Shipment.webp",
    sortDate: "2023-09",
    stack: [
      { name: "Visual Basic", icon: "devicon:visualbasic" },
      { name: "MySQL", icon: "devicon:mysql" },
      { name: "Excel", icon: "simple-icons:microsoftexcel", colorClass: "text-[#217346]" },
      { name: "Git", icon: "devicon:git" },
      { name: "GitHub", icon: "simple-icons:github", colorClass: "text-slate-900 dark:text-white" },
    ],
  },
  {
    key: "titan",
    category: "web",
    picture: "/images/projects/Servicios_y_suministros_Titan.webp",
    github: "https://github.com/AlejandroMtz10/Servicios-y-suministros-Titan",
    sortDate: "2023-05",
    stack: [
      { name: "PHP", icon: "devicon:php" },
      { name: "JavaScript", icon: "devicon:javascript" },
      { name: "MariaDB", icon: "devicon:mariadb" },
      { name: "Bootstrap", icon: "devicon:bootstrap" },
      { name: "HTML", icon: "devicon:html5" },
      { name: "CSS", icon: "devicon:css3" },
      { name: "Git", icon: "devicon:git" },
      { name: "GitHub", icon: "simple-icons:github", colorClass: "text-slate-900 dark:text-white" },
    ],
  },
  {
    key: "personalityTests",
    category: "desktop",
    picture: "/images/projects/Personality_Tests.webp",
    github: "https://github.com/AlejandroMtz10/PersonalityTests",
    sortDate: "2022-12",
    stack: [
      { name: "Visual Basic", icon: "devicon:visualbasic" },
      { name: "MySQL", icon: "devicon:mysql" },
      { name: "Git", icon: "devicon:git" },
      { name: "GitHub", icon: "simple-icons:github", colorClass: "text-slate-900 dark:text-white" },
    ],
  },
  {
    key: "cesarsSnack",
    category: "desktop",
    picture: "/images/projects/Cessars_snack.webp",
    github: "https://github.com/AlejandroMtz10/Punto-de-venta-Cesars-snack",
    sortDate: "2022-06",
    stack: [
      { name: "Visual Basic", icon: "devicon:visualbasic" },
      { name: "SQL Server", icon: "devicon:microsoftsqlserver" },
      { name: "Git", icon: "devicon:git" },
      { name: "GitHub", icon: "simple-icons:github", colorClass: "text-slate-900 dark:text-white" },
    ],
  },
];