import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../shared/member.model';
import { MEMBERS } from '../shared/mock-members';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public member: Member = {}; // add form model

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {

  }

  // "Save" button click
  public addMember(): void {
    // Navigate to list component to add the member in json members array
    MEMBERS.push(this.member);
    // Set the page name in session storage to display message 
    sessionStorage.setItem('page', 'added');
    // Redirect to list page
    this.location.back();
  }

  // "Back" button click
  public goBack(): void {
    // Set the page name in session storage
    sessionStorage.setItem('page', 'back');
    this.location.back();
  }
}
