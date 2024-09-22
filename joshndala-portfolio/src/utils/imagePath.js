export function getImagePath(src) {
    const basePath = process.env.NODE_ENV === 'production' ? '/personal-website' : '';
    return `${basePath}${src}`;
  }