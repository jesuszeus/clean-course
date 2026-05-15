import { PostProvider, type Post } from "./05-dependency-d";

export class PostService {

    private posts: Post[] = [];

    constructor(private postProvider: PostProvider) {}

    async getPosts() {
        this.posts = await this.postProvider.getFakePosts();

        return this.posts;
    }
}