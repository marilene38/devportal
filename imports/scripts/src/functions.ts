import { readFile, writeFile, readdir, mkdir, rm, cp, mkdtemp } from 'fs/promises';
import path from 'path';
import { DirectoryTransformation, FileTransformation } from './types';

async function getAllFiles(directory: string, filePattern: string): Promise<string[]> {
    const files: string[] = [];

    async function scan(dir: string) {
        const entries = await readdir(dir, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);

            if (entry.isDirectory()) {
                await scan(fullPath);
            } else if (entry.isFile() && entry.name.match(filePattern)) {
                files.push(fullPath);
            }
        }
    }

    await scan(directory);
    return files;
}

async function processDirectories(configs: DirectoryTransformation[]) {
    try {
        for (const config of configs) {
            const tempDir = await mkdtemp('.tmp');

            await cp(config.src, tempDir, { recursive: true });
            const files = await getAllFiles(tempDir, '\\.md$');

            for (const file of files) {
                const content = await readFile(file, 'utf-8');
                const transformedContent = config.transformations.reduce(
                    (currentContent, transform) => transform(currentContent),
                    content
                );
                await writeFile(file, transformedContent, 'utf-8');
            }

            await rm(config.dest, { recursive: true, force: true });
            await mkdir(config.dest, { recursive: true });
            await cp(tempDir, config.dest, { recursive: true });
            await rm(tempDir, { recursive: true, force: true });

            console.log(`Successfully processed files from ${config.src} to ${config.dest}`);
        }
    } catch (error) {
        console.error('Error processing files:', error);
    }
}

async function processFile(configs: FileTransformation[]) {
    try {
        for (const config of configs) {
            const content = await readFile(config.src, 'utf-8');
            const transformedContent = config.transformations.reduce(
                (currentContent, transform) => transform(currentContent),
                content
            );

            await mkdir(path.dirname(config.dest), { recursive: true });
            await writeFile(config.dest, transformedContent, 'utf-8');

            console.log(`Successfully processed file from ${config.src} to ${config.dest}`);
        }
    } catch (error) {
        console.error('Error processing file:', error);
    }
}

export {
    processDirectories,
    processFile
};