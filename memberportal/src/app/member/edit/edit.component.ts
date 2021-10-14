import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../shared/member.model';
import { MEMBERS } from '../shared/mock-members';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public member!: Member; // Edit form model
  private index!: number; // index of member to be updated

  constructor(private location: Location, private router: Router) { }

  ngOnInit(): void {
    this.index = history.state.index; // Sent as parameter from list page
    this.getMemberByIndex(this.index);
  }

  // "Save" button click
  public updateMember(): void {
    MEMBERS[this.index].firstname = this.member.firstname;
    MEMBERS[this.index].lastname = this.member.lastname;
    MEMBERS[this.index].salary = this.member.salary;
    // Set the page name in session storage to display message 
    sessionStorage.setItem('page', 'updated');
    this.location.back();
  }

  // "Back" button click
  public goBack(): void {
    // Set the page name in session storage
    sessionStorage.setItem('page', 'back');
    this.location.back();
  }

  private getMemberByIndex(index: number): void {
    this.member = MEMBERS[index];
  }
}
