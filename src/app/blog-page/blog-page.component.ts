import { Component } from '@angular/core';
import { BlogPost } from '../models/blog-post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent {

  post: BlogPost = {
    title: '',
    thumbnailUrl: '',
    body: '',
    creationDate: new Date(),
    likes: 0,
    dislikes: 0,
    comments: [],
    id: 0
  };

  newComment: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const postId = Number(this.route.snapshot.paramMap.get('id')) || 0;
    let thumbnails = JSON.parse(localStorage.getItem('blogs') || '[]');
    this.post = thumbnails.find((thumbnail: { id: number; }) => thumbnail.id === postId);

    console.log("this post", this.post);

  }


  addComment() {
    if (this.newComment) {
      this.post.comments.push(this.newComment);
      this.newComment = '';
      this.updateLocalStorage();
    }
  }

  likePost() {
    this.post.likes++;
    this.updateLocalStorage();
  }

  dislikePost() {
    this.post.dislikes++;
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    let thumbnails = JSON.parse(localStorage.getItem('blogs') || '[]');
    let index = thumbnails.findIndex((thumbnail: { id: any; }) => thumbnail.id === this.post.id);
    if (index !== -1) {
      thumbnails[index] = this.post;
      localStorage.setItem('blogs', JSON.stringify(thumbnails));
    }
  }
}
