import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/supabase';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export interface UploadDocumentParams {
  file: File;
  userId: string;
  metadata?: Record<string, any>;
}

export interface DocumentRecord {
  id: string;
  user_id: string;
  file_url: string;
  file_name: string;
  file_type: string;
  file_size: number;
  upload_date: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  metadata: Record<string, any>;
}

export async function uploadDocument({ file, userId, metadata = {} }: UploadDocumentParams): Promise<DocumentRecord> {
  try {
    // Upload file to Supabase Storage
    const fileExt = file.name.split('.').pop();
    const fileName = `${userId}/${Date.now()}.${fileExt}`;
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('visa-documents')
      .upload(fileName, file);

    if (uploadError) throw uploadError;

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('visa-documents')
      .getPublicUrl(fileName);

    // Insert record into documents table
    const { data: document, error: insertError } = await supabase
      .from('documents')
      .insert({
        user_id: userId,
        file_url: publicUrl,
        file_name: file.name,
        file_type: file.type,
        file_size: file.size,
        metadata
      })
      .select()
      .single();

    if (insertError) throw insertError;

    return document;
  } catch (error) {
    console.error('Error uploading document:', error);
    throw error;
  }
}

export async function getDocument(documentId: string): Promise<DocumentRecord | null> {
  const { data, error } = await supabase
    .from('documents')
    .select('*')
    .eq('id', documentId)
    .single();

  if (error) throw error;
  return data;
}

export async function updateDocumentStatus(
  documentId: string,
  status: 'pending' | 'processing' | 'completed' | 'failed'
): Promise<void> {
  const { error } = await supabase
    .from('documents')
    .update({ status })
    .eq('id', documentId);

  if (error) throw error;
}

export async function saveAnalysisResult(
  documentId: string,
  userId: string,
  documentType: string,
  analysisResult: any,
  confidenceScore?: number
): Promise<void> {
  const { error } = await supabase
    .from('results')
    .insert({
      document_id: documentId,
      user_id: userId,
      document_type: documentType,
      analysis_result: analysisResult,
      confidence_score: confidenceScore
    });

  if (error) throw error;
}

export async function getAnalysisResults(userId: string): Promise<any[]> {
  const { data, error } = await supabase
    .from('results')
    .select(`
      *,
      documents (
        file_name,
        file_url,
        upload_date
      )
    `)
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
} 