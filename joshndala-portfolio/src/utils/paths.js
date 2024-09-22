export function getStaticFilePath(filename) {
    const basePath = process.env.NODE_ENV === 'production' ? '/personal-website' : '';
    return `${basePath}/${filename}`;
  }

  export function getSectionLink(sectionId) {
    const basePath = process.env.NODE_ENV === 'production' ? '/personal-website' : '';
    return `${basePath}/#${sectionId}`;
  }