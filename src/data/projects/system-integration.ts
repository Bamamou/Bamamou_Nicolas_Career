import { Globe } from 'lucide-react';
import type { Project } from './types';

export const systemIntegration: Project = {
  id: 3,
  title: 'Electric vehicle System Integration',
  category: 'electrical',  image: './images/System Integration/Vehicle flashing.jpg',
  images: [
   '../images/System Integration/Assembly.jpg',
    '../images/System Integration/vehicle assembly line.jpg',
    '../images/System Integration/vehicle integration.jpg',
    '../images/System Integration/vehicles.jpg'
  ],
  description: 'Integrated electrical systems for High Speed electric Motorcycles, including ECU, motor controller (MCU) and battery management system, OBC, DC-DC, and other components all connected with a sophisticated wire harness.',
  fullDescription: 'Led the integration of various electrical systems in high-performance electric motorcycles. The project encompassed the complete electrical architecture, from power train to control systems, ensuring optimal performance and reliability.',
  tags: ['MCU', 'ECU/VCU', 'OBC', 'DC-DC', 'BMS', 'HV-Battery', 'EBS/ABS', 'HV-LV Wire Harness', 'Cooling system','Integration', 'Testing'],
  icon: Globe,
  startDate: 'June 2024',
  duration: '12 months',
  scope: 'Full System Integration',
  role: 'Junior Systems Integration Engineer',
  responsibilities: [
    'Designed and implemented complete electrical architecture',
    'Integrated ECU, BMS, DC-DC and motor controller systems',
    'Developed and tested power train components',
    'Managed wire harness design and implementation',
    'Coordinated with mechanical team for system design and fitment',
    'Conducted system validation and performance testing',
    'Developed and implemented testing protocols for system reliability',
    'Created comprehensive documentation for system integration',
  ],
  outcomes: [
    'Successfully integrated all electrical systems in 180 vehicles',
    'Achieved target performance metrics',
    'Reduced power train system complexity by 40%',
    'Improved overall system efficiency by 15%',
    'Ensured compliance with safety and performance standards',
    'Enhanced system reliability through rigorous testing',
    'Streamlined wire harness design in English and Mandarin Chinese for easier assembly',
    'Facilitated cross-functional collaboration for system optimization',
  ],
  technologies: ['Evoke ECU Flasher', 'Evoke Configurator', 'Evoke diagnostic App', 'NG vehicles rehabilitation on Assembly line','BMS-VCU-OBC-DC_DC tester', 'CAN-RS485-UART-I2C-SPI'],
};
