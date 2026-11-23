export interface TechnologyItem {
  name: string;
  icon: string;
  colorClass?: string;
}

export interface ToolItem {
  key: string;
  name: string;
  icon: string;
  colorClass?: string;
}

export const TECHNOLOGIES: TechnologyItem[] = [
  { name: "Java", icon: "devicon:java" },
  { name: "Visual Basic", icon: "devicon:visualbasic" },
  { name: "PHP", icon: "devicon:php" },
  { name: "HTML", icon: "devicon:html5" },
  { name: "CSS", icon: "devicon:css3" },
  { name: "Bootstrap", icon: "devicon:bootstrap" },
  { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
  { name: "JavaScript", icon: "devicon:javascript" },
  { name: "JSON", icon: "devicon:json" },
  { name: "React", icon: "devicon:react" },
  { name: "Vite", icon: "devicon:vitejs" },
  { name: "SQL", icon: "devicon:azuresqldatabase" },
];

export const TOOLS: ToolItem[] = [
  { key: "git", name: "Git", icon: "devicon:git" },
  {
    key: "github",
    name: "GitHub",
    icon: "simple-icons:github",
    colorClass: "text-slate-900 dark:text-white",
  },
  { key: "mariadb", name: "MariaDB", icon: "devicon:mariadb" },
  { key: "mysql", name: "MySQL", icon: "devicon:mysql" },
  {
    key: "sqlserver",
    name: "Microsoft SQL Server",
    icon: "devicon:microsoftsqlserver",
  },
  {
    key: "sharepoint",
    name: "SharePoint",
    icon: "simple-icons:microsoftsharepoint",
    colorClass: "text-[#038387]",
  },
  {
    key: "powerapps",
    name: "Power Apps",
    icon: "simple-icons:powerapps",
    colorClass: "text-[#742774] dark:text-[#b45cb4]",
  },
  {
    key: "powerautomate",
    name: "Power Automate",
    icon: "simple-icons:powerautomate",
    colorClass: "text-[#0066FF]",
  },
  {
    key: "powerbi",
    name: "Power BI",
    icon: "simple-icons:powerbi",
    colorClass: "text-[#F2C811]",
  },
  { key: "postman", name: "Postman", icon: "devicon:postman" },
  {
    key: "uml",
    name: "UML",
    icon: "lucide:boxes",
    colorClass: "text-[#0C82FF]",
  },
  {
    key: "drawio",
    name: "Draw.io",
    icon: "simple-icons:diagramsdotnet",
    colorClass: "text-[#F08705]",
  },
  {
    key: "xampp",
    name: "XAMPP",
    icon: "simple-icons:xampp",
    colorClass: "text-[#FB7A24]",
  },
];