// Fetch markdown content from a given URL and extract a section based on the heading
export async function fetchMarkdownSection(url, sectionName) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch markdown from ${url}`);
  }

  const markdownText = await response.text();
  return extractSection(markdownText, sectionName);
}

// Function to extract a markdown section based on any heading level (e.g., #, ##, ###)
function extractSection(markdownText, sectionName) {
  const lines = markdownText.split('\n');
  let isInSection = false;
  let extractedLines: string[] = [];
  let sectionHeadingLevel = 0;

  const headingRegex = /^(#+)\s+(.*)/; // Regex to match headings (e.g., # Section, ## Section)

  for (const line of lines) {
    const headingMatch = line.match(headingRegex);

    if (headingMatch) {
      const currentHeadingLevel = headingMatch[1].length;
      const currentHeadingText = headingMatch[2].trim();

      // Check if this is the section we're looking for
      if (!isInSection && currentHeadingText === sectionName) {
        isInSection = true;
        sectionHeadingLevel = currentHeadingLevel;
        continue;
      }

      // If we're in the section and we encounter another heading of the same or higher level, stop
      if (isInSection && currentHeadingLevel <= sectionHeadingLevel) {
        break;
      }
    }

    // If we're in the section, collect lines
    if (isInSection) {
      extractedLines.push(line);
    }
  }

  return extractedLines.length > 0 ? extractedLines.join('\n') : null;
}
