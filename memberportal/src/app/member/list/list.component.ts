import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../shared/member.model';
import { MEMBERS } from '../shared/mock-members';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public members!: Member[]; // To read members data from mock MEMBERS
  public displayMessage: string = "";
  private readonly lastPage = sessionStorage.getItem('page'); // get last page name from session

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Get mock data and store in members object
    this.getMembersMock();
    // Display or clear success messages
    this.displaySuccessMessage();
  }

  // "Add Member" button click
  public addMember(): void {
    this.router.navigate(['/add']); //OR this.router.navigateByUrl('/add');
  }

  // "Delete" button click
  public deleteMember(member: any): void {
    if (confirm('Are you sure to delete ?')) {
      try {
        MEMBERS.forEach((element, index) => {
          // find the element to be deleted
          if (element === member) {
            this.members.splice(index, 1);
          }
        });
        // Set the page name in session storage to display message 
        sessionStorage.setItem('page', 'deleted');
      }
      catch (e) { console.log(e); }
    }
    else {
      // Set the page name in session storage
      sessionStorage.setItem('page', 'back');
    }
    // Display or clear success messages
    this.displaySuccessMessage();
  }

  // Get member mock data and store in local members variable
  private getMembersMock(): void {
    this.members = MEMBERS; // exported from mock-members.ts
  }

  private displaySuccessMessage(): void {
    let page = sessionStorage.getItem('page');
    if (page != 'back')
      this.displayMessage = "Member " + page + " Successfully!";
    else
      this.displayMessage = "";
  }
}