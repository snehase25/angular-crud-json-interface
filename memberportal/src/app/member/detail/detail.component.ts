import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Member } from '../shared/member.model';
import { MEMBERS } from '../shared/mock-members';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  public member!: Member;
  private index!: number;

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.index = history.state.index; // Received as a parameter from list page
    this.getMemberByIndex();
  }

  private getMemberByIndex(): void {
    this.member = MEMBERS[this.index];
  }

  public goBack(): void {
    this.location.back();
  }
}
