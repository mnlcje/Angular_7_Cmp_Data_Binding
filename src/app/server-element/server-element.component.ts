import { Component, Input } from '@angular/core';

@Component({
    templateUrl:'./server-element.component.html',
    styleUrls:['./server-element.component.css'],
    selector:'app-server-element'
})
export class ServerElementComponent{

    @Input('srvElement') element : {type:string,name:string,content:string};
}