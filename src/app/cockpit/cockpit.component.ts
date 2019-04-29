import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
    templateUrl:'./cockpit.component.html',
    styleUrls:['./cockpit.component.css'],
    selector:'app-cockpit'
})
export class CockpitComponent{

    @Output()serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
    @Output()blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
    
    @ViewChild('serverContentInput')serverContentInput:ElementRef;
    
    //Update the ServerElement array available in Parent Component (app.component)
    onAddServer(nameInput:HTMLInputElement){
        this.serverCreated.emit({
            serverName: nameInput.value,
            serverContent : this.serverContentInput.nativeElement.value
        });        
    }

    //Update the ServerElement array available in Parent Component (app.component)
    onAddBlueprint(nameInput:HTMLInputElement){
        this.blueprintCreated.emit({
            serverName : nameInput.value,
            serverContent : this.serverContentInput.nativeElement.value
        });

    }

}