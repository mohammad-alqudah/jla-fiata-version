# Database Setup Instructions

## Important: Database Configuration Required

Before using the registration system, you need to set up the database tables in Supabase.

## Setup Steps

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Copy and paste the SQL from `setup-db.sql` file
4. Execute the SQL to create the tables and policies

## What Gets Created

### Tables:
- **user_profiles**: Stores basic profile info for all users (job seekers and organizations)
- **organizations**: Stores detailed organization/company information for union members

### Security:
- Row Level Security (RLS) is enabled on all tables
- Users can only access their own data
- Proper policies are in place for SELECT, INSERT, UPDATE, and DELETE operations

## Storage Buckets (Optional)

If you want to enable file uploads (profile pictures, CVs), create these storage buckets in Supabase:

1. **profiles** - For profile pictures
2. **cvs** - For CV/resume documents

Make sure to set appropriate RLS policies on these buckets to allow authenticated users to upload their own files.

## Verification

After running the SQL, you can verify the setup by:
1. Checking that the tables appear in your Supabase Table Editor
2. Trying to register a new user through the application
3. Checking that the data appears in the database

## User Types

The system supports two user types:
1. **job_seeker** (باحث عن عمل) - Individual job seekers
2. **organization** (عضو في النقابة) - Organizations/companies

Each type has its own profile page and registration flow.
