import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { HugeiconsIconComponent } from '@hugeicons/angular'
import { AlertDiamondIcon , Cancel01Icon } from '@hugeicons/core-free-icons'

@Component({
  selector: 'app-notification',
  imports: [HugeiconsIconComponent, CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {

  @Input() visible: boolean = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter();

  AlertDiamondIcon = AlertDiamondIcon;
  Cancel01Icon = Cancel01Icon;

  cancel(){
    this.visible = this.visible ? false : true;
    this.visibleChange.emit(this.visible);
  }

}
