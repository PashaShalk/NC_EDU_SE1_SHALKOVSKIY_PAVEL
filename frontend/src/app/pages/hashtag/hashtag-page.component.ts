import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../services/post.service';
import {Post} from '../../model/post.model';

@Component({
  selector: 'app-hashtag-page',
  templateUrl: './hashtag-page.component.html',
  styleUrls: ['./hashtag-page.component.css']
})
export class HashtagPageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private postService: PostService) {
  }

  posts: Post[];
  page: number;
  countOnPage = 3;
  notscrolly = true;
  notEmptyPost = true;
  hashtag: string;

  ngOnInit(): void {
    this.page = 0;
    this.activatedRoute.params.subscribe((params) => {
      this.hashtag = params.hashtag;
      this.postService.getPostsByHashtag(params.hashtag, 0, this.countOnPage).subscribe((posts) => {
        this.posts = posts;
      });
    });
  }

  onScroll() {
    if (this.notscrolly && this.notEmptyPost) {
      this.notscrolly = false;
      this.loadNextPosts();
    }
  }

  loadNextPosts() {
    this.page++;

    this.postService.getPostsByHashtag(this.hashtag, this.page, this.countOnPage).subscribe((posts) => {
      const newPosts = posts;

      if (newPosts.length === 0) {
        this.notEmptyPost = false;
      }
      this.posts = this.posts.concat(newPosts);
      this.notscrolly = true;
    });
  }
}

