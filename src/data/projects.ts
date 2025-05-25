import { pcbDesign } from './projects/pcb-design';
import { batteryManagement } from './projects/battery-management';
import { systemIntegration } from './projects/system-integration';
import { energyStorage } from './projects/energy-storage';
import { firmwareProcessing } from './projects/firmware-processing';
import { meshNetwork } from './projects/mesh-network';
import { portfolioWebsite } from './projects/portfolio-website';
import { evokeecuv3 } from './projects/evoke-ecu-v3';
import { evokeecuv2 } from './projects/evoke-ecu-v2';
import {ress5kw} from './projects/ress5kw';
import type { Project } from './projects/types';

export type { Project };

export const projectsData = [
  pcbDesign,
  batteryManagement,
  systemIntegration,
  energyStorage,
  firmwareProcessing,
  meshNetwork,
  portfolioWebsite,
  evokeecuv3,
  evokeecuv2,
  ress5kw
];