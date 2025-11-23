import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type UserType = 'job_seeker' | 'organization';

export interface UserProfile {
  id: string;
  user_type: UserType;
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  profile_image_url?: string;
  cv_url?: string;
  bio?: string;
  created_at: string;
  updated_at: string;
}

export interface Organization {
  id: string;
  user_id: string;
  company_name_ar: string;
  company_name_en: string;
  registration_number?: string;
  national_id?: string;
  authorized_person_name?: string;
  authorized_person_number?: string;
  company_type?: string;
  capital?: string;
  years_experience?: number;
  city?: string;
  district?: string;
  street?: string;
  building_number?: string;
  phone?: string;
  fax?: string;
  mobile?: string;
  email?: string;
  branches_local?: Record<string, boolean>;
  branches_international?: Record<string, boolean>;
  activities?: Record<string, any>;
  employee_counts?: Record<string, number>;
  represents_companies?: string[];
  other_memberships?: string[];
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  updated_at: string;
}
