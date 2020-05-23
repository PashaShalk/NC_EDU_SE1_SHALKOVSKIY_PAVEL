import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Post} from '../../model/post.model';
import {ReactionData} from '../../model/reaction-data.model';
import {ReactionService} from '../../services/reaction.service';
import {LSUser} from '../../model/ls-user.model';
import {LocalStorageService} from '../../services/local-storage.service';
import {Comment} from '../../model/comment.model';
import {CommentService} from '../../services/comment.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  reactionData: ReactionData;
  commentTouched: boolean;
  commentForm: FormGroup;
  authorizedUser: LSUser;
  avatar: string;
  comments: Comment[];

  @Input()
  post: Post;

  constructor(private reactionService: ReactionService,
              private localStorageService: LocalStorageService,
              private commentService: CommentService) {
  }

  private replaceHashtags() {
    this.post.hashtags.forEach(hashtag => {
      this.post.description = this.post.description.replace('#' + hashtag.text,
        '<a href="/hashtag/' + hashtag.text + '">#' + hashtag.text + '</a>');
    });
  }

  ngOnInit(): void {
    this.commentService.getCommentByPostId(this.post.id).subscribe((comments) => {
      this.comments = comments;
    });
    this.authorizedUser = this.localStorageService.getAuthorizedUser();
    this.reactionService.getReactionData(this.authorizedUser.id, this.post.id).subscribe((data) => {
      this.reactionData = data;
    });

    this.avatar = 'http://localhost:8081/api/users/avatar/' + this.post.author.id;

    this.replaceHashtags();
    this.commentTouched = false;
    this.commentForm = new FormGroup({
      comment: new FormControl('')
    });
  }

  changeLikeStatus() {
    if (this.reactionData.dislikeStatus) {
      this.reactionService.changeLikeAndDislikeStatuses(this.authorizedUser.id, this.post.id,
        this.reactionData.likeStatus, this.reactionData.dislikeStatus)
        .subscribe((data) => {
          this.reactionData = data;
        });
    } else {
      this.reactionService.changeLikeStatus(this.authorizedUser.id, this.post.id, this.reactionData.likeStatus).subscribe((data) => {
        this.reactionData = data;
      });
    }
  }

  changeDislikeStatus() {
    if (this.reactionData.likeStatus) {
      this.reactionService.changeLikeAndDislikeStatuses(this.authorizedUser.id, this.post.id,
        this.reactionData.likeStatus, this.reactionData.dislikeStatus)
        .subscribe((data) => {
          this.reactionData = data;
        });
    } else {
      this.reactionService.changeDislikeStatus(this.authorizedUser.id, this.post.id, this.reactionData.dislikeStatus)
        .subscribe((data) => {
          this.reactionData = data;
        });
    }
  }

  sendComment(text) {
    this.commentService.sendComment(this.post.id, this.authorizedUser.id, text).subscribe(() => {
      this.commentService.getCommentByPostId(this.post.id).subscribe((comments) => {
        this.comments = comments;
      });
    });
  }
}
