import { Component, OnInit } from '@angular/core';
import { Items } from "../../models/items"

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Items[] = [
    {
      id: 1,
      isOpen: false,
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
      isOpen: false,
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

  reviewShow(item) {
    item.isOpen = !item.isOpen;
  }

  removeItem(id) {
    for (let item of this.items) {
      if (item.id === id) {
        this.items.splice(item.id, 1);
      }
    }
  }
}



