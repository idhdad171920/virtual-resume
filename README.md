# Personal Portfolio Website

A simple, responsive personal portfolio website showcasing my professional journey in technology. Built with semantic HTML5 and CSS3, designed to be clean, accessible, and easy to maintain.

## Features

- **About Section**: Personal introduction and background
- **Tech Journey**: Story of how I got started in technology
- **Experience**: Professional history and career progression
- **Responsive Design**: Mobile-first approach that works on all devices (320px+)
- **Semantic HTML**: Accessible and SEO-friendly structure

## Project Structure

```
personal-portfolio-website/
├── index.html              # Main HTML file
├── styles/
│   └── main.css           # Stylesheet
├── assets/                # Media assets
│   ├── images/
│   └── videos/
├── includes/              # Reusable HTML components
│   ├── header.html
│   └── footer.html
├── main/                  # Additional pages
│   ├── about.html
│   ├── changelog.html
│   ├── education.html
│   ├── experience.html
│   ├── hobbies.html
│   ├── home.html
│   ├── journey.html
│   └── source.html
├── scripts/               # JavaScript files
│   ├── load-components.js
│   └── main.js
└── README.md             # This file
```

## Viewing the Site Locally

### Option 1: Using a Local Web Server (Recommended)

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (with http-server):**
```bash
# Install http-server globally (one time)
npm install -g http-server

# Run the server
http-server -p 8000
```

**Using PHP:**
```bash
php -S localhost:8000
```

Then open your browser and navigate to `http://localhost:8000`

### Option 2: Opening Directly in Browser

You can also open `index.html` directly in your browser by double-clicking the file or using:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

**Note**: Some features may not work correctly when opening files directly due to browser security restrictions.

## Deployment to GitHub Pages

### Initial Setup

1. **Create a GitHub repository**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `your-username.github.io` for a user site, or any name for a project site
   - Keep it public (required for free GitHub Pages)

2. **Initialize Git and push your code**
   ```bash
   # Initialize Git repository (if not already done)
   git init

   # Add all files
   git add .

   # Commit your changes
   git commit -m "Initial commit: Personal portfolio website"

   # Add remote repository
   git remote add origin https://github.com/your-username/your-repo-name.git

   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on **Settings**
   - Scroll down to **Pages** section (in the left sidebar)
   - Under **Source**, select the branch you want to deploy (usually `main`)
   - Select the root folder `/` as the source
   - Click **Save**

4. **Access your site**
   - Your site will be available at:
     - User site: `https://your-username.github.io`
     - Project site: `https://your-username.github.io/your-repo-name`
   - It may take a few minutes for the site to go live

### Updating Your Site

After making changes to your site:

```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Update: description of changes"

# Push to GitHub
git push
```

GitHub Pages will automatically rebuild and deploy your site within a few minutes.

### Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to your repository root with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. Enable HTTPS in GitHub Pages settings

See [GitHub Pages documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for detailed instructions.

## Technologies Used

- **HTML5**: Semantic markup for content structure
- **CSS3**: Modern styling with Flexbox and media queries
- **JavaScript**: Component loading and interactivity
- **GitHub Pages**: Free static site hosting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- Add images and videos to showcase projects
- Implement smooth scrolling navigation
- Add contact form
- Include project portfolio section
- Dark mode toggle
- Blog section

## License

This project is open source and available for personal use.

## Contact

Feel free to reach out if you have any questions or suggestions!
