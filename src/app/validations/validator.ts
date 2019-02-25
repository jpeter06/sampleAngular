import {AbstractControl, ValidatorFn} from '@angular/forms';

export function horaValidator(): ValidatorFn {
    let horaPattern = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        console.log("validando");
        if (!horaPattern.test(control.value)) {
            return { 'horaFail': true };
        }
        return null;
    };
} 