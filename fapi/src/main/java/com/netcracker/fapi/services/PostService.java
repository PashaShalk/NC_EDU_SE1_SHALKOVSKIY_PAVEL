package com.netcracker.fapi.services;

import com.netcracker.fapi.model.Post;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface PostService {
    void createPost(MultipartFile[] images, Long ID, String description) throws IOException;

    Post[] getUserPosts(String nickname, Integer page, Integer count);

    ResponseEntity<byte[]> getPostImage(Long userID, Integer postID, Integer image) throws IOException;

    Post[] getUserFeed(Long ID, Integer page, Integer count);

    Post[] getAllPostsInTwelveHours(Integer page, Integer count);

    Post[] getPostsByHashtag(String hashtag, Integer page, Integer count);

    void deletePost(Long postID, Long authorID);
}
