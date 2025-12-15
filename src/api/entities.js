import { supabase } from './supabaseClient';

export const LeadTable = supabase.from('leads');