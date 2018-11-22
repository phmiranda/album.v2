/* comentários */
import {Component, Input} from "@angular/core";

/* comentários */
@Component({
    selector: 'app-photo',
    templateUrl: 'photo.component.html'
})

/* comentários */
export class PhotoComponent {
    @Input() titulo = 'Lara Croft'
    @Input() descricao = ''
    @Input() url = ''
}