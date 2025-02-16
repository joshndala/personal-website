export function getStaticFilePath(filename) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}/${filename}`;
}

export function getSectionLink(sectionId) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}/#${sectionId}`;
}
