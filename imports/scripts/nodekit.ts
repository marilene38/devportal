import fs from 'fs/promises';
import path from 'path';

const SOURCE_DIR = 'imports/repos/nodekit/docs/src/content/docs/reference';
const TARGET_DIR = 'src/content/docs/nodes/nodekit-reference/commands';

async function transformNodekitDocs() {
  try {
    // Ensure target directory exists
    await fs.mkdir(TARGET_DIR, { recursive: true });

    // Read all files from source directory
    const files = await fs.readdir(SOURCE_DIR);

    for (const file of files) {
      if (!file.endsWith('.md')) continue;

      const sourcePath = path.join(SOURCE_DIR, file);

      // Replace underscores with hyphens in filename
      let targetFile = file.replace(/_/g, '-');

      // If filename starts with "nodekit-", remove that prefix
      if (targetFile.startsWith('nodekit-')) {
        targetFile = targetFile.substring('nodekit-'.length);
      }

      const targetPath = path.join(TARGET_DIR, targetFile);

      // Read file content
      let content = await fs.readFile(sourcePath, 'utf-8');

      // Parse frontmatter
      const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
      const match = content.match(frontmatterRegex);

      if (match) {
        let frontmatter = match[1];
        frontmatter = frontmatter
          .split('\n')
          .filter(line => !line.startsWith('slug:'))
          .join('\n');

        // Remove "nodekit" from title (except for nodekit.md)
        if (file !== 'nodekit.md') {
          frontmatter = frontmatter.replace(
            /title: "nodekit (.*?)"/g,
            'title: "$1"',
          );
        }

        // Add order property for nodekit.md
        if (file === 'nodekit.md') {
          frontmatter += '\nsidebar:\n\torder: 1';
        }

        // Replace old frontmatter with new
        content = content.replace(frontmatterRegex, `---\n${frontmatter}\n---`);
      }

      // Transform links
      content = content.replace(
        /\[([^\]]+)\]\(\/reference\/nodekit(?:\/([^/)]+)(?:\/([^/)]+))?)?\)/g,
        (match, text, command, subcommand) => {
          if (subcommand) {
            return `[${text}](./nodekit-${command}-${subcommand})`;
          }
          if (command) {
            return `[${text}](../nodekit-${command})`;
          }
          return `[${text}](../nodekit)`;
        },
      );

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
