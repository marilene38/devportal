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

// AlgoKit TypeScript Testing
await processDirectories([
    {
        src: scriptLocation + '/../repos/algorand-typescript-testing/docs/testing-guide',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/unit-testing/ts'
    },
]);
await processFile([
    {
        src: scriptLocation + '/../../src/content/docs/algokit/unit-testing/ts/index.md',
        transformations: [],
        dest: scriptLocation + '/../../src/content/docs/algokit/unit-testing/ts/overview.md'
    },
]);

// AlgoKit Python Testing
await processDirectories([
    {
        src: scriptLocation + '/../repos/algorand-python-testing/docs/testing-guide',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/unit-testing/py'
    },
]);
await processFile([
    {
        src: scriptLocation + '/../../src/content/docs/algokit/unit-testing/py/index.md',
        transformations: [],
        dest: scriptLocation + '/../../src/content/docs/algokit/unit-testing/py/overview.md'
    },
]);