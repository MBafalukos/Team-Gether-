import { Service, Why, PlanItem } from "./types";

import Engage from "./assets/meeting.png";
import Manage from "./assets/time-management.png";
import Reports from "./assets/seo-report.png";
import DSpace from "./assets/digital.png";
import Focus from "./assets/1.team engagement.png";
import Features from "./assets/2.simplicity.png";
import TailorMade from "./assets/3. tailored.png";
import Experience from "./assets/4.unique.png";
import CustomBuild from "./assets/5.configuration.png";
import Discussion from "./assets/6. discussion.png";

const services: Service[] = [
  {
    icon: <img src={Engage} />,
    variant: "bg-primary/20",
    title: "Engagment",
    description: "Engage your employees and build a strong company culture",
  },
  {
    icon: <img src={Manage} />,
    variant: "bg-orange-500/10",
    title: "Managers",
    description:
      "Manage communication, performance and culture in one platform",
  },
  {
    icon: <img src={Reports} />,
    variant: "bg-green-500/10",
    title: "Reporting",
    description:
      " Generates insights and reports, aiding in data-driven decision-making.",
  },
  {
    icon: <img src={DSpace} />,
    variant: "bg-green-500/10",
    title: "Digital Space",
    description:
      " Securely manages documents, enhancing collaboration and ensuring compliance.",
  },
];

const why: Why[] = [
  {
    icon: <img src={Focus} />,
    description: "Engage your employees and build a strong company culture",
  },
  {
    icon: <img src={Features} />,

    description:
      "Manage communication, performance and culture in one platform",
  },
  {
    icon: <img src={TailorMade} />,

    description:
      " Generates insights and reports, aiding in data-driven decision-making.",
  },
  {
    icon: <img src={Experience} />,

    description:
      " Securely manages documents, enhancing collaboration and ensuring compliance.",
  },
  {
    icon: <img src={CustomBuild} />,

    description:
      " Securely manages documents, enhancing collaboration and ensuring compliance.",
  },
  {
    icon: <img src={Discussion} />,

    description:
      " Securely manages documents, enhancing collaboration and ensuring compliance.",
  },
];

const plans: PlanItem[] = [
  {
    id: 1,
    name: "Starter",
    price: "49",
    duration: "/ month",
    features: [
      "Up to 600 minutes usage time",
      "Use for personal only",
      "Add up to 10 attendees",
      "1 User",
      "Technical support via email",
    ],
    isRecommended: false,
  },
  {
    id: 2,
    name: "Professional",
    price: "99",
    duration: "/ month",
    features: [
      "Up to 6000 minutes usage time",
      "Use for personal or a commercial client",
      "Add up to 100 attendees",
      "Up to 5 teams",
      "Technical support via email",
    ],
    isRecommended: true,
    isPopular: true,
  },
  {
    id: 3,
    name: "Enterprise",
    price: "599",
    duration: "/ month",
    features: [
      "Unlimited usage time",
      "Use for personal or a commercial client",
      "Add Unlimited attendees",
      "24x7 Technical support via phone",
      "Technical support via email",
    ],
    isRecommended: false,
  },
];

export { services, why, plans };
