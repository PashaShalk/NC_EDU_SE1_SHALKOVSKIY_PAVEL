package com.netcracker.fapi.controller;

import com.netcracker.fapi.model.Comment;
import com.netcracker.fapi.services.impl.CommentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/comments")
public class CommentController {

    private final CommentServiceImpl commentService;

    @Autowired
    public CommentController(CommentServiceImpl commentService) {
        this.commentService = commentService;
    }

    @GetMapping("/post/{postID}")
    public Comment[] getCommentByPostID(@PathVariable Long postID) {
        return commentService.getCommentByPostID(postID);
    }

    @PostMapping("/post/{postID}/user/{userID}")
    public void sendComment(@RequestBody String text,
                            @PathVariable Long postID,
                            @PathVariable Long userID) {
        commentService.sendComment(postID, userID, text);
    }
}
