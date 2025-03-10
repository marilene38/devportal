import {
    convertH1ToFrontmatter,
    stripLinkExtensions,
    changeFeatureLinks,
    changeReferenceLinks,
    correctTypo,
    removeLine,
    fromTo,
    removeToc
} from './src/transformers';
import {
    processDirectories,
    processFile
} from './src/functions';

// AlgoKit Utils - TypeScript
await processDirectories([
    {
        src: './../repos/algokit-utils-ts/docs/capabilities',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            removeLine('![App deployment lifecycle](../images/lifecycle.jpg)')
            // changeFeatureLinks,
            // changeReferenceLinks,
            // correctTypo,
        ],
        dest: './../../src/content/docs/algokit/utils/ts'
    },
]);
await processFile([
    {
        src: './../repos/algokit-utils-ts/docs/README.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            // changeFeatureLinks,
            // changeReferenceLinks,
            // removeToc,
        ],
        dest: './../../src/content/docs/algokit/utils/ts/overview.md'
    },
]);

// AlgoKit Utils - Python
await processDirectories([
    {
        src: './../repos/algokit-utils-py/docs/markdown/capabilities',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            removeLine('![App deployment lifecycle](../images/lifecycle.jpg)')
            // changeFeatureLinks,
            // changeReferenceLinks,
            // correctTypo,
        ],
        dest: './../../src/content/docs/algokit/utils/py'
    },
]);
await processFile([
    {
        src: './../repos/algokit-utils-py/docs/markdown/index.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            // changeFeatureLinks,
            // changeReferenceLinks,
            // removeToc,
        ],
        dest: './../../src/content/docs/algokit/utils/py/overview.md'
    },
]);