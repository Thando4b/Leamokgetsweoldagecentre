# Leamokgetswe Old Age Centre - WEDE5020 POE PART 2 & 3

## Live Links
- **GitHub:** https://github.com/YOUR_USERNAME/Leamokgetswe-Old-Age-Centre
- **Netlify:** https://YOUR_SITE.netlify.app

## Part 3 - Enhancements & Changelog (2026-10-27)

### Feedback Fixes from Part 2
- Fixed robots.txt and sitemap.xml - changed from folders to correct files at root directory
- Fixed duplicate folder structure - removed WEBSITE and WEDE2050-POE-PART-1 duplicates from root
- Fixed CSS/JS paths - changed from ../../ to relative paths CSS/style.css, JS/main.js
- Fixed responsive navigation issue flagged in Part 2 feedback

### New Functionality Added for Part 3 (2.1 & 2.2)
- Added JavaScript interactivity: Accordion FAQ, Modal for donations, Lightbox Gallery
- Added Leaflet.js interactive map to contact.html showing Limpopo location
- Added scroll animations using IntersectionObserver API
- Implemented dynamic content loading for Events page
- Implemented search & filter for programmes

### SEO Improvements (3.1 - 3.3)
- Added On-Page SEO: Title tags, Meta descriptions, H1-H3 structure, alt text with keywords
- Added robots.txt and sitemap.xml
- Added LocalBusiness schema markup
- Optimized images and added lazy loading
- Added security meta and form input sanitization

---

# WEDE2050-POE-PART-1
# WEDE2050-POE-PART-2
## Leamokgetswe Old Age Centre - CSS Styling and Responsive Design

This is Part 2 of the POE for Leamokgetswe Old Age Centre. Part 2 focuses on external CSS styling, responsive design, and accessibility improvements from Part 1 feedback.

### Changes Made (Changelog - Feedback from Part 1)
- Fixed: Added missing alt text to all images for accessibility
- Fixed: Corrected navigation consistency across all 5 pages (home, about, events, gallery, contact, donate)
- Added: Created external css/Style.css and linked to all pages
- Added: Implemented responsive breakpoints (1024px tablet, 600px mobile)
- Fixed: Resized logo from 400px to 70px and made hero images responsive
- Added: Implemented CSS Grid for card layout and Flexbox for hero-section and navigation

### Responsive Testing Evidence
- Desktop 1920px: Tested via Chrome DevTools - 3 column card-grid displays correctly, nav horizontal
- Tablet 768px: Switches to 1 column, nav remains horizontal, h1 scales to 2rem
- Mobile 375px: Vertical nav (.nav-links flex-direction: column), single column grid, fonts scale with rem units

**Screenshots:**
- Desktop view:
  <img width="1907" height="1062" alt="Desktop 1920px - 3 column grid" src="https://github.com/user-attachments/assets/62e27871-28da-49aa-904f-2dafa5bd3ef3" />
- Mobile view:
  <img width="1886" height="1062" alt="Mobile 375px - single column" src="https://github.com/user-attachments/assets/53181508-4fc9-461f-8f9d-a504aff87517" />

### References
- Mozilla Developer Network (2026) CSS Grid Layout. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
- W3Schools (2026) Responsive Images srcset and CSS Media Queries
- IIE WEDE5020 Module Manual (2026) Part 2 Rubric
