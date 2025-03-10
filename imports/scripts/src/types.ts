type FileTransformer = (content: string) => string;

interface DirectoryTransformation {
    src: string;
    transformations: FileTransformer[];
    dest: string;
}

interface FileTransformation {
    src: string;
    transformations: FileTransformer[];
    dest: string;
}

export type { DirectoryTransformation, FileTransformation, FileTransformer };