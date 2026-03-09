# Getting Started with Your BMC205 Course Website

## What You've Got

Your course website is now set up with:

✅ Home page with course overview  
✅ Complete syllabus  
✅ Weekly schedule  
✅ 8 content/lecture pages  
✅ 4 assignment pages  
✅ 3 detailed lab manuals  
✅ Resources page with tools and references  
✅ Custom styling matching GCET theme  

## Next Steps

### 1. Add Your Logo/Favicon

The site references `files/favicon-512.png` for the logo. You need to:

1. Create or find a logo image (512x512px recommended)
2. Save it as `favicon-512.png` in the `files/` folder
3. Optionally create smaller versions for favicon:
   - `favicon-32x32.png`
   - `favicon-16x16.png`

### 2. Install Quarto

Download and install from: https://quarto.org/docs/get-started/

### 3. Preview Your Site

**Option A: Using VS Code Tasks (Recommended)**

1. Make sure you have the project folder open in VS Code
2. Go to **Terminal → Run Task** (or press `Ctrl+Shift+P` and type "Run Task")
3. Select **"Quarto: Preview"** from the list
4. Your site will launch in a browser at `http://localhost:3000` or similar
5. Changes you make to files will auto-reload in the browser!

**Option B: Using Command Line**

Open a terminal in the project folder and run:

```bash
quarto preview
```

This will open your site in a browser. Changes you make will auto-reload!

### 4. Customize Content

Edit the `.qmd` files to:
- Add your actual course content from BMC205 folder
- Update dates and deadlines
- Add your real images and materials
- Modify assignments to match your requirements

### 5. Update Personal Information

In `_quarto.yml`, update:
- Your email address
- Your website URL
- Office location
- Course GitHub repository URL (if you have one)

### 6. Add Your Course Materials

Copy content from your `BMC205` folder:
- Syllabus details → `syllabus.qmd`
- Session plans → content pages
- Lab manuals → labs folder
- Assignments → assignment folder
- Question banks → can be added as additional resources

## Building the Final Site

When ready to publish:

## VS Code Tasks

All build and publishing tasks are configured in `.vscode/tasks.json`. You can run them from VS Code:

**Method 1: Terminal Menu**
- Go to **Terminal → Run Task** (or press `Ctrl+Shift+P` → type "Run Task")
- Select the task you want to run

**Method 2: Command Palette**
- Press `Ctrl+Shift+B` for the default build task (Preview)
- Or press `Ctrl+Shift+P` and search for "Run Task"

### Available Tasks:

1. **Quarto: Preview** (Default Build Task)
   - Launches a local development server
   - Auto-reloads when you make changes
   - Perfect for editing and testing locally
   - Press `Ctrl+Shift+B` to run

2. **Quarto: Render**
   - Builds the entire site
   - Outputs to `_site/` folder
   - Use this before publishing

3. **Quarto: Render to PDF**
   - Renders the site as a PDF
   - Useful for creating downloadable documents

4. **Quarto: Publish to GitHub Pages**
   - Publishes directly to GitHub Pages
   - Requires GitHub repository setup
   - Updates live site automatically

```bash
# Render the entire site
quarto render

# The output will be in _site/ folder
```

## Publishing Options

### Option 1: GitHub Pages (Using VS Code Task)

1. Create a GitHub repository
2. Push your code
3. Use VS Code Task: **Quarto: Publish to GitHub Pages**

### Option 2: GitHub Pages (Command Line)

1. Create a GitHub repository
2. Push your code
3. Run: `quarto publish gh-pages`

### Option 3: Netlify (Free)

1. Create Netlify account
2. Run: `quarto publish netlify`

### Option 4: Quarto Pub (Free)

1. Create Quarto Pub account  
2. Run: `quarto publish quarto-pub`

### Option 5: Your Own Server

Upload the contents of `_site/` folder to your web server.

## File Structure

```
gcet-bmc205-webtech2025/
├── .vscode/              ← VS Code configuration
│   ├── tasks.json       ← Build tasks (preview, render, publish)
│   ├── settings.json    ← Editor preferences
│   └── extensions.json  ← Recommended extensions
├── _quarto.yml          ← Main configuration
├── index.qmd            ← Home page
├── syllabus.qmd         ← Course syllabus
├── schedule.qmd         ← Weekly schedule
├── content/             ← Lecture materials
├── assignment/          ← Assignments
├── labs/                ← Lab manuals
├── resource/            ← Additional resources
├── html/                ← Custom CSS styles
└── files/               ← Images, PDFs, etc.
```

## Tips for Success

1. **Use VS Code Tasks**: Press `Ctrl+Shift+B` to preview or use Terminal → Run Task
2. **Preview frequently**: Keep the preview server running while editing
3. **Validate changes**: Check that pages look good before publishing
4. **Use version control**: Initialize a Git repository to track changes
5. **Backup regularly**: Keep copies of your work
6. **Test links**: Make sure all internal links work
7. **Check in multiple browsers**: Test in Chrome, Firefox, and Edge

## Common Issues

### Site Won't Render
- Make sure Quarto is installed correctly
- Check for syntax errors in `.qmd` files
- Look at the error messages in terminal

### Missing Images
- Check file paths are correct
- Ensure images are in the right folder
- Use relative paths (e.g., `images/photo.jpg`)

### Styling Not Applied
- Make sure CSS files are in `html/` folder
- Check `_quarto.yml` references the CSS files correctly
- Clear browser cache and refresh

## Need Help?

- Quarto Documentation: https://quarto.org/docs/guide/
- Quarto Community: https://github.com/quarto-dev/quarto-cli/discussions
- Course template inspiration: https://github.com/andrewheiss/datavizf25.classes.andrewheiss.com

## Questions?

If you run into issues or need help customizing:
1. Check the Quarto documentation
2. Look at the example templates
3. Search GitHub issues
4. Ask in Quarto community forums

Good luck with your course website! 🎓
