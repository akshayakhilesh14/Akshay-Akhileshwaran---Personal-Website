import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import porfolioImage12 from '../images/portfolio/portfolio-12.jpg';
import porfolioImage13 from '../images/portfolio/portfolio-13.jpg';
import porfolioImage14 from '../images/portfolio/portfolio-14.jpg';
import porfolioImage15 from '../images/portfolio/portfolio-15.jpg';
import porfolioImage16 from '../images/portfolio/portfolio-16.jpg';
import porfolioImage17 from '../images/portfolio/portfolio-17.jpg';
import porfolioImage18 from '../images/portfolio/portfolio-18.jpg';
import porfolioImage19 from '../images/portfolio/portfolio-19.jpg';
import porfolioImage20 from '../images/portfolio/portfolio-20.jpg';
import porfolioImage21 from '../images/portfolio/portfolio-21.jpg';
import porfolioImage22 from '../images/portfolio/portfolio-22.jpg';
import porfolioImage23 from '../images/portfolio/portfolio-23.jpg';
import porfolioImage24 from '../images/portfolio/portfolio-24.jpg';
import porfolioImage25 from '../images/portfolio/portfolio-25.jpg';
import porfolioImage26 from '../images/portfolio/portfolio-26.jpg';
import porfolioImage27 from '../images/portfolio/portfolio-27.jpg';
import porfolioImage28 from '../images/portfolio/portfolio-28.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Personal Website of Akshay Akhileshwaran',
  description: "Student Website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'My Experiences',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Akshay`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Hi, I'm Akshay, an aspiring <strong className="text-stone-100">Data Scientist and Machine Learning</strong>, Currently a senior in  <strong className="text-stone-100">GEMS Modern Academy, </strong> I have always been passionate about coding, public speaking, and playing basketball. 
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I try to find a balance <strong className="text-stone-100">between relaxation, recreation, and personal growth, </strong>,
        ensuring that my free time enriches your life and helps me feel more fulfilled. I enjoy <strong className="text-stone-100">reading, playing sports, or </strong>{' '}
        <strong className="text-stone-100">engaging in volunteering work and charitable activities.</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1ySA635oLs7xruo1SibpjtT5F9v7uPpu1/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      //href: 'https://akshayakhilesh14.wixsite.com/contact-akshay',
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `My journey into the world of data science and machine learning began at an early age and I am captivated by the endless possibilities and the power to solve complex problems using technology and Artificial Intelligence.This has led me to explore and master various programming languages and frameworks.
  As a natural communicator, I discovered my love for public speaking. I actively sought opportunities to share my knowledge and ideas with others, whether it was presenting a project in front of my classmates or participating in debate competitions.
  I have always desired to make a positive impact in the world, and through my curiosity and eagerness, I have undertaken many opportunities to apply my skills and contribute to solving complex problems.
  As I embark on the next phase of my academic journey, I'm looking for chances to work together with people who are interested in data science and machine learning, just like me.`,
  aboutItems: [
    {label: 'Location', text: 'Dubai, United Arab Emirates', Icon: MapIcon},
    {label: 'Age', text: '17', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: ': Artificial Intelligence, Computer Science, Data Science, Machine Learning, Game Design, Football, Basketball, Tennis.', Icon: SparklesIcon},
    {label: 'Study', text: 'GEMS Modern Academy', Icon: AcademicCapIcon},
    {label: 'Internships', text: 'ESOL Education LLC, Al Habtoor Group', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 8,
      },
      {
        name: 'Tamil',
        level: 8,
      },
      {
        name: 'French',
        level: 7,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Java',
        level: 9,
      },
      {
        name: 'Javascript, HTML and CSS',
        level: 8.5,
      },
      {
        name: 'Python',
        level: 7.75,
      },
      {
        name: 'Scratch',
        level: 9,
      },
    ],
  },
  {
    name: 'Interests',
    skills: [
      {
        name: 'Artificial Intelligence',
        level: 10,
      },
      {
        name: 'Data Science',
        level: 10,
      },
      {
        name: 'Machine Learning',
        level: 10,
      },
      {
        name: 'Game Design',
        level: 10,
      },
    ],
  },
  {
    name: 'Sports',
    skills: [
      {
        name: 'Soccer',
        level: 10,
      },
      {
        name: 'Basketball',
        level: 10,
      },
      {
        name: 'Tennis',
        level: 10,
      },
      {
        name: 'Cricket',
        level: 10,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'The Protean Rover',
    description: 'Innovation Mela',
    url: 'https://akshayakhilesh14.wixsite.com/the-protean-rover',
    image: porfolioImage1,
  },
  {
    title: '',
    description: '',
    url: 'https://akshayakhilesh14.wixsite.com/the-protean-rover',
    image: porfolioImage15,
  },
  {
    title: 'The Farmadrone',
    description: 'Project Prism',
    url: 'https://akshayakhilesh14.wixsite.com/thefarmadrone',
    image: porfolioImage2,
  },
  {
    title: '',
    description: '',
    url: 'https://akshayakhilesh14.wixsite.com/thefarmadrone',
    image: porfolioImage16,
  },
  {
    title: 'IT and Hackathon Club',
    description: 'Launched the very first IT and Hackathon Club at my school, GEMS Modern Academy',
    url: 'https://akshayakhilesh14.wixsite.com/it-hackathon',
    image: porfolioImage3,
  },
  {
    title: '',
    description: '',
    url: 'https://akshayakhilesh14.wixsite.com/it-hackathon',
    image: porfolioImage17,
  },
  {
    title: 'Veritas AI',
    description: '',
    url: 'https://akshayakhilesh14.wixsite.com/akshay-veritasai',
    image: porfolioImage4,
  },
  {
    title: '',
    description: '',
    url: 'https://akshayakhilesh14.wixsite.com/akshay-veritasai',
    image: porfolioImage18,
  },
  {
    title: 'STREAM Competition',
    description: 'Created a Rube Goldberg Machine using sustainable material.',
    url: 'https://akshayakhilesh14.wixsite.com/streamcompetition',
    image: porfolioImage5,
  },
  {
    title: '',
    description: '',
    url: 'https://akshayakhilesh14.wixsite.com/streamcompetition',
    image: porfolioImage19,
  },
  {
    title: 'Academic Honors',
    description: '',
    url: 'https://akshayakhilesh14.wixsite.com/myacademichonors',
    image: porfolioImage6,
  },
  {
    title: '',
    description: '',
    url: 'https://akshayakhilesh14.wixsite.com/myacademichonors',
    image: porfolioImage20,
  },
  {
    title: 'Model United Nation(MUN)',
    description: '',
    url: 'https://akshayakhilesh14.wixsite.com/mun-debating',
    image: porfolioImage7,
  },
  {
    title: '',
    description: '',
    url: 'https://akshayakhilesh14.wixsite.com/mun-debating',
    image: porfolioImage21,
  },
  {
    title: 'My Cultural Diversity',
    description: 'Celebrating diverse festivals!',
    url: 'https://akshayakhilesh14.wixsite.com/culturaldiversity',
    image: porfolioImage8,
  },
  {
    title: '',
    description: '',
    url: 'https://akshayakhilesh14.wixsite.com/culturaldiversity',
    image: porfolioImage22,
  },
  {
    title: 'My Journalism Experience',
    description: 'Inquisitive storyteller with the power of my pen.',
    url: 'https://akshayakhilesh14.wixsite.com/journalism',
    image: porfolioImage9,
  },
  {
    title: '',
    description: '',
    url: 'https://akshayakhilesh14.wixsite.com/journalism',
    image: porfolioImage23,
  },
  {
    title: 'Community Service',
    description: 'Empowering hearts, building stronger communities',
    url: 'https://akshayakhilesh14.wixsite.com/communityservice',
    image: porfolioImage10,
  },
  {
    title: '',
    description: '',
    url: 'https://akshayakhilesh14.wixsite.com/communityservice',
    image: porfolioImage24,
  },
  {
    title: '',
    description: '',
    url: 'https://akshayakhilesh14.wixsite.com/internship-esol',
    image: porfolioImage11,
  },
  {
    title: '',
    description: '',
    url: 'https://akshayakhilesh14.wixsite.com/internship-esol',
    image: porfolioImage25,
  },
  {
    title: 'Game Development Club',
    description: 'Pioneered our first ever Game Development Club',
    url: 'https://akshayakhilesh14.wixsite.com/gamedevclub',
    image: porfolioImage12,
  },
  {
    title: '',
    description: '',
    url: 'https://akshayakhilesh14.wixsite.com/gamedevclub',
    image: porfolioImage26,
  },
  {
    title: 'GenerosityVend',
    description: '',
    url: 'https://akshayakhilesh14.wixsite.com/generosityvend',
    image: porfolioImage13,
  },
  {
    title: '',
    description: '',
    url: 'https://akshayakhilesh14.wixsite.com/generosityvend',
    image: porfolioImage27,
  },
  {
    title: 'The Tehseen Scholar Intervention Program (TSIP)',
    description: '',
    url: 'https://akshayakhilesh14.wixsite.com/mentoring',
    image: porfolioImage14,
  },
  {
    title: '',
    description: '',
    url: 'https://akshayakhilesh14.wixsite.com/mentoring',
    image: porfolioImage28,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2022 - April 2024',
    location: 'GEMS Modern Academy',
    title: 'High School Diploma - Grades 11 and 12',
    content: <p>Activities and societies: Head Editor for Natsukashii, the Weekly School Newsletter. Was the Person of Duty (POD) of the School Academic Council. Was part of Core Team of RS Council. Selected for PISA Research Inquiry Leader of IT, Hackathon Club.Represented my school at MUN Conferences. Participant of CodeX Hackathon(Web Development Challenge). Represented my House,'Cygnus' in Inter-House Debate. Part of sports school team: Soccer, Tennis, Basketball, Cricket for 2 years. Participated in Innovation Mela, STREAM, Project Prism. Secured KS Varkey Scholarship. Activities and societies: Head Editor for Natsukashii,Weekly School Newsletter. Person of Duty(POD) of Academic Council. Part of Core Team of RS Council. Selected for the ACER PISA Research Inquiry, Leader of IT, Hackathon Club. Represented my school at MUN Conferences. Participant of CodeX Hackathon (Web Development Challenge). Represented my House 'Cygnus' in Inter-House Debate. Part of sports school team: Soccer, Tennis, Basketball, Cricket for 2 years. Participated in Innovation Mela, STREAM, Project Prism. Secured KS Varkey Scholarship. </p>,
  },
  {
    date: 'April 2020 - April 2022',
    location: 'GEMS Modern Academy',
    title: 'High School Diploma - Grades 9 and 10',
    content: <p>Involves study of Mathematics, Computers, Social Studies, Science, English, French. Head Editor for Freshman Chronicles, the Weekly School Newsletter
    Participant of CodeX Hackathon (Web Development Challenge)
    Attended an ISME Management and Entrepreneurship Boot Camp. Was a Radio Jockey (RJ) at Modern Mania, a school-wide event. Represented my House 'Cygnus' in Inter-House Debates. Mentor in the Tahseen's Scholar Intervention Program Council to increase performances of students by 10% in average. Part of school sports teams: Soccer, Tennis, Basketball, Cricket for the 2 years. 
    Grade 10: 98.8%(#6 All India Rank and #4 Middle East Rank)
    
    Received a final certificate in July 2022 Indian Certificate of Secondary Examination, and received final percentages in the subjects:
    
    Mathematics: 100%,
    Computer Applications: 100%,
    Social Studies: 99%,
    Science: 98%,
    English: 97%, and
    French: 90%
    
    </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2022 - August 2022',
    location: 'ESOL Education LLC',
    title: 'Software Engineer Intern',
    content: (
      <p>
        Interned under the Information Technology Network and Support Engineers sector. Set up a WIFI network, learned troubleshooting, set up access points and SSID. Solved a problem by projecting and accessing the information of school provided devices onto the smart BenQ boards through touch screen using the feature ‘InstaShare’. 

Installed an MDM of Dunecrest, the Mosyle Apple MDM onto each school device. Learnt how to implement an antivirus on all school systems and learnt the dangers of different malware for a software.

Configured and was responsible in the programming of the CISCO 5500 series which dynamically configured various ports throughout the school based on the device type detected on the specific port.

Learned more about the iOS software and helped set up devices on Mac mini software and configured various Apple Devices for educational purposes for staff and students.
      </p>
    ),
  },
  {
    date: 'July 2023 - August 2023',
    location: 'Al Habtoor Group',
    title: 'Software Engineer Intern',
    content: (
      <p>
        Was part of the IT Interns Team and learnt details of networking and hardware before delving into software. Had firsthand experience in assembling a Windows pc from scratch. Added devices to the domain and created Al Habtoor Motors login ids and passwords. Configured zebra handheld scanners along with the SIM cards for the same. Introduce to ERPs (Enterprise Resource Planning) for support, Microsoft Azure environment to track all the databases and clients and tenants, to plan, budget, predict, and report on an organization’s financial results using numerous modules. Was introduced to programming languages such as SQL, mySQL for databases. Learnt about VLAN, IP Addresses, networking layer, packeting layer. Leant about Ethernet Protocol for communication in home and office networking. Introduced to Application Programming Interfaces.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'My Experience on working on the Protean Rover',
      text: 'The Protean Rover is my personal favorite project as it was my first step of innovation to create a multi functional rover which traveled different surfaces and provided different services. It would benefit the old people to transport heavy equipment around the house at the same time serve the security department at home and offices .',
      image: 'https://blog.webit.org/wp-content/uploads/2015/03/OCIHO30.jpg',
    },
    {
      name: 'My Experience on Mentoring numerous students',
      text: 'Mentoring students in different subjects across different disciplines is my way of giving back to the community what they have given to me. I take personal pride in teaching and sharing my knowledge with my juniors.',
      image: 'https://media.istockphoto.com/id/1364077652/vector/mentoring-concept-vector-design-with-icons-and-keywords.jpg?s=612x612&w=0&k=20&c=m2k378GqxJ3EtIDsWfpuQnEB-q42Fv32BDn0oZ4ALZw=',
    },
    {
      name: 'My Experience on expressing my passion for journalism',
      text: 'I have always expressed my passion for writing and journalism throughout my school years in publications such as The Freshman Chronicles, and the Natuskashii. My journey in journalism started as a small time hobby to just express my thoughts but today it is an integral part of me. I am looking at exploring my creativity in the near future.',
      image: 'https://images.freeimages.com/clg/istock/previews/7878/78780457-news-media-and-broadcasting.jpg',
    },
    {
      name: 'Expressing my Culture, and Respect for other Cultures and Traditions',
      text: 'My cultural diversity is my pride as I belong to India which is known for its rich culture and heritage . Living in Dubai all my life has taught me to respect all nationalities with equal regards and respect.',
      image: 'https://www.kpi.com/wp-content/uploads/2018/10/How-to-Cope-with-Diverse-Culture-Requirement.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Welcome to my personal website! I am thrilled that you have stopped by. If you would like to get in touch with me, I would love to hear from you.',
  items: [
    {
      type: ContactType.Email,
      text: 'Akshay14806@gmail.com',
      href: 'mailto:Akshay14806@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Dubai, United Arab Emirates',
      href: 'https://goo.gl/maps/uWoo6dGodB3Jb7Mn6',
    },
    {
      type: ContactType.Instagram,
      text: '@becauseiambatman07',
      href: 'https://instagram.com/becauseiambatman07?igshid=OGQ5ZDc2ODk2ZA==',
    },
    {
      type: ContactType.Github,
      text: 'akshayakhilesh14',
      href: 'https://github.com/akshayakhilesh14',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/akshayakhilesh14'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/22273387/akshay-akhileshwaran'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/akshayakhileshwaran/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://instagram.com/becauseiambatman07?igshid=OGQ5ZDc2ODk2ZA=='},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/AkshayA14806'},
];
