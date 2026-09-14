# Virtual Resume Website

A clean, professional virtual resume website showcasing my technical support and platform engineering experience. Built with semantic HTML5 and CSS3, designed for recruiters and hiring managers.

## Features

- **Home**: Professional introduction highlighting technical support expertise with AI tooling (MCPs, AI ROI)
- **Experience**: Detailed career history at Allstacks and Instawork with key accomplishments
- **Contact**: Minimal, professional contact page (email only)
- **View Resume**: Direct link to downloadable PDF resume (opens in new tab)
- **Responsive Design**: Mobile-first approach that works on all devices (320px+)
- **Semantic HTML**: Accessible and SEO-friendly structure

## Project Structure

```
virtual-resume/
├── index.html              # Entry point (redirects to home.html)
├── styles/
│   └── main.css           # Global stylesheet
├── assets/                # Media assets
│   └── resume/
│       └── Sommy_Yang_Resume.pdf  # Finalized resume PDF
├── includes/              # Reusable HTML components
│   ├── header.html
│   └── footer.html
├── main/                  # Site pages
│   ├── home.html          # Homepage with professional introduction
│   ├── experience.html    # Career history and accomplishments
│   └── contact.html       # Contact information (email only)
├── scripts/               # JavaScript files
│   ├── load-components.js # Component loader
│   └── main.js           # Main application logic
└── README.md             # This file
```

## Site Navigation

The site features a clean, recruiter-focused navigation:

- **Home** - Professional introduction and technical expertise
- **Experience** - Career history with measurable accomplishments
- **Contact** - Email contact (sommykyang@gmail.com)
- **View Resume** - PDF resume (opens in new tab)

## Viewing the Site

### Option 1: Using a Local Web Server (Recommended)

**Using Python:**
```bash
# Python 3
python -m http.server 8000
```

**Using Node.js (with http-server):**
```bash
# Install http-server globally (one time)
npm install -g http-server

# Run the server
http-server -p 8000
```

Then open your browser and navigate to `http://localhost:8000`

### Option 2: View on GitHub Pages

The live site is deployed at: `https://idhdad171920.github.io/virtual-resume/main/home.html`

## Deployment to GitHub Pages

This site is deployed via GitHub Pages.

### Live URL
- **Site**: https://idhdad171920.github.io/virtual-resume/main/home.html
- **Resume PDF**: https://idhdad171920.github.io/virtual-resume/assets/resume/Sommy_Yang_Resume.pdf

### Updating the Site

After making changes:

```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Update: description of changes"

# Push to GitHub
git push
```

GitHub Pages will automatically rebuild and deploy your site within 1-3 minutes.

## Key Features

### Professional Focus
- Designed specifically for recruiters and hiring managers
- Emphasizes technical support, platform engineering, and customer success experience
- Highlights expertise with AI tooling (MCPs, AI ROI, Coding AI)
- Clean, distraction-free layout focused on career accomplishments

### Technical Implementation
- Semantic HTML5 for accessibility and SEO
- Responsive CSS3 with mobile-first design (320px+)
- Component-based architecture with reusable header/footer
- PDF resume integration with secure new-tab opening
- No frameworks required - vanilla HTML/CSS/JS

### Experience Highlights
- **Allstacks**: Platform Support Engineer (99% SLA, 99% CSAT, 25% ticket reduction)
- **Vercel**: Senior Customer Success Engineer (97% Enterprise SLA, 95% CSAT, MTTR target attainment improved from 87% to 94% QoQ)
- **Calabrio**: Technical Lead (90% API/WFM Engineering deflection, 97% attainment against 3-business-day MTTR target)

## Contact

**Email**: sommykyang@gmail.com

For professional inquiries regarding technical support, customer engineering, platform support, or integration opportunities.
