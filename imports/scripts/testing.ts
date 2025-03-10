import {
    convertH1ToFrontmatter,
    stripLinkExtensions,
} from './src/transformers';
import {
    processDirectories,
    processFile
} from './src/functions';

// AlgoKit TypeScript Testing
await processDirectories([
    {
        src: './../repos/algorand-typescript-testing/docs/testing-guide',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
        ],
        dest: './../../src/content/docs/algokit/unit-testing/ts'
    },
]);
await processFile([
    {
        src: './../../src/content/docs/algokit/unit-testing/ts/index.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
        ],
        dest: './../../src/content/docs/algokit/unit-testing/ts/overview.md'
    },
]);

// AlgoKit Python Testing
await processDirectories([
    {
        src: './../repos/algorand-python-testing/docs',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
        ],
        dest: './../../src/content/docs/algokit/unit-testing/py'
    },
]);
await processFile([
    {
        src: './../../src/content/docs/algokit/unit-testing/py/index.md',
        transformations: [],
        dest: './../../src/content/docs/algokit/unit-testing/py/overview.md'
    },
]);