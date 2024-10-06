import { Component, OnInit, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/image1.jpg', // Replace with your image paths
    'assets/image2.jpg',
    'assets/image3.jpg'
  ];
  currentIndex: number = 0;
  interval: any;

  ngOnInit() {
    this.startAutoSlide(); // Start the automatic slide show
  }

  ngOnDestroy() {
    clearInterval(this.interval); // Clear the interval on component destruction
  }

  goToSlide(index: number) {
    this.currentIndex = index; // Change the current index to the clicked bullet
  }

  private startAutoSlide() {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length; // Increment index
    }, 5000); // Change image every 5 seconds
  }
}