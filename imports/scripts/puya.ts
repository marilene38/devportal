import {
    convertH1ToFrontmatter,
    stripLinkExtensions,
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
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/languages/ts'
    },
]);
await processFile([
    {
        src: scriptLocation + '/../repos/puya-ts/README.md',
        transformations: [],
        dest: scriptLocation + '/../../src/content/docs/algokit/languages/ts/overview.md'
    },
]);

// Algorand Python
await processDirectories([
    {
        src: scriptLocation + '/../repos/puya/docs/',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/languages/py'
    },
]);
await processFile([
    {
        src: scriptLocation + '/../../src/content/docs/algokit/languages/py/index.md',
        transformations: [],
        dest: scriptLocation + '/../../src/content/docs/algokit/languages/py/overview.md'
    },
]);