export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  category: 'content-seo' | 'sales-ecommerce' | 'workflow-management' | 'ai-tech';
  highlighted?: boolean;
}

export interface AIEngine {
  name: string;
  logo: string;
  description: string;
  isCustom?: boolean;
}

export interface ScreenshotSlot {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  slotNumber: string;
  aspectRatio?: string;
  suggestedDimensions: string;
  imageUrl?: string;
  customImageUrl?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
