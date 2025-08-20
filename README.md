# Portfolio

A modern portfolio website built with Next.js and TypeScript.

## PDF Resume Management

### Adding Your Resume PDF

1. **File Placement**: Place your resume PDF file in the `public/` directory
2. **Naming Convention**: Name the file `resume.pdf` (or update the path in `app/page.tsx`)
3. **File Size**: Keep the PDF under 5MB for optimal loading performance
4. **Format**: Ensure the PDF is properly formatted and accessible

### Current Implementation

- The resume link uses a robust utility function (`handleResumeView`) with multiple fallback strategies
- Opens PDF in a new tab with proper security attributes
- Uses three different approaches to handle popup blockers:
  1. Standard `window.open()` with basic features
  2. Alternative `window.open()` with additional window features
  3. Programmatic link creation and click
- Shows user-friendly error messages when all attempts fail
- Never redirects the current tab away from the portfolio
- Tracks PDF access for analytics (console logging)

### Troubleshooting

If the PDF doesn't load:

1. Check that the file exists in `public/Charles_Ginger_Eke_CV.pdf`
2. Verify the file isn't corrupted
3. Check browser console for error messages
4. Ensure the file size isn't too large
5. If popup is blocked, try right-clicking the link and selecting "Open in new tab"
6. Check browser settings to ensure popups are allowed for this site

## Development

```bash
npm run dev
```

## Deployment

The PDF will be automatically served from the `public/` directory when deployed.
