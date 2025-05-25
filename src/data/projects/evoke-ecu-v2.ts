import { Zap, FileText, FileSpreadsheet, Code } from 'lucide-react';
import type { Project } from './types';

export const evokeecuv2: Project = {
  id: 9,
  title: 'Advanced ECU or VCU V2 PCB Design',
  category: 'electrical',
  image: './images/PCB design/3D_V3.2 5.png',
  images: [
    '../images/PCB design/3D_V3.2 4.png',
    '../images/PCB design/3D_V3.2 3.png',
    '../images/PCB design/3D_V3.2 2.png',
    '../images/PCB design/3D_V3.2 1.png',
  ],
  description: 'Multi-layer PCB designed for Electric vehicle ECU or VCU abiding by automotive standard with integrated bus, serial, and wireless communication.',
  // description: 'Multi-layer PCB designed for low-power vehicle control unit (VCU) using an ESP32-WROOM-32D module. The design focuses on achieving ultra-low power consumption while maintaining reliable wireless communication capabilities.',
  fullDescription:'Multi-layer PCB designed for low-power vehicle control unit (VCU) using an ESP32-WROOM-32D module. The design focuses on achieving ultra-low power consumption while maintaining reliable wireless communication capabilities. The PCB incorporates various bus communication chips such the MCP2515-TJA1050 for CAN bus, MCP23017 for I2C bus, and serial communication using both the HSPI and VSPI of the module .',
  tags: ['PCB Design', 'ECU','Low Power','KiCAD','ESP32', 'RTOS', 'I2C', 'CAN Bus', 'SPI', 'ADC', 'UART', 'BLE', 'WiFi'],
  icon: Zap,
  startDate: 'March 2023',
  duration: '3 months',
  scope: 'Full PCB Design, Prototyping, and Firmware Development',
  technologies: ['KiCAD', 'Version Control', 'Embedded C', 'FreeRTOS', 'Interactive Html BOM'],
  role: 'Lead PCB Designer',
  responsibilities: [
    'Designed multi-layer PCB using KiCAD',
    'Integrated ESP32-WROOM-32D module for low-power operation',
    'Implemented power management system for extended battery life',
    'Conducted EMC/EMI analysis and optimization',
    'Coordinated with manufacturers for prototype production',
    'Developed firmware for communication protocols (I2C, SPI, CAN)',
    'Created interactive HTML BOM for easy component sourcing',
    'Conducted testing and validation of PCB design',
    'Documented design process and created user manuals',
    'Collaborated with cross-functional teams for system integration'
  ],
  outcomes: [
    'Achieved 60% reduction in power consumption',
    'Successfully produced and tested 10 prototype units',
    'Design approved for mass production'
  ],
  links: [
    {
      title: 'Documentation',
      url: '../projects/pcb-design/esp32_board_doc_html.html',
      icon: FileText
    },
    {
      title: 'Interactive BOM',
      url: '../projects/pcb-design/InteractiveBOM_V3.2.0_2025-5-25.html',
      icon: FileSpreadsheet
    },
    {
      title: 'Schematic',
      url: '../projects/pcb-design/ESP32-CAN-protected.pdf',
      icon: Code
    }
  ],
}
