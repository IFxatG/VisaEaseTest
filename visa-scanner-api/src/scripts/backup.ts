import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
import { S3 } from 'aws-sdk';
import { format } from 'date-fns';

config();

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

async function backupDatabase() {
  try {
    // Get all tables
    const { data: tables, error: tablesError } = await supabase
      .from('information_schema.tables')
      .select('table_name')
      .eq('table_schema', 'public');

    if (tablesError) throw tablesError;

    const timestamp = format(new Date(), 'yyyy-MM-dd-HH-mm');
    const backupData: Record<string, any> = {};

    // Export data from each table
    for (const table of tables!) {
      const { data, error } = await supabase
        .from(table.table_name)
        .select('*');

      if (error) throw error;
      backupData[table.table_name] = data;
    }

    // Upload to S3
    const params = {
      Bucket: process.env.BACKUP_BUCKET_NAME!,
      Key: `backup-${timestamp}.json`,
      Body: JSON.stringify(backupData),
      ContentType: 'application/json'
    };

    await s3.putObject(params).promise();
    console.log(`Backup completed successfully: backup-${timestamp}.json`);
  } catch (error) {
    console.error('Backup failed:', error);
    throw error;
  }
}

// Run backup
backupDatabase(); 