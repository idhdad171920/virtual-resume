# Resume Setup Instructions

## Current Status

✅ Folder structure created: `/assets/resume/`  
❌ Resume PDF not yet added  
⏸️ Resume buttons prepared but commented out in code

---

## How to Add Your Resume

### Step 1: Add the PDF File

1. Create/finalize your 2-page public resume PDF
2. Name it exactly: **`Sommy_Yang_Resume.pdf`**
3. Copy it to: **`/assets/resume/Sommy_Yang_Resume.pdf`**

### Step 2: Enable the Resume Buttons

Open **`main/home.html`** and find these two commented sections:

**Location 1 - Hero CTA Section (around line 63):**
```html
<!-- RESUME BUTTON: Uncomment the line below once Sommy_Yang_Resume.pdf is added to /assets/resume/ -->
<!-- <a href="../assets/resume/Sommy_Yang_Resume.pdf" class="cta-button cta-secondary" target="_blank" rel="noopener noreferrer">View Resume</a> -->
```

**Location 2 - Final CTA Section (around line 241):**
```html
<!-- RESUME BUTTON: Uncomment the line below once Sommy_Yang_Resume.pdf is added to /assets/resume/ -->
<!-- <a href="../assets/resume/Sommy_Yang_Resume.pdf" class="cta-button cta-secondary" target="_blank" rel="noopener noreferrer">View Resume</a> -->
```

**Uncomment both lines by removing the `<!--` and `-->`:**

```html
<a href="../assets/resume/Sommy_Yang_Resume.pdf" class="cta-button cta-secondary" target="_blank" rel="noopener noreferrer">View Resume</a>
```

### Step 3: Test Locally

1. Open `index.html` in a browser
2. Navigate to the Home page
3. Click "View Resume" buttons
4. Verify PDF opens in new tab
5. Test on mobile if possible

### Step 4: Commit and Deploy

```bash
git add assets/resume/Sommy_Yang_Resume.pdf
git add main/home.html
git commit -m "Add public resume PDF and enable resume buttons"
git push
```

GitHub Pages will automatically deploy the updated site with the resume.

---

## Resume Button Behavior

- **Link text:** "View Resume" (descriptive, not generic)
- **Behavior:** Opens PDF in new browser tab (`target="_blank"`)
- **Security:** Uses `rel="noopener noreferrer"` for safety
- **Preview-first:** Visitors can preview, then choose to download/print
- **Mobile-friendly:** Works on all devices
- **Accessibility:** Descriptive link text for screen readers

---

## Resume Content Strategy

### Featured Roles (Most Detail)
1. **Allstacks** - Platform Support Engineer (April 2025 – September 2026)
2. **Vercel** - Senior Customer Success Engineer (August 2022 – February 2025)
3. **Calabrio** - Technical Lead (April 2019 – August 2022)

### Supporting Roles (Concise)
4. Amazon Robotics - Technical Support Engineer
5. Sectigo - Web Security Engineer
6. Arvig - Help Desk Technician
7. HCL Technologies - Technical Support Representative
8. Lake Superior College - Technology Support

### Career Progression Story
IT & Technical Support → Networking & Systems → Enterprise Application Support → Web Security → Cloud & Incident Response → APIs & Integrations → Technical Leadership / SME Ownership → Customer Success Engineering → Platform Support → Support Operations, Automation & AI

---

## Important Notes

### What NOT to Include in Public Resume
- ❌ Personal home address
- ❌ Social Security Number or sensitive IDs
- ❌ References (say "Available upon request")
- ❌ Salary history or expectations
- ❌ Company-confidential metrics or data
- ❌ Internal tooling details that are proprietary

### What TO Include
- ✅ Contact: Email, Phone, LinkedIn, GitHub
- ✅ Professional summary
- ✅ Technical skills (cloud, APIs, security, tools)
- ✅ Work experience with verified accomplishments
- ✅ Education and certifications
- ✅ Relevant technical projects

### Verified Metrics You Can Use
- 99% SLA Attainment (Allstacks)
- 99% CSAT (Allstacks)
- 25% Reduction in Support Volume & Engineering Escalations (Allstacks)
- 95% CSAT (Vercel)
- 100+ Customers Supported (Vercel)
- 90% API & WFM Engineering Escalation Deflection (Calabrio)
- 97% 3-Business-Day MTTR Target Attainment (Calabrio)

Do NOT invent metrics for older positions. Focus on responsibilities, technologies, and career progression instead.

---

## Troubleshooting

**Problem:** Resume button appears but PDF doesn't open  
**Solution:** Check that file is named exactly `Sommy_Yang_Resume.pdf` (case-sensitive on some systems)

**Problem:** 404 error when clicking resume  
**Solution:** Verify file path is correct: `/assets/resume/Sommy_Yang_Resume.pdf`

**Problem:** Resume downloads instead of previewing  
**Solution:** This is expected behavior on some browsers/devices - visitors can still view it

**Problem:** Resume not updating on GitHub Pages  
**Solution:** Wait 1-2 minutes for deployment, clear browser cache, or try incognito mode

---

## Optional Enhancements

After the resume is working, you can optionally:

1. Add resume link to Contact page
2. Add resume mention in README.md
3. Create a "Printer-Friendly" version if needed
4. Add Google Analytics to track resume views (if desired)

---

## Questions?

If you need to change the resume filename or location, update these references:
- `main/home.html` (2 locations)
- This documentation file
