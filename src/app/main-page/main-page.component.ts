import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { BlogDialogComponent } from '../blog-dialog/blog-dialog.component';
import { BlogPost } from '../models/blog-post';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {
  isOwner = false;

  blogs = [
    {
      id: 1,
      title: 'Blog 1',
      thumbnailUrl: 'assets/images/(1).jpg',
      body: 'This is the body of Blog 1',
      creationDate: new Date('2024-01-01'),
      likes: 0,
      dislikes: 0,
      comments: []
    },
    {
      id: 2,
      title: 'Blog 2',
      thumbnailUrl: 'assets/images/(2).jpg',
      body: 'This is the body of Blog 2',
      creationDate: new Date('2024-01-02'),
      likes: 0,
      dislikes: 0,
      comments: []
    },
    {
      id: 3,
      title: 'Blog 3',
      thumbnailUrl: 'assets/images/(3).jpg',
      body: 'This is the body of Blog 3',
      creationDate: new Date('2024-01-03'),
      likes: 0,
      dislikes: 0,
      comments: []
    },
    {
      id: 4,
      title: 'Blog 4',
      thumbnailUrl: 'assets/images/(4).jpg',
      body: 'This is the body of Blog 4',
      creationDate: new Date('2024-01-04'),
      likes: 0,
      dislikes: 0,
      comments: []
    },
    {
      id: 5,
      title: 'Blog 5',
      thumbnailUrl: 'assets/images/(5).jpg',
      body: 'This is the body of Blog 5',
      creationDate: new Date('2024-01-05'),
      likes: 0,
      dislikes: 0,
      comments: []
    },
    {
      id: 6,
      title: 'Blog 6',
      thumbnailUrl: 'assets/images/(6).jpg',
      body: 'This is the body of Blog 6',
      creationDate: new Date('2024-01-06'),
      likes: 0,
      dislikes: 0,
      comments: []
    }
  ];

  constructor(
    private generalService: GeneralService,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.generalService.isOwner$.subscribe(isOwner => {
      this.isOwner = isOwner;
    });

    if (!localStorage.getItem('blogs')) {
      localStorage.setItem('blogs', JSON.stringify(this.blogs));
    } else {
      this.blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BlogDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        result.id = this.blogs.length;
        this.blogs.push(result);
        localStorage.setItem('blogs', JSON.stringify(this.blogs));
      }
    });
  }

}
