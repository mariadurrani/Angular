import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BlogPost } from '../models/blog-post';

@Component({
  selector: 'app-blog-dialog',
  templateUrl: './blog-dialog.component.html',
  styleUrls: ['./blog-dialog.component.scss']
})
export class BlogDialogComponent {
  title = '';
  thumbnailUrl = '';
  body = '';

  totalBlogs = []
  constructor(public dialogRef: MatDialogRef<BlogDialogComponent>) {
    this.totalBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
  }

  onSubmit(): void {

    if (!this.title && !this.thumbnailUrl) {
      return;
    }

    // Find the maximum id in the existing blog posts
    let maxId = Math.max(...this.totalBlogs.map((blog: BlogPost) => blog.id), 0);

    this.dialogRef.close({
      id: maxId + 1,
      title: this.title,
      thumbnailUrl: this.thumbnailUrl,
      body: this.body,
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: []
    });
  }

}
