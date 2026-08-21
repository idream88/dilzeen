# Dilzeen Engineer — Signature Profile

Client-specific fill of the Words Out Email Signature System profile contract.

**Do not treat this file as the reusable system.** The source of truth for layouts, modules, tokens, and documentation is:

- Local: `/Users/gtmedia/Documents/Words Out Agency/systems/email-signature/`
- Remote: `https://github.com/idream88/wordsout-agency-assets.git`
- System version used: `email-signature` `1.0.0-rc.2`
- Canonical layout file: `layouts/professional.html`
- Profile contract: `shared/profiles/signature-profile.md`

Assembly for this client: start from Professional, remove disabled `<!-- MODULE: id -->` blocks, replace placeholders. Generated HTML: `dilzeen-professional.html`.

---

## Signature setup

- **Layout ID:** `professional`
- **Related brand profile path / name:** None in this repository. Brand values below are taken from the Dilzeen project (`src/data/site.ts`, `src/styles/global.css`) and from explicitly approved client decisions.
- **Notes for generator / designer:** First Dilzeen implementation. Logo is the visual anchor. Company line is Keller Williams Southlake, so the separate `brokerage-affiliate` module is off. Website `https://dilzeen.com` is the approved production domain; the site was not live there when this profile was filled.

---

## 1. Brand / business data

### Business

- **Business name:** Keller Williams Southlake
- **Tagline:** DFW Realtor with local expertise and a Vastu & Feng Shui home search perspective
- **Website URL:** https://dilzeen.com
- **Website label:** Dilzeen.com

### Colors (hex, including `#`)

From `src/styles/global.css`. Only primary, neutrals, and the email-safe stack are applied in the Professional HTML.

- **Primary:** `#b91c38`
- **Secondary:** `#9a1830`
- **Accent:** `#c4a898`
- **Neutral dark (text):** `#2c2420`
- **Neutral mid (secondary text):** `#3d3632`
- **Neutral light (dividers / backgrounds):** `#d4ccc3`
- **CTA text (on primary button):** `#ffffff`

### Typography

- **Font stack:** `Arial, Helvetica, sans-serif`

Site webfonts (Cormorant Garamond, Source Sans 3) are not used. Email clients do not reliably load web fonts; this follows the Email Signature System token guidance.

### Logos

- **Source asset (do not overwrite):** `public/images/dilzeen-butterfly-name-transparent.png`
- **Email-optimized asset:** `public/images/email/dilzeen-signature-logo.png`
- **Logo image URL:** `https://dilzeen.com/images/email/dilzeen-signature-logo.png`
- **Logo width (px):** `120`
- **Logo alt text:** Dilzeen Engineer logo
- **Export notes:** Trimmed transparent padding, resized to 240×185 (2× the 120px display width) as PNG with alpha preserved. Original framed lockup was not used.

### Contact (company defaults)

Person fields override these in the signature. Address is recorded here because it is verified in the project, but the `address` module is **off**.

- **Company phone:** (949) 813-4699
- **Company email:** DilzeenEngineer@KW.com
- **Street:** 2106 E State Highway 114, Ste 101
- **City:** Southlake
- **Region:** TX
- **Postal code:** 76092
- **Country:** US
- **Address single line:** 2106 E State Highway 114, Ste 101, Southlake, TX 76092

### Social links

Not provided in the Dilzeen project. `social-icons` is **off**.

- **Facebook URL:** Not provided
- **Instagram URL:** Not provided
- **LinkedIn URL:** Not provided
- **X / Twitter URL:** Not provided
- **YouTube URL:** Not provided
- **TikTok URL:** Not provided

### Call to action

Not used. `cta-button` is **off**.

- **CTA label:** Not used
- **CTA URL:** Not used

### Reviews (optional social proof)

Enabled. Platform-neutral link to Dilzeen’s reviews page (hosts the reputation widget / testimonials).

- **Reviews URL:** https://dilzeen.com/reviews
- **Reviews label:** Read My Client Reviews

### Certifications

Not used. `certifications` is **off**.

- **Cert 1 name:** Not used
- **Cert 1 URL:** Not used
- **Cert 2 name:** Not used
- **Cert 2 URL:** Not used

### Legal / affiliate

- **Legal disclaimer:** Keller Williams Southlake | Texas Real Estate License #0828341 | Equal Housing Opportunity
- **Legal presentation (client refinement):** `11px` / `#5c5c5c` (lighter than title/contact; not smaller than 10px). May wrap to two lines on narrow widths. Wording unchanged.
- **Copyright line:** Not included in this signature. The site footer uses a copyright line, but it was omitted here so the legal area is only the approved verified disclosure.
- **Brokerage / affiliate information:** Keller Williams Southlake (shown via the `company` module; `brokerage-affiliate` is **off**)

The legal line is verified project copy (`src/data/site.ts` affiliation and license; footer Equal Housing Opportunity text). It is not Keller Williams–authored or TREC boilerplate. No additional legal language was invented.

---

## 2. Person-specific data

- **Full name:** Dilzeen Engineer
- **Title / role:** Home Realtor
- **Direct phone:** (949) 813-4699
- **Mobile phone (optional):** Not provided as a separate number
- **Email:** DilzeenEngineer@KW.com
- **Headshot image URL (absolute HTTPS):** Not used (`headshot` is **off**)
- **Headshot width (px):** Not used
- **Pronouns (optional):** Not provided
- **Department (optional):** Not provided
- **Calendar / booking URL (optional):** Not provided

---

## 3. Module enable / disable

| Module ID | Enabled | Notes |
|-----------|---------|-------|
| `logo` | on | Butterfly + Dilzeen wordmark |
| `headshot` | off | Not in Professional; logo is the visual anchor |
| `name` | on | |
| `title` | on | |
| `company` | on | Keller Williams Southlake |
| `phone` | on | Uses `person_phone` |
| `email-address` | on | |
| `website` | on | Approved production domain |
| `address` | off | Verified in project; not shown in this version |
| `reviews` | on | `https://dilzeen.com/reviews` — “Read My Client Reviews” |
| `social-icons` | off | No profile URLs in the project |
| `cta-button` | off | Not in this Professional pass |
| `certifications` | off | Not in this Professional pass |
| `legal-disclaimer` | on | Verified license / EHO line only |
| `brokerage-affiliate` | off | Company line already identifies the brokerage |

---

## 4. Production dependencies / unresolved QA

These items block treating this signature as production-complete. They are not missing placeholders inside `dilzeen-professional.html`.

1. **Logo URL is pending live hosting.** The HTML uses `https://dilzeen.com/images/email/dilzeen-signature-logo.png`. Dilzeen.com was not live when this was generated. After deployment, confirm that URL returns the PNG publicly over HTTPS.
2. **Website URL is the approved future domain.** Confirm `https://dilzeen.com` resolves to this site before production mailbox install.
3. **Reviews URL depends on the live site.** Confirm `https://dilzeen.com/reviews` is publicly available after deployment.
4. **Real-send compatibility QA is not complete.** The Agency Email Signature System is `1.0.0-rc.2`. This client HTML has not been verified by real sends in Gmail, Outlook, Apple Mail, iOS Mail, or Android Mail.
5. **Keller Williams / TREC required disclaimer text was not provided.** This version uses only the verified license / EHO line. Do not treat that line as a substitute for brokerage-required legal copy if KW later supplies it.
6. **Social, CTA, address, certifications, and headshot** remain off until those URLs or assets are explicitly approved.
