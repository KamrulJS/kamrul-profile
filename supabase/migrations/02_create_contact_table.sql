-- ==============================================================================
-- 02. CONTACT MESSAGES & INQUIRIES TABLE
-- ==============================================================================

create table if not exists public.contact_messages (
  id serial primary key,
  name text not null,
  email text not null,
  subject text default 'New Project Inquiry',
  message text not null,
  status text default 'new',
  created_at timestamptz default now()
);

-- Enable Row Level Security (RLS)
alter table public.contact_messages enable row level security;

-- Policies:
-- 1. Allow any website visitor to submit an inquiry
drop policy if exists "Allow public insert to contact_messages" on public.contact_messages;
create policy "Allow public insert to contact_messages" 
  on public.contact_messages 
  for insert 
  with check (true);

-- 2. Allow reading inquiries
drop policy if exists "Allow select on contact_messages" on public.contact_messages;
create policy "Allow select on contact_messages" 
  on public.contact_messages 
  for select 
  using (true);
