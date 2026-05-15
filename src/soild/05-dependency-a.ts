import { PostService } from './05-dependency-b';
import { ApiWebService } from './05-dependency-c';


// Main
(async () => {

    const postProvider = new ApiWebService();
    const postService = new PostService(postProvider);

    const posts = await postService.getPosts();

    console.log(posts.length + ' posts obtained from API Web Service');


})();