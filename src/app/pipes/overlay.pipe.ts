import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'overlaypipe'})
export class OverlayPipe implements PipeTransform {
    transform(value, args:string[]) {
        let keys = [];
        for (let key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    }
}