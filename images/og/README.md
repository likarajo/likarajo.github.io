## Open Graph Images

Place custom social media preview images here.

### Recommended Specifications

- **Dimensions**: 1200x630px (Facebook/LinkedIn recommended)
- **Format**: JPG or PNG
- **File size**: Under 1MB for faster loading
- **Aspect ratio**: 1.91:1

### Naming Convention

Use descriptive, kebab-case filenames:
- `work.jpg` - Main work/portfolio page
- `ai-agent-chatbot.jpg` - AI chatbot case study
- `language-translation.jpg` - Language translation project
- `covid19-sentiments.jpg` - COVID-19 sentiment analysis
- `trustworthy-ai-series.jpg` - Blog series on trustworthy AI
- `writing.jpg` - Writing/blog index page

### Image Content Guidelines

Each OG image should include:

1. **Page Title** (large, readable font - min 60px)
2. **Your Name/Brand** (smaller, in corner)
3. **Brief Description** (optional, 1-2 lines)
4. **Visual Element** (photo, icon, or graphic related to content)
5. **Consistent Color Scheme** (align with site design)

### Design Tools

**Free:**
- [Canva](https://www.canva.com/) - Templates available
- [Figma](https://www.figma.com/) - Full design control
- [OpenGraph.xyz](https://www.opengraph.xyz/) - Quick online generator

**Inspiration:**
- [OG Image Gallery](https://ogimage.gallery/)
- [Social Sizes](https://socialsizes.io/)

### Testing Your Images

Before publishing, test how they appear:

1. **Facebook**: [Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. **LinkedIn**: [Post Inspector](https://www.linkedin.com/post-inspector/)
3. **Twitter**: [Card Validator](https://cards-dev.twitter.com/validator)

### Using Custom OG Images

In your Astro page frontmatter:

```astro
---
import Base from '../layouts/Base.astro';

// Custom OG image
const ogImage = '/images/og/work.jpg';
---

<Base
  title="Work"
  description="..."
>
  <!-- Your content -->
</Base>
```

Then update Base.astro to use the custom image:

```astro
const ogImage = Astro.props.ogImage 
  ? new URL(Astro.props.ogImage, site).href
  : new URL('/images/site/profile.jpg', site).href;
```

### Priority Images to Create

1. **work.jpg** - Professional portfolio showcase
2. **ai-agent-chatbot.jpg** - Featured project
3. **trustworthy-ai-series.jpg** - Blog series banner
4. **writing.jpg** - Writing page

Keep the default profile.jpg as fallback for pages without custom images.
