import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTabsModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User = {
    "id": "",
    "username": "",
    "email": "",
    "password": "",
    "personalDetails": {
      "firstName": "",
      "lastName": "",
      "dateOfBirth": new Date(),
      "gender": "Male"
    },
    "educationalDetails": {
      "highestDegree": "",
      "institution": "",
      "yearOfGraduation": 0
    },
    "achievements": {
      "awards": [],
      "certifications": []
    },
    "familyDetails": {
      "fatherName": "",
      "motherName": "",
      "siblings": []
    }
  };

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.userService.getUserById(id).subscribe(user => {
      this.user = user;
    });
  }
}