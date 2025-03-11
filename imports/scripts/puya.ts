import {
    convertH1ToFrontmatter,
    stripLinkExtensions,
    replaceTitleColon,
} from './src/transformers';
import {
    processDirectories,
    processFile
} from './src/functions';
import { fileURLToPath } from 'url';
import path from 'path';

const scriptLocation = path.dirname(fileURLToPath(import.meta.url));

// Algorand Typescript
await processDirectories([
    {
        src: scriptLocation + '/../repos/puya-ts/docs/',
        pattern: /^lg-/,
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            replaceTitleColon,
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/languages/ts'
    },
]);
await processFile([
    {
        src: scriptLocation + '/../repos/puya-ts/README.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            replaceTitleColon,
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/languages/ts/overview.md'
    },
]);

// Algorand Python
await processDirectories([
    {
        src: scriptLocation + '/../repos/puya/docs/',
        pattern: /^lg-/,
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            replaceTitleColon,
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/languages/py'
    },
]);
await processFile([
    {
        src: scriptLocation + '/../repos/puya/docs/index.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            replaceTitleColon,
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/languages/py/overview.md'
    },
    {
        src: scriptLocation + '/../repos/puya/docs/language-guide.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            replaceTitleColon,
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/languages/py/language-guide.md'
    },
]);