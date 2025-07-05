export interface DashboardMetrics {
  totalScreenings: number;
  cancerDetections: number;
  averageProcessingTime: number;
  systemAccuracy: number;
  activeHospitals: number;
  monthlyGrowth: number;
}

export interface TimeSeriesData {
  date: string;
  screenings: number;
  detections: number;
  accuracy: number;
  processingTime: number;
}

export interface GeographicData {
  district: string;
  province: string;
  hospitals: number;
  screenings: number;
  detections: number;
  population: number;
  coverage: number;
}

export interface PerformanceData {
  metric: string;
  value: number;
  target: number;
  trend: 'up' | 'down' | 'stable';
  change: number;
}

export interface HospitalPerformance {
  hospitalId: string;
  hospitalName: string;
  district: string;
  screenings: number;
  detections: number;
  accuracy: number;
  processingTime: number;
  patientSatisfaction: number;
  rank: number;
}

export interface ModelPerformance {
  modelVersion: string;
  deploymentDate: Date;
  totalPredictions: number;
  accuracy: number;
  sensitivity: number;
  specificity: number;
  ppv: number;
  npv: number;
  aucRoc: number;
  confusionMatrix: number[][];
  rocCurve: { fpr: number; tpr: number }[];
}

export interface QualityMetrics {
  imageQuality: {
    excellent: number;
    good: number;
    adequate: number;
    poor: number;
  };
  technicalFailures: number;
  retakeRate: number;
  averageCompressionForce: number;
  exposureOptimization: number;
}

export interface CostAnalysis {
  totalCost: number;
  costPerScreening: number;
  costSavings: number;
  roi: number;
  breakdown: {
    equipment: number;
    personnel: number;
    maintenance: number;
    training: number;
    infrastructure: number;
  };
}

export interface PatientOutcomes {
  earlyDetection: {
    stage0: number;
    stage1: number;
    stage2: number;
    stage3: number;
    stage4: number;
  };
  treatmentOutcomes: {
    complete: number;
    partial: number;
    stable: number;
    progression: number;
  };
  survivalRates: {
    oneYear: number;
    threeYear: number;
    fiveYear: number;
  };
  qualityOfLife: number;
}