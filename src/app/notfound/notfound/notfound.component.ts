import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {
  message = "";

  constructor(private activatedroute:ActivatedRoute){}

  ngOnInit(): void {
    this.activatedroute.data.subscribe(data => {
      this.message = data['message'];
    })
  }
}
