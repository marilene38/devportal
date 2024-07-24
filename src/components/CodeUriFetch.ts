// Retrieves the raw code file from the provided URI and optionally
// extracts specified lines from the file.
export async function fetchAndExtract(
  uri: string,
  lines: string | undefined,
): Promise<string> {
  lines = lines ? lines.replace(/\s+/g, '') : lines;
  const linesRegex = /^(\d+(-\d+)?)(,\d+(-\d+)?)*$/;
  if (lines && !linesRegex.test(lines)) {
    throw new Error('CodeUri: Invalid lines format.');
  }

  const code = await fetch(uri).then(r => {
    if (!r.ok) {
      throw new Error(
        `CodeUri: Failed to fetch code from ${uri}: ${r.statusText}`,
      );
    }
    return r.text();
  });

  const codeLines = code.split('\n');
  let selectedLines: string[] = [];
  if (lines) {
    lines.split(',').forEach((part: string) => {
      if (part.includes('-')) {
        const [start, end] = part.split('-').map(Number);
        if (start < 1 || start > end) {
          throw new Error('CodeUri: Invalid start or end line.');
        }
        selectedLines.push(...codeLines.slice(start - 1, end));
      } else {
        const line = Number(part);
        if (line < 1) {
          throw new Error('CodeUri: Invalid line number.');
        }
        selectedLines.push(codeLines[line - 1]);
      }

      selectedLines.push('');
    });

    selectedLines.pop();
  } else {
    selectedLines = codeLines;
  }

  return selectedLines.join('\n');
}
