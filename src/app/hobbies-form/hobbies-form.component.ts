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

  catchHobbie(event) {
    console.log(event.type);
    switch (event.type) {
      case 'Air Hobbie':
        this.hobiesForm.get('airSports').setValue(event.name);
        console.log('air');
        console.log(this.hobiesForm.value);

        break;
      case 'Water Hobbie':
        this.hobiesForm.get('waterSports').setValue(event.name);
        console.log('water');
        console.log(this.hobiesForm.value);

        break;
      case 'Land Hobbie':
        this.hobiesForm.get('landSports').setValue(event.name);
        console.log('land');
        console.log(this.hobiesForm.value);

        break;

      default:
        console.log('default');

        break;
    }
  }

  submitForm() {
    this.profile = this.hobiesForm.value;
  }
}
