const fs = require('fs');
const path = require('path');

const projects = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'projects.json'), 'utf8'));

const escapeSql = (str) => (str ? str.replace(/'/g, "''") : '');

const values = projects.map((p) => {
  const id = p.id;
  const title = escapeSql(p.title);
  const slug = escapeSql(p.slug);
  const category = escapeSql(p.category);
  const platform = escapeSql(p.platform);
  const technologies = "array[" + p.technologies.map((t) => "'" + escapeSql(t) + "'").join(', ') + "]";
  const shortDescription = escapeSql(p.shortDescription);
  const description = escapeSql(p.description);
  const role = escapeSql(p.role);
  const features = "array[" + p.features.map((f) => "'" + escapeSql(f) + "'").join(', ') + "]";
  const brainstorming = escapeSql(JSON.stringify(p.brainstorming));
  const heroImage = escapeSql(p.images.hero);
  const gallery = escapeSql(JSON.stringify(p.images.gallery));
  const liveUrl = escapeSql(p.liveUrl || '');
  const featured = p.featured ? 'true' : 'false';
  const resultsHighlights = "array[" + (p.resultsHighlights || []).map((r) => "'" + escapeSql(r) + "'").join(', ') + "]";
  const orderIndex = parseInt(id.replace('proj-', ''), 10) || 0;

  return `  (
    '${id}',
    '${title}',
    '${slug}',
    '${category}',
    '${platform}',
    ${technologies},
    '${shortDescription}',
    '${description}',
    '${role}',
    ${features},
    '${brainstorming}'::jsonb,
    '${heroImage}',
    '${gallery}'::jsonb,
    '${liveUrl}',
    ${featured},
    ${resultsHighlights},
    ${orderIndex}
  )`;
}).join(',\n');

const sql = `-- Seed All 10 Projects
insert into public.projects (id, title, slug, category, platform, technologies, short_description, description, role, features, brainstorming, hero_image, gallery, live_url, featured, results_highlights, order_index) values
${values}
on conflict (id) do update set
  title = excluded.title,
  slug = excluded.slug,
  category = excluded.category,
  platform = excluded.platform,
  technologies = excluded.technologies,
  short_description = excluded.short_description,
  description = excluded.description,
  role = excluded.role,
  features = excluded.features,
  brainstorming = excluded.brainstorming,
  hero_image = excluded.hero_image,
  gallery = excluded.gallery,
  live_url = excluded.live_url,
  featured = excluded.featured,
  results_highlights = excluded.results_highlights,
  order_index = excluded.order_index;
`;

fs.writeFileSync(path.join(__dirname, '..', 'seed_all_projects.sql'), sql, 'utf8');
console.log('Successfully created seed_all_projects.sql');
