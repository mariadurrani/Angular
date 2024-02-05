import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  name = 'John Doe';
  email = 'john.doe@example.com';
  about = 'I am a web developer with a passion for creating innovative solutions.';

  contactName = '';
  contactEmail = '';
  contactMessage = '';

  onSubmit() {
    console.log('Name:', this.contactName);
    console.log('Email:', this.contactEmail);
    console.log('Message:', this.contactMessage);

    // Clear the form
    this.contactName = '';
    this.contactEmail = '';
    this.contactMessage = '';
  }
}
