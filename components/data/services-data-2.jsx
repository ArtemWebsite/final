import image1 from "../../public/assets/img/service/service-6.jpg";
import image2 from "../../public/assets/img/service/service-4.jpg";
import image3 from "../../public/assets/img/service/service-3.jpg";
import image4 from "../../public/assets/img/service/service-1.jpg";
import image5 from "../../public/assets/img/service/service-5.jpg";
import image6 from "../../public/assets/img/service/service-2.jpg";

const servicesData = [
  {
    id: "incentives-guidance",
    icon: <i className="flaticon-solar-panel-3"></i>,
    title: "CBAM Compliance tool",
    des: "<ul><li>Quarterly Carbon Reporting</li><li>Optimized pricing of carbon certificate</li><li>Local UI and App and special VPN data transfer channel to overcome the “Great Firewall”</li>",
    image: image1,
  },
  {
    id: "solar-maintenance",
    icon: <i className="flaticon-maintenance"></i>,
    title: "CEMS Monitoring (Continued Emission Measurement System)",
    des: "<ul><li>Micro-flow NDIR technology to measure SO2, NO, CO, C2 and O2 simultaneously</li><li>Direct Emission Data collection on the production line</li><li>Tamper Proof technology to ensure veracity</li>",
    image: image2,
  },
  {
    id: "energy-efficiency",
    icon: <i className="flaticon-solar-panel-4"></i>,
    title: "Carbon Database using actual local data",
    des: "Long term goal is to establish a database using verifiable CEMS data collected in the production to create a database for easier calculation.",
    image: image3,
  },
  {
    id: "panel-installation",
    icon: <i className="flaticon-energy"></i>,
    title: "Certified Emission Data Verification",
    des: "CEMS system will be certified according to EU Regulation, and can service the accredited third party verifiers in EU to efficiently verify the data.",
    image: image4,
  },
  {
    id: "battery-solutionsg",
    icon: <i className="flaticon-solar-energy"></i>,
    title: "Battery Solutions",
    des: "Store Sunlight Effectively with Innovative Battery Tech",
    image: image5,
  },
  {
    id: "wind-turbines",
    icon: <i className="flaticon-renewable-energy"></i>,
    title: "Wind Turbines",
    des: "Wind turbines Powering a greener tomorrow effortlessly.",
    image: image6,
  },
];

export default servicesData;
