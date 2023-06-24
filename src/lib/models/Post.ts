export const PostTags = [
    'HCI',
    'K-12',
    'academia',
    'accessibility',
    'advising',
    'argument',
    'automation',
    'book summary',
    'computing education',
    'design',
    'diversity',
    'ed tech',
    'gender',
    'grant report',
    'industry',
    'information',
    'paper',
    'personal',
    'policy',
    'productivity',
    'programming languages',
    'review',
    'science',
    'society',
    'software engineering',
    'teaching',
    'trip report',
    'tutorial',
] as const;

export type PostTagType = (typeof PostTags)[number];

type Post = {
    url: string;
    title: string;
    date: string;
    tags: PostTagType[];
    img?: string;
    alt?: string;
};

export default Post;
