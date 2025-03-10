import {
    convertH1ToFrontmatter,
    stripLinkExtensions,
    removeLine,
} from './src/transformers';
import {
    processDirectories,
    processFile
} from './src/functions';
import { fileURLToPath } from 'url';
import path from 'path';

const scriptLocation = path.dirname(fileURLToPath(import.meta.url));

// AlgoKit Utils - TypeScript
await processDirectories([
    {
        src: scriptLocation + '/../repos/algokit-utils-ts/docs/capabilities',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            removeLine('![App deployment lifecycle](../images/lifecycle.jpg)')
            // changeFeatureLinks,
            // changeReferenceLinks,
            // correctTypo,
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/utils/ts'
    },
]);
await processFile([
    {
        src: scriptLocation + '/../repos/algokit-utils-ts/docs/README.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            // changeFeatureLinks,
            // changeReferenceLinks,
            // removeToc,
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/utils/ts/overview.md'
    },
]);

// AlgoKit Utils - Python
await processDirectories([
    {
        src: scriptLocation + '/../repos/algokit-utils-py/docs/markdown/capabilities',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            removeLine('![App deployment lifecycle](../images/lifecycle.jpg)')
            // changeFeatureLinks,
            // changeReferenceLinks,
            // correctTypo,
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/utils/py'
    },
]);
await processFile([
    {
        src: scriptLocation + '/../repos/algokit-utils-py/docs/markdown/index.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            // changeFeatureLinks,
            // changeReferenceLinks,
            // removeToc,
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/utils/py/overview.md'
    },
]);