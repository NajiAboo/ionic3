import {Output, EventEmitter, Injectable} from "@angular/core";
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ResetButtonService {
    private subject = new Subject<string>();

    resetButton(btn: string) {
        this.subject.next(btn);
    }

    reset():Observable<string> {
        return this.subject.asObservable();
    }
       
}