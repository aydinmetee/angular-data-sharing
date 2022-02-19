import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hobbies-form',
  templateUrl: './hobbies-form.component.html',
  styleUrls: ['./hobbies-form.component.scss'],
})
export class HobbiesFormComponent implements OnInit {
  hobiesForm: FormGroup;
  profile: any;

  constructor(private formBuilder: FormBuilder) {
    this.hobiesForm = this.formBuilder.group({
      name: [null],
      waterSports: [null],
      landSports: [null],
      airSports: [null],
    });
  }

  ngOnInit(): void {}

  public catchHobbie(event) {
    switch (event.type) {
      case 'Air Hobbie':
        this.hobiesForm.get('airSports').setValue(event.name);
        break;

      case 'Water Hobbie':
        this.hobiesForm.get('waterSports').setValue(event.name);
        break;

      case 'Land Hobbie':
        this.hobiesForm.get('landSports').setValue(event.name);
        break;

      default:
        break;
    }
  }

  submitForm() {
    this.profile = this.hobiesForm.value;
  }
}
