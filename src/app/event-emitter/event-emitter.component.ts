import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'event-emitter',
  templateUrl: './event-emitter.component.html',
  styleUrls: ['./event-emitter.component.css']
})
export class EventEmitterComponent implements OnInit {
  @Input() pMsg: string;
  @Input() size: number;
  @Output() sendMsg = new EventEmitter();
  @Output() sizeChange = new EventEmitter();
  msg: string = "hello emit"
  arr: any[] = [
    {id: 0, name: 'tom'},
    {id: 1, name: 'kylin'},
    {id: 2, name: 'steven'},
    {id: 3, name: 'jack'}
  ]
  case: string = 'kylin'
  nullHero = null;
  constructor() { }

  ngOnInit() {
  }

  notifyParent() {
    console.log('notifyParent')
    this.sendMsg.emit(this.msg)
    this.size = 100
    this.sizeChange.emit(this.size)
    this.case = ''
  }

  trackByHeroes(index: number, hero: any): number { return hero.id; }
}
