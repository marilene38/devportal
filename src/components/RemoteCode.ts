import fs from 'fs/promises';
import { URL } from 'url';

export async function getSelectedCode(
  src: string,
  snippet: string | undefined,
): Promise<string> {
  const code = await getCode(src);

  if (!snippet) {
    return code;
  }

  const pattern = `^ *(//|#) example: ${snippet}$`;
  const regex = new RegExp(pattern, 'g');
  const codeLines = code.split('\n');

  const occurrenceIndexes = codeLines.reduce<number[]>(
    (indexes, line, index) => {
      if (regex.test(line)) {
        indexes.push(index);
      }
      return indexes;
    },
    [],
  );

  if (occurrenceIndexes.length !== 2) {
    throw new Error(
      `Error: Pattern "${pattern}" must occur exactly twice. Found: ${occurrenceIndexes.length}`,
    );
  }

  const [startIndex, endIndex] = occurrenceIndexes;
  return codeLines.slice(startIndex + 1, endIndex).join('\n');
}

async function getCode(src: string): Promise<string> {
  try {
    new URL(src);
    const response = await fetch(src);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    if (error instanceof TypeError) {
      try {
        return await fs.readFile(src, 'utf-8');
      } catch (fsError) {
        if (fsError instanceof Error) {
          throw new Error(`Error reading file: ${fsError.message}`);
        }
        throw new Error(`Unknown error reading file: ${fsError}`);
      }
    } else {
      throw error;
    }
  }
}
