import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PostService} from '../../services/post.service';
import {Post} from '../../model/post.model';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../model/user.model';
import {AccountPostComponent} from '../account-post/account-post.component';

@Component({
  selector: 'app-images-grid-list',
  templateUrl: './images-grid-list.component.html',
  styleUrls: ['./images-grid-list.component.css']
})
export class ImagesGridListComponent implements OnInit, AfterViewInit {

  constructor(public dialog: MatDialog,
              private postService: PostService,
              private activatedRoute: ActivatedRoute) {
  }

  @Input()
  user: User;

  posts: Post[];
  page: number;
  countOnPage = 6;
  notscrolly = true;
  notEmptyPost = true;

  ngOnInit(): void {
    this.page = 0;
    this.activatedRoute.params.subscribe((params) => {
      this.postService.getUserPosts(params.nickname, this.page, this.countOnPage).subscribe((posts) => {
        this.posts = posts;
      });
    });
  }

  openDialog(post: Post): void {
    this.dialog.open(AccountPostComponent, {data: post, autoFocus: false, maxHeight: '90vh'});
  }

  onScroll() {
    if (this.notscrolly && this.notEmptyPost) {
      this.notscrolly = false;
      this.loadNextPosts();
    }
  }

  private loadNextPosts() {
    this.page++;

    this.postService.getUserPosts(this.user.nickname, this.page, this.countOnPage).subscribe((posts) => {
      const newPosts = posts;

      if (newPosts.length === 0) {
        this.notEmptyPost = false;
      }
      this.posts = this.posts.concat(newPosts);
      this.notscrolly = true;
    });
  }

  ngAfterViewInit(): void {
    this.postService.update.subscribe(() => {
      this.page = 0;
      this.postService.getUserPosts(this.user.nickname, this.page, this.countOnPage).subscribe((posts) => {
        this.posts = posts;
      });
    });
  }
}
