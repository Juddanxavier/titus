# Titus — Montessori Teacher-Training Institute

Vue.js frontend + PHP backend. No Node.js server required in production — deploy the built `dist/` folder to Apache/XAMPP.

This is the **canonical** project. All pages, forms, and content live here — not in separate React experiments.

## Stack

- **Frontend:** Vue 3, Vue Router, Vite
- **Backend:** PHP (form validation, file uploads, logging)
- **Content:** Editable JS modules in `src/data/`

## Quick start (XAMPP / Apache)

1. Install dependencies and build (one-time, requires Node.js):
   ```bash
   npm install
   npm run build
   ```

2. Copy the entire `dist/` folder to your web server, e.g. `C:\xampp\htdocs\titus\`

3. Open `http://localhost/titus/` in your browser.

Forms submit to `api/apply.php`, `api/contact.php`, and `api/brochure.php`.

## Maintenance mode

**Currently enabled for production** (`public/maintenance.flag` + `VITE_MAINTENANCE_MODE=true` in `.env.production`).

| Layer | Behaviour |
|--------|-----------|
| **Apache** | If `maintenance.flag` exists in the web root, visitors get `maintenance.html` (logo + phone/WhatsApp). |
| **Vue build** | Production builds only register the maintenance screen (no full site shell). |
| **PHP forms** | `api/*.php` return HTTP 503 JSON while the flag file is present. |

**Go live again:**

1. Delete `public/maintenance.flag` (or remove it on the server after deploy).
2. Set `VITE_MAINTENANCE_MODE=false` in `.env.production`.
3. Run `npm run build` and deploy `dist/`.

Local dev stays normal (`VITE_MAINTENANCE_MODE=false` in `.env.development`).

## Deploy with GitHub Actions (CI + SSH)

Pushes to **`main`** run `npm ci`, `npm run build`, and **rsync `dist/`** to your server over SSH.

### 1. One-time on the server (SSH)

Create the web root if needed (example):

```bash
mkdir -p ~/public_html/storage/uploads
chmod -R u+rwX ~/public_html/storage
```

Point the domain **document root** to that folder (e.g. `~/public_html`). PHP must be enabled for `api/*.php`.

### 2. Deploy key for GitHub Actions

On your **local machine** (or server):

```bash
ssh-keygen -t ed25519 -C "github-actions-titus" -f ./titus_deploy_key -N ""
```

- Add **`titus_deploy_key.pub`** to the server: `~/.ssh/authorized_keys`
- Add the **private** key contents to GitHub → repo **Settings → Secrets and variables → Actions**:

| Secret | Example |
|--------|---------|
| `SSH_PRIVATE_KEY` | Full contents of `titus_deploy_key` |
| `SSH_HOST` | `your-server.example.com` or IP |
| `SSH_USER` | cPanel/SSH username |
| `SSH_TARGET` | Absolute path, e.g. `/home/username/public_html` |
| `SSH_PORT` | Optional; default `22` |

### 3. Deploy

```bash
git push origin main
```

Or run **Actions → Build and deploy → Run workflow** manually.

Uploaded files exclude live **`storage/uploads/`** and **`storage/*.log`** so user uploads and logs are not wiped.

### Manual deploy on server (optional)

Repo: `https://github.com/Juddanxavier/titus.git`

```bash
cd ~/titus && PUBLIC_HTML=$HOME/public_html ./scripts/deploy.sh
```

Requires Node on the server. Prefer **GitHub Actions** if the host only provides PHP for production.

## Local development

**Option A — XAMPP (recommended, no Node dev server):**
```bash
npm run build
# Copy dist/ to htdocs, or symlink it
```

**Option B — PHP built-in server (after build):**
```bash
npm run build
php -S localhost:8080 router.php
```

**Option C — Vite dev server + PHP:**
```bash
# Terminal 1
php -S localhost:8080 router.php

# Terminal 2
npm run dev
```

## Editing content

| What to edit | File |
|---|---|
| Institute name, contact, announcement | `src/data/site.js` |
| Courses (13 programmes, syllabi in `public/courses/`) | `src/data/programmes.js` · `src/data/courses.js` |
| Full course catalogue (Markdown) | `content/COURSE_CATALOGUE.md` · `public/downloads/course-catalogue.md` |
| Curriculum modules | `src/data/curriculum.js` |
| Principal | `src/data/principal.js` |
| Testimonials | `src/data/testimonials.js` |
| FAQs | `src/data/faqs.js` |
| Admissions info | `src/data/admissions.js` |

After editing, run `npm run build` and redeploy `dist/`.

## Images and brochure

- **Images:** edit URLs in `src/data/images.js` (currently Unsplash placeholders)
- **Hero background:** also configurable via `hero.image` in `src/data/site.js`
- Replace dummy photos with your own before launch
- Replace `public/downloads/course-brochure.pdf`

## Form submissions

Applications are logged to `storage/applications.log`. Uploaded files go to `storage/uploads/`. Integrate email notifications in `api/apply.php` as needed.

## Pages

Home, About, Courses, Course detail, Curriculum, Admissions, Apply, Trainers, Student experience, Careers, FAQs, Contact, Brochure, Privacy, Terms.
