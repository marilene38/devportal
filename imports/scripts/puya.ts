import {
    convertH1ToFrontmatter,
    stripLinkExtensions,
} from './src/transformers';
import {
    processDirectories,
    processFile
} from './src/functions';

// Algorand Typescript
await processDirectories([
    {
        src: './../repos/puya-ts/docs/',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
        ],
        dest: './../../src/content/docs/algokit/languages/ts'
    },
]);
await processFile([
    {
        src: './../repos/puya-ts/README.md',
        transformations: [],
        dest: './../../src/content/docs/algokit/languages/ts/overview.md'
    },
]);

// Algorand Python
await processDirectories([
    {
        src: './../repos/puya/docs/',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
        ],
        dest: './../../src/content/docs/algokit/languages/py'
    },
]);
await processFile([
    {
        src: './../../src/content/docs/algokit/languages/py/index.md',
        transformations: [],
        dest: './../../src/content/docs/algokit/languages/py/overview.md'
    },
]);