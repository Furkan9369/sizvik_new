/*
# Create consultations table (single-tenant, no auth)

1. New Tables
- `consultations`
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter's full name
  - `email` (text, not null) — submitter's email
  - `phone` (text) — optional phone number
  - `message` (text) — optional message / project details
  - `created_at` (timestamptz, default now()) — submission timestamp
2. Security
- Enable RLS on `consultations`.
- Allow anon + authenticated INSERT so the public contact form (anon-key client) can submit consultation requests.
- No SELECT/UPDATE/DELETE policies for anon — submissions are write-only from the public site; only the service role (bypasses RLS) can read them from the dashboard.
3. Important notes
- This is a no-auth marketing site. The frontend uses the anon key, so the INSERT policy MUST include `anon`.
- Only INSERT is exposed publicly to prevent leaking submitted contact details to anonymous visitors.
*/

CREATE TABLE IF NOT EXISTS consultations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_consultations" ON consultations;
CREATE POLICY "anon_insert_consultations"
ON consultations FOR INSERT
TO anon, authenticated
WITH CHECK (true);
