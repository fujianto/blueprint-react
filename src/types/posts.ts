interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

type Posts = Post[];

export default Posts;
