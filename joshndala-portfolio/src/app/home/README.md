# Home Page Components

This directory contains the components that make up the home page. The `hero.tsx` file in the `app` directory is the entry point for the home page, and it composes the components from this directory.

## Components

- `HeroSection.tsx`: The main hero section with the introduction and main navigation buttons.
- `TechStackSection.tsx`: The section that displays the core technologies.
- `WorkExperienceSection.tsx`: The section that displays a summary of work experience.
- `FeaturedProjectsSection.tsx`: The section that displays featured projects.
- `CtaSection.tsx`: The call to action section at the bottom of the page.

## Usage

The components are exported from the `index.ts` file, which allows for clean imports. For example:

```typescript
import {
  CtaSection,
  FeaturedProjectsSection,
  HeroSection,
  TechStackSection,
  WorkExperienceSection,
} from "./home";
```
