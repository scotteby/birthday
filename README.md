# Kate's Birthday Page 🎾

A one-page surprise for Kate, built to deploy straight to Vercel from GitHub. No build
step, no dependencies — just `index.html`, `styles.css`, and `script.js`.

## Deploy

1. Push this folder to a new GitHub repo (private, unless you don't mind it being public):
   ```
   git init
   git add .
   git commit -m "Kate's birthday page"
   git branch -M main
   git remote add origin https://github.com/<you>/kate-birthday.git
   git push -u origin main
   ```
2. In Vercel: **Add New → Project → Import** the repo. Framework preset: **Other**
   (it's static, so there's nothing to configure — no build command, no output directory).
3. Deploy. Vercel will give you a `*.vercel.app` URL you can text her, or attach a
   custom domain if you want something cuter (e.g. `happybirthdaykate.com`).

If you'd rather skip GitHub, `vercel --prod` from inside this folder works too, since
you've already got the Vercel CLI workflow down.

## Two things worth knowing

- **The product photo and the Kickstarter video are both hotlinked**, not stored in this
  repo. The photo comes from a Gadgeteer article covering the Aura launch; the video is
  the exact Kickstarter CDN URL you sent over. Kickstarter's video URLs sometimes carry a
  signed/expiring token, so if the video stops loading after a while, the fix is to
  download the .mp4 yourself and drop it in this folder as e.g. `aura.mp4`, then swap
  the `<source>` `src` in `index.html` to `aura.mp4`. Same idea for the photo if it
  ever goes down — save it as `aura.jpg` and point `src="aura.jpg"` instead.
- **The note under "Happy birthday, Kate" is a draft** — I wrote it generic on purpose.
  Open `index.html`, find the `<div class="note">` block, and make it sound like you.

## Structure

```
index.html    page content
styles.css    all styling (court-blue palette, condensed scoreboard type)
script.js     ~3 lines, just respects reduced-motion preference
```
