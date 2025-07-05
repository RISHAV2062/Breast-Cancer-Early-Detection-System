export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'female' | 'male';
  medicalRecordNumber: string;
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
  riskFactors: RiskFactor[];
  screeningHistory: ScreeningRecord[];
  createdAt: Date;
  updatedAt: Date;
}

export interface RiskFactor {
  type: 'family_history' | 'genetic' | 'lifestyle' | 'medical_history';
  description: string;
  severity: 'low' | 'moderate' | 'high';
  dateIdentified: Date;
}

export interface ScreeningRecord {
  id: string;
  patientId: string;
  date: Date;
  type: 'mammography' | 'ultrasound' | 'mri' | 'clinical_exam';
  images: MedicalImage[];
  aiAnalysis: AIAnalysisResult;
  radiologistReview: RadiologistReview;
  finalDiagnosis: Diagnosis;
  followUpRequired: boolean;
  followUpDate?: Date;
  status: 'pending' | 'in_progress' | 'completed' | 'requires_follow_up';
}

export interface MedicalImage {
  id: string;
  url: string;
  type: 'dicom' | 'jpeg' | 'png';
  view: 'cc' | 'mlo' | 'lateral' | 'spot_compression';
  side: 'left' | 'right' | 'bilateral';
  quality: 'excellent' | 'good' | 'adequate' | 'poor';
  metadata: ImageMetadata;
}

export interface ImageMetadata {
  acquisitionDate: Date;
  equipment: string;
  technician: string;
  compressionForce: number;
  exposureTime: number;
  kvp: number;
  mas: number;
}

export interface AIAnalysisResult {
  id: string;
  modelVersion: string;
  confidence: number;
  predictions: Prediction[];
  riskScore: number;
  biRadsCategory: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  processingTime: number;
  qualityAssessment: QualityAssessment;
  recommendations: string[];
  timestamp: Date;
}

export interface Prediction {
  type: 'mass' | 'calcification' | 'asymmetry' | 'distortion' | 'normal';
  location: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  confidence: number;
  characteristics: string[];
  malignancyProbability: number;
}

export interface QualityAssessment {
  overallQuality: 'excellent' | 'good' | 'adequate' | 'poor';
  positioning: number;
  compression: number;
  exposure: number;
  artifacts: string[];
  recommendations: string[];
}

export interface RadiologistReview {
  radiologistId: string;
  radiologistName: string;
  reviewDate: Date;
  biRadsAssessment: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  findings: Finding[];
  impression: string;
  recommendations: string[];
  agreementWithAI: boolean;
  confidenceLevel: number;
  reviewTime: number;
}

export interface Finding {
  type: 'mass' | 'calcification' | 'asymmetry' | 'distortion';
  location: string;
  size: string;
  characteristics: string[];
  assessment: string;
}

export interface Diagnosis {
  id: string;
  biRadsCategory: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  impression: string;
  recommendations: string[];
  followUpInterval?: number;
  urgency: 'routine' | 'short_term' | 'immediate';
  additionalImaging?: string[];
  biopsy?: BiopsyRecommendation;
}

export interface BiopsyRecommendation {
  type: 'core_needle' | 'vacuum_assisted' | 'surgical';
  urgency: 'routine' | 'urgent';
  location: string;
  guidance: 'stereotactic' | 'ultrasound' | 'mri';
}

export interface Hospital {
  id: string;
  name: string;
  location: {
    district: string;
    province: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  type: 'regional' | 'district' | 'primary';
  capacity: number;
  equipment: Equipment[];
  staff: MedicalStaff[];
  statistics: HospitalStatistics;
}

export interface Equipment {
  id: string;
  type: 'mammography' | 'ultrasound' | 'mri' | 'biopsy';
  manufacturer: string;
  model: string;
  installationDate: Date;
  lastMaintenance: Date;
  status: 'operational' | 'maintenance' | 'out_of_service';
  utilizationRate: number;
}

export interface MedicalStaff {
  id: string;
  name: string;
  role: 'radiologist' | 'technician' | 'nurse' | 'administrator';
  qualifications: string[];
  experience: number;
  certifications: Certification[];
  caseLoad: number;
}

export interface Certification {
  name: string;
  issuingBody: string;
  issueDate: Date;
  expiryDate: Date;
  status: 'active' | 'expired' | 'pending_renewal';
}

export interface HospitalStatistics {
  totalScreenings: number;
  monthlyScreenings: number;
  cancerDetectionRate: number;
  averageProcessingTime: number;
  patientSatisfaction: number;
  equipmentUtilization: number;
  staffWorkload: number;
}

export interface PerformanceMetrics {
  sensitivity: number;
  specificity: number;
  ppv: number;
  npv: number;
  accuracy: number;
  aucRoc: number;
  f1Score: number;
  falsePositiveRate: number;
  falseNegativeRate: number;
}

export interface ClinicalTrial {
  id: string;
  title: string;
  description: string;
  phase: 'pilot' | 'phase_1' | 'phase_2' | 'phase_3' | 'phase_4';
  status: 'planning' | 'recruiting' | 'active' | 'completed' | 'suspended';
  startDate: Date;
  endDate?: Date;
  principalInvestigator: string;
  institutions: string[];
  participants: number;
  targetEnrollment: number;
  primaryEndpoints: string[];
  secondaryEndpoints: string[];
  inclusionCriteria: string[];
  exclusionCriteria: string[];
  results?: TrialResults;
}

export interface TrialResults {
  primaryOutcomes: OutcomeResult[];
  secondaryOutcomes: OutcomeResult[];
  adverseEvents: AdverseEvent[];
  statisticalAnalysis: StatisticalAnalysis;
  conclusions: string[];
  publications: Publication[];
}

export interface OutcomeResult {
  endpoint: string;
  result: number;
  confidenceInterval: [number, number];
  pValue: number;
  significance: boolean;
}

export interface AdverseEvent {
  type: string;
  severity: 'mild' | 'moderate' | 'severe';
  frequency: number;
  description: string;
  relatedToIntervention: boolean;
}

export interface StatisticalAnalysis {
  method: string;
  sampleSize: number;
  powerAnalysis: number;
  significanceLevel: number;
  effectSize: number;
}

export interface Publication {
  title: string;
  journal: string;
  authors: string[];
  publicationDate: Date;
  doi: string;
  citationCount: number;
}