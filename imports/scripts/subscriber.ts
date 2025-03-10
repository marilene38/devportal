import {
    convertH1ToFrontmatter,
    stripLinkExtensions,
} from './src/transformers';
import {
    processDirectories,
    processFile
} from './src/functions';

// AlgoKit Subscriber - Typescript
await processFile([
    {
        src: './../repos/algokit-subscriber-ts/docs/subscriber.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
        ],
        dest: './../../src/content/docs/algokit/subscribers/ts/subscriber.md'
    },
]);
await processFile([
    {
        src: './../repos/algokit-subscriber-ts/docs/subscriptions.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
        ],
        dest: './../../src/content/docs/algokit/subscribers/ts/subscriptions.md'
    },
]);
await processFile([
    {
        src: './../repos/algokit-subscriber-ts/docs/README.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
        ],
        dest: './../../src/content/docs/algokit/subscribers/ts/overview.md'
    },
]);

// AlgoKit Subscriber - Python
await processFile([
    {
        src: './../repos/algokit-subscriber-py/docs/subscriber.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
        ],
        dest: './../../src/content/docs/algokit/subscribers/ts/subscriber.md'
    },
]);
await processFile([
    {
        src: './../repos/algokit-subscriber-py/docs/subscriptions.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
        ],
        dest: './../../src/content/docs/algokit/subscribers/ts/subscriptions.md'
    },
]);
await processFile([
    {
        src: './../repos/algokit-subscriber-py/docs/index.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
        ],
        dest: './../../src/content/docs/algokit/subscribers/ts/overview.md'
    },
]);