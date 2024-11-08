import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() boxColor: string = '';
  @Input() placeholderText: string = '';
  @Output() inputEvent= new EventEmitter();
  count: number = 0;
  onCreate(inpVal: any) {
    if (inpVal.value.length > 0) {
      this.count = this.count + 1;
      //alert(inpVal.value);
      this.inputEvent.emit(inpVal.value)
      inpVal.value='';
    }
  }
}
