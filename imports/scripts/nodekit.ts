import fs from 'fs/promises';
import path from 'path';

const SOURCE_DIR = 'imports/repos/nodekit/.devportal';
const TARGET_DIR = 'src/content/docs/nodes/nodekit-reference';

async function transformNodekitDocs() {
  try {
    // Ensure target directory exists
    await fs.mkdir(TARGET_DIR, { recursive: true });

    // Read all files from source directory
    const files = await fs.readdir(SOURCE_DIR);

    for (const file of files) {
      if (!file.endsWith('.md')) continue;

      const sourcePath = path.join(SOURCE_DIR, file);

      // Set the filename
      let targetFile = 'commands.md';
      const targetPath = path.join(TARGET_DIR, targetFile);

      // Read file content
      let content = await fs.readFile(sourcePath, 'utf-8');

      // Write transformed content to target file
      await fs.writeFile(targetPath, content);
    }

    console.log('Documentation transformation completed successfully.');
  } catch (error) {
    console.error('Error transforming documentation:', error);
    throw error;
  }
}

transformNodekitDocs();
