import { Component,Output, EventEmitter } from '@angular/core';
import { ResetButtonService } from '../../service/resetbutton.service';

@Component({
    selector: 'app-reset-button',
    templateUrl: 'app-reset-button.html'
})
export class ResetButtonComponent {

    constructor(private resetbtnService: ResetButtonService){}

    reset(btn) {
       this.resetbtnService.resetButton(btn);
    }
}