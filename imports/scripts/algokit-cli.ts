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

// Algokit-CLI
await processDirectories([
    {
        src: './../repos/algokit-cli/docs/features',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            changeFeatureLinks,
            changeReferenceLinks,
            correctTypo,
            removeLine('> For details on executing `algokit localnet` without `docker` or `podman` refer to the [codespaces](#codespaces) section.')
        ],
        dest: './../../src/content/docs/algokit/algokit-cli'
    },
]);
await processFile([
    {
        src: './../repos/algokit-cli/docs/cli/index.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            changeFeatureLinks,
            changeReferenceLinks,
            removeToc,
        ],
        dest: './../../src/content/docs/reference/algokit-cli/reference.md'
    },
    {
        src: './../repos/algokit-cli/docs/algokit.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            changeFeatureLinks,
            changeReferenceLinks,
        ],
        dest: './../../src/content/docs/algokit/algokit-cli/overview.md'
    },
    {
        src: './../../src/content/docs/algokit/algokit-cli/project.md',
        transformations: [fromTo('./project/', './')],
        dest: './../../src/content/docs/algokit/algokit-cli/project/overview.md'
    },
    {
        src: './../../src/content/docs/algokit/algokit-cli/tasks.md',
        transformations: [fromTo('./tasks/', './')],
        dest: './../../src/content/docs/algokit/algokit-cli/tasks/overview.md'
    },
]);
