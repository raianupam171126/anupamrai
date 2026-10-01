# anupamrai site

A static personal site: videos, writing, selected work, about, contact. No build step, no framework.

```
index.html   layout, styles and rendering logic (rarely touched)
content.js   everything you edit: videos, posts, projects, links, bio
```

## 1. Put your videos on YouTube

GitHub Pages is a poor place for video files (100 MB file limit, no streaming), so host them on YouTube and embed.

1. Upload each demo to YouTube. Public or Unlisted both work.
2. Copy the ID from the URL: `https://www.youtube.com/watch?v=AbC123xYz` → `AbC123xYz`.
3. Paste it into `youtubeId` for that video in `content.js`. For a Short, the ID is the part after `/shorts/`, and set `format: "short"` so it shows in the vertical Shorts strip.

Until an ID is set, the card shows a styled "Upload pending" poster. The site loads the real YouTube player only when someone clicks play, so the page stays fast.

## 2. Publish a blog post

Write on Medium, Substack or LinkedIn. Then in `content.js` → `posts`, set `url`, `date`, `platform` and change `status` to `"published"`. Posts still marked `"planned"` or `"drafting"` show as "Coming soon", which doubles as a public content roadmap. Also set `links.blog` to your Medium/Substack home page.

## 3. Deploy on GitHub Pages (free)

1. Create a public repo, e.g. `raianupam171126/anupamrai.com`.
2. Upload `index.html`, `content.js` and `README.md` to the repo root.
3. Repo → Settings → Pages → Source: *Deploy from a branch*, branch `main`, folder `/ (root)`.
4. The site goes live at `https://raianupam171126.github.io/<repo>/` within a minute or two.

## 4. Connect your own domain

1. Buy the domain (Namecheap, GoDaddy, Cloudflare). `.com` is roughly ₹900–1,200/year.
2. Add a file named `CNAME` (no extension) to the repo root containing only your domain, e.g. `anupamrai.com`.
3. At your registrar, add DNS records:
   - Four `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` for `www` → `raianupam171126.github.io`
4. Back in Settings → Pages, enter the domain and tick **Enforce HTTPS** once the certificate is issued (can take up to an hour).

## Before you go live

- [x] `links.linkedin` — done
- [x] `links.blog` — done (Substack)
- [ ] `youtubeId` for each uploaded demo
- [ ] Optional: `links.cv` pointing to a PDF of your CV (drop `cv.pdf` into the repo and use `"cv.pdf"`)
- [ ] Optional: add Google Analytics / Plausible if you want visit tracking (the footer currently says "no trackers", so update it)
