-- ==============================================================================
-- 01. INITIAL DATABASE SCHEMA & ROW-LEVEL SECURITY POLICIES
-- ==============================================================================

-- 1. Projects Table (Full Portfolio Case Studies)
create table if not exists public.projects (
  id text primary key,
  title text not null,
  slug text unique not null,
  category text not null,
  platform text not null,
  technologies text[] default '{}',
  short_description text not null,
  description text not null,
  role text not null,
  features text[] default '{}',
  brainstorming jsonb default '[]',
  hero_image text not null,
  gallery jsonb default '[]',
  live_url text,
  featured boolean default false,
  results_highlights text[] default '{}',
  order_index int default 0,
  created_at timestamptz default now()
);

-- 2. Featured Projects Table (Showcase Ticker Row 1 & 2)
create table if not exists public.featured_projects (
  id serial primary key,
  row_number int not null check (row_number in (1, 2)),
  title text not null,
  category text not null,
  tech_stack text[] default '{}',
  description text not null,
  client text not null,
  year text not null,
  images text[] default '{}',
  order_index int default 0
);

-- 3. Metrics Table
create table if not exists public.metrics (
  id serial primary key,
  value text not null,
  label text not null,
  tags text[] default '{}',
  order_index int default 0
);

-- 4. Services / Domain Expertise Table
create table if not exists public.services (
  id serial primary key,
  num text not null,
  title text not null,
  icon_name text not null,
  scope text not null,
  skills text[] default '{}',
  pills text[] default '{}',
  order_index int default 0
);

-- 5. Workflow Table
create table if not exists public.workflow (
  id text primary key,
  step_id text not null,
  step_label text not null,
  tab_title text not null,
  tagline text not null,
  description text not null,
  deliverables text[] default '{}',
  timeline text not null,
  milestone text not null,
  order_index int default 0
);

-- 6. Experience Table
create table if not exists public.experiences (
  id text primary key,
  role text not null,
  company text not null,
  period text not null,
  location text not null,
  type text not null,
  summary text not null,
  bullets text[] default '{}',
  technologies text[] default '{}',
  order_index int default 0
);

-- 7. Skills & Tech Categories Table
create table if not exists public.skills (
  id serial primary key,
  type text not null check (type in ('proficiency', 'category')),
  title text not null,
  level int,
  items jsonb default '[]',
  order_index int default 0
);

-- 8. Enable Public Read Access (Row Level Security)
alter table public.projects enable row level security;
alter table public.featured_projects enable row level security;
alter table public.metrics enable row level security;
alter table public.services enable row level security;
alter table public.workflow enable row level security;
alter table public.experiences enable row level security;
alter table public.skills enable row level security;

drop policy if exists "Allow public read access" on public.projects;
drop policy if exists "Allow public read access" on public.featured_projects;
drop policy if exists "Allow public read access" on public.metrics;
drop policy if exists "Allow public read access" on public.services;
drop policy if exists "Allow public read access" on public.workflow;
drop policy if exists "Allow public read access" on public.experiences;
drop policy if exists "Allow public read access" on public.skills;

create policy "Allow public read access" on public.projects for select using (true);
create policy "Allow public read access" on public.featured_projects for select using (true);
create policy "Allow public read access" on public.metrics for select using (true);
create policy "Allow public read access" on public.services for select using (true);
create policy "Allow public read access" on public.workflow for select using (true);
create policy "Allow public read access" on public.experiences for select using (true);
create policy "Allow public read access" on public.skills for select using (true);
