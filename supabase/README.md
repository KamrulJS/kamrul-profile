# Supabase Database Architecture & Schema Management

This directory houses all official SQL database migrations, seed datasets, and security policies for the portfolio application.

---

## 📁 Directory Structure

```text
supabase/
├── migrations/
│   ├── 01_initial_schema.sql         # Core tables (projects, metrics, services, workflow, skills, RLS)
│   └── 02_create_contact_table.sql   # Contact messages inquiry table & RLS policies
├── seeds/
│   ├── 01_seed_all_projects.sql      # All 10 full portfolio case studies & gallery items
│   └── 02_seed_profile_content.sql   # Metrics, Services, Workflow steps & Showcase tickers
└── README.md                         # Documentation & management guide
```

---

## 🚀 How to Execute in Supabase SQL Editor

If you ever need to set up a new environment or re-seed your database:

1. **Open Supabase Dashboard** ➔ Go to your project ➔ Select the **SQL Editor** (`>_` icon in left sidebar).
2. **Run Migrations (in numerical order)**:
   - Paste contents of `migrations/01_initial_schema.sql` ➔ Click **Run**.
   - Paste contents of `migrations/02_create_contact_table.sql` ➔ Click **Run**.
3. **Run Seeds**:
   - Paste contents of `seeds/01_seed_all_projects.sql` ➔ Click **Run** (populates all 10 projects).
   - Paste contents of `seeds/02_seed_profile_content.sql` ➔ Click **Run** (populates metrics, services, and workflow).

---

## 🗄️ Database Table Reference

| Table Name | Description | RLS Policy |
| :--- | :--- | :--- |
| `public.projects` | Full portfolio project case studies | Public Read (`SELECT`) |
| `public.featured_projects` | Interactive showcase ticker cards (Rows 1 & 2) | Public Read (`SELECT`) |
| `public.metrics` | Live statistics banner (years, projects count, etc.) | Public Read (`SELECT`) |
| `public.services` | Core domain expertise & tech stack pills | Public Read (`SELECT`) |
| `public.workflow` | 4-step interactive development process | Public Read (`SELECT`) |
| `public.skills` | Technical competencies and proficiencies | Public Read (`SELECT`) |
| `public.experiences` | Professional employment history | Public Read (`SELECT`) |
| `public.contact_messages` | Client inquiries submitted through the contact form | Public Insert (`INSERT`) |

---

## 🖼️ Supabase Storage Guide

- **Bucket Name**: `Kamrul profile` (Public bucket)
- **Public URL Pattern**:
  ```text
  https://bbbhghnassxdovpydewe.supabase.co/storage/v1/object/public/Kamrul%20profile/<folder>/<filename>
  ```
- **Folders in Bucket**:
  - `projects/` — Hero and showcase cover images.
  - `projects/gallery/` — Detail screenshots and gallery images for project modal.
  - `showcase/` — Fast ticker screenshots.
  - `teams/` — Avatars or collaborator icons.
