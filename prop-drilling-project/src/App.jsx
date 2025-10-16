import React from "react";
import { Bold, Bookmark } from "lucide-react";
import Card from "../components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      companyName: "Amazon",
      datePosted: "3 days ago",
      post: "Frontend Developer",
      tags: ["Junior Level", "Full-Time"],
      salaryPerHour: "$25/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      companyName: "Microsoft",
      datePosted: "5 days ago",
      post: "Backend Developer",
      tags: ["Senior Level", "Remote"],
      salaryPerHour: "$45/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Logo.svg",
      companyName: "Google",
      datePosted: "2 days ago",
      post: "Full Stack Engineer",
      tags: ["Mid Level", "On-Site"],
      salaryPerHour: "$40/hr",
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      companyName: "Apple",
      datePosted: "1 day ago",
      post: "UI/UX Designer",
      tags: ["Junior Level", "Contract"],
      salaryPerHour: "$30/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/1/19/Netflix_logo.svg",
      companyName: "Netflix",
      datePosted: "6 days ago",
      post: "DevOps Engineer",
      tags: ["Senior Level", "Full-Time"],
      salaryPerHour: "$50/hr",
      location: "Remote",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Meta_Platforms_Inc._logo.svg",
      companyName: "Meta",
      datePosted: "4 days ago",
      post: "React Developer",
      tags: ["Mid Level", "Hybrid"],
      salaryPerHour: "$35/hr",
      location: "Chennai, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/5/5f/Adobe_Systems_logo_and_wordmark.svg",
      companyName: "Adobe",
      datePosted: "7 days ago",
      post: "Cloud Architect",
      tags: ["Senior Level", "Full-Time"],
      salaryPerHour: "$55/hr",
      location: "Noida, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/c/c2/IBM_logo.svg",
      companyName: "IBM",
      datePosted: "2 days ago",
      post: "Software Tester",
      tags: ["Junior Level", "On-Site"],
      salaryPerHour: "$22/hr",
      location: "Kolkata, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/2/24/Infosys_logo.svg",
      companyName: "Infosys",
      datePosted: "5 days ago",
      post: "Data Analyst",
      tags: ["Mid Level", "Full-Time"],
      salaryPerHour: "$28/hr",
      location: "Mysore, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/6/6e/Tata_Consultancy_Services_Logo.svg",
      companyName: "TCS",
      datePosted: "3 days ago",
      post: "Java Developer",
      tags: ["Junior Level", "Remote"],
      salaryPerHour: "$26/hr",
      location: "Delhi, India",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              company={elem.companyName}
              logo={elem.brandLogo}
              date={elem.datePosted}
              post={elem.post}
              salary={elem.salaryPerHour}
              location={elem.location}
              tags={elem.tags}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
