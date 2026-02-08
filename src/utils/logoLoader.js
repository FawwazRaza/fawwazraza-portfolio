// Dynamically import only image files from Assets/logos folder
const logoModules = import.meta.glob('../Assets/logos/*.{png,svg,jpg,jpeg,ico,webp}', { eager: true });

// Create a normalized name-to-path mapping
const logoMap = {};

// Process all imported logos into a normalized map
Object.keys(logoModules).forEach((path) => {
  // Extract filename from path: '../Assets/logos/Python.svg' -> 'Python.svg'
  const filename = path.split('/').pop();
  
  // Create multiple normalized keys for better matching
  // Remove extension, convert to lowercase, remove spaces/special chars
  const normalizedKeys = [
    filename.toLowerCase(), // 'python.svg'
    filename.split('.')[0].toLowerCase(), // 'python'
    filename.split('.')[0].toLowerCase().replace(/[^a-z0-9]/g, ''), // 'python'
    filename.toLowerCase().replace(/[^a-z0-9]/g, ''), // 'pythonsvg'
  ];
  
  // Store the actual logo default export for each normalized key
  normalizedKeys.forEach(key => {
    if (!logoMap[key]) {
      logoMap[key] = logoModules[path].default;
    }
  });
});

/**
 * Get logo for a skill name. Tries multiple matching strategies.
 * @param {string} skillName - The name of the skill (e.g., "Node.js", "Python", "FastAPI")
 * @param {string} cdnFallback - Optional CDN URL to use if no local logo found
 * @returns {string} - Logo URL (local import or CDN)
 */
export function getSkillLogo(skillName, cdnFallback = null) {
  // Try multiple normalized variations of the skill name
  const normalizedVariations = [
    skillName.toLowerCase(), // 'node.js'
    skillName.toLowerCase().replace(/[^a-z0-9]/g, ''), // 'nodejs'
    skillName.toLowerCase().replace(/\s+/g, ''), // 'node.js' (no space)
    skillName.toLowerCase().replace(/[^a-z0-9]/g, '').replace(/js$/, ''), // 'node'
    skillName.toLowerCase().split(' ')[0], // 'node' from 'node.js'
  ];
  
  // Try each variation against logo map
  for (const variant of normalizedVariations) {
    // Try exact match first
    if (logoMap[variant]) {
      return logoMap[variant];
    }
    
    // Try adding common extensions
    const extensions = ['.png', '.svg', '.jpg', '.ico'];
    for (const ext of extensions) {
      if (logoMap[variant + ext]) {
        return logoMap[variant + ext];
      }
    }
    
    // Try partial matching (logo name contains variant)
    const partialMatch = Object.keys(logoMap).find(key => 
      key.includes(variant) || variant.includes(key.split('.')[0])
    );
    if (partialMatch) {
      return logoMap[partialMatch];
    }
  }
  
  // If no local logo found, return CDN fallback or default icon
  return cdnFallback || `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skillName.toLowerCase().replace(/[^a-z0-9]/g, '')}/${skillName.toLowerCase().replace(/[^a-z0-9]/g, '')}-original.svg`;
}

// CDN helper for devicons
export const cdn = (path) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

// Export the logo map for debugging
export { logoMap };
