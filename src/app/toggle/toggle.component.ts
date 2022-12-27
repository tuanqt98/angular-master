import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  @Input() checked = false;
  @Output() checkedChanged = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}
}
