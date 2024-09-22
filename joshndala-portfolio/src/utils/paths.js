export function getStaticFilePath(filename) {
    const basePath = process.env.NODE_ENV === 'production' ? '/personal-website' : '';
    return `${basePath}/${filename}`;
  }