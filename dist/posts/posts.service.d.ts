import { CreatePostDto } from "./dto/create-post.dto";
import { FilesService } from "../files/files.service";
import { Post } from './post.model';
export declare class PostsService {
    private postRepository;
    private fileService;
    constructor(postRepository: typeof Post, fileService: FilesService);
    create(dto: CreatePostDto, image: any): Promise<Post>;
}
