import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: any[] = [
    {
      id: 1,
      name: "Salmon - Canned",
      price: "$91.56",
      info: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      review: [
        {
          name: "Denis",
          text: "Some review text"
        }
      ]
    },
    {
      id: 2,
      name: "Soup - Beef, Base Mix",
      price: "$126.14",
      info: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      review: [
        {
          name: "Ivan",
          text: "Some review text"
        },
        {
          name: "Maks",
          text: "Some review text"
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  reviewShow(id) {
    const reviews = document.querySelectorAll('.review-wrapper');
    const reviewsArr = Array.prototype.slice.call(reviews, 0);
    reviewsArr.forEach(review => {
      if (+review.id === id) {
        review.classList.toggle("d-none");
      }
    });
  }

  removeItem(id) {
    document.getElementById(id).remove();
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === id) {
        this.items.splice(i, 1);
      }
    }
  }
}



