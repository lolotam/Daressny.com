
import { commonTranslations } from './commonTranslations';
import { educationTranslations } from './educationTranslations';
import { userTranslations } from './userTranslations';
import { marketingTranslations } from './marketingTranslations';
import { contactTranslations } from './contactTranslations';

export type TranslationKey = 
  keyof typeof commonTranslations.en | 
  keyof typeof educationTranslations.en | 
  keyof typeof userTranslations.en | 
  keyof typeof marketingTranslations.en | 
  keyof typeof contactTranslations.en;

export const translations = {
  ar: {
    ...commonTranslations.ar,
    ...educationTranslations.ar,
    ...userTranslations.ar,
    ...marketingTranslations.ar,
    ...contactTranslations.ar,
  },
  en: {
    ...commonTranslations.en,
    ...educationTranslations.en,
    ...userTranslations.en,
    ...marketingTranslations.en,
    ...contactTranslations.en,
  }
};
