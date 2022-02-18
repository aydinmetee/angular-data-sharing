import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface Hobbie {
  id;
  name;
  type;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  @Output() public sendHobbie: EventEmitter<any> = new EventEmitter<any>();

  isDialogVisible = false;
  dialogTitle = 'Hobbies';
  hobbies: Hobbie[] = [];
  cols: any[] = [];
  airHobbies: Hobbie[];
  landHobbies: Hobbie[];
  waterHobbies: Hobbie[];

  selectedHobbie: Hobbie;

  constructor() {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' },
      { field: 'type', header: 'Type' },
    ];
    this.airHobbies = [
      {
        id: 1,
        name: 'Bungee jumping',
        type: 'Air Hobbie',
      },
      {
        id: 2,
        name: 'Air racing',
        type: 'Air Hobbie',
      },
      {
        id: 3,
        name: 'High diving',
        type: 'Air Hobbie',
      },
      {
        id: 4,
        name: 'Wingsuit flying',
        type: 'Air Hobbie',
      },
      {
        id: 5,
        name: 'Drone racing',
        type: 'Air Hobbie',
      },
    ];
    this.waterHobbies = [
      {
        id: 1,
        name: 'Diving',
        type: 'Water Hobbie',
      },
      {
        id: 2,
        name: 'Aquajogging',
        type: 'Water Hobbie',
      },
      {
        id: 3,
        name: 'Swimming',
        type: 'Water Hobbie',
      },
      {
        id: 4,
        name: 'Water volleyball',
        type: 'Water Hobbie',
      },
      {
        id: 5,
        name: 'Flyboard',
        type: 'Water Hobbie',
      },
    ];
    this.landHobbies = [
      {
        id: 1,
        name: 'Golf',
        type: 'Land Hobbie',
      },
      {
        id: 2,
        name: 'Baseball',
        type: 'Land Hobbie',
      },
      {
        id: 3,
        name: 'Cycling',
        type: 'Land Hobbie',
      },
      {
        id: 4,
        name: 'Basketball',
        type: 'Land Hobbie',
      },
      {
        id: 5,
        name: 'Football',
        type: 'Land Hobbie',
      },
    ];
  }

  ngOnInit(): void {}

  showDialog(type: string) {
    switch (type) {
      case 'air':
        this.hobbies = this.airHobbies;
        break;
      case 'water':
        this.hobbies = this.waterHobbies;
        break;
      case 'land':
        this.hobbies = this.landHobbies;
        break;

      default:
        break;
    }
    this.isDialogVisible = true;
  }

  onRowSelect(event) {
    this.sendHobbie.emit(event.data);
    this.isDialogVisible = false;
  }
}
