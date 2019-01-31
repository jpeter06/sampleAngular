import {
    trigger,
    animate,
    transition,
    style,
    query, group
  } from '@angular/animations';
  
  export const fadeAnimation = trigger('fadeAnimation', [
    transition('* => *', [
      query(':leave', [style({ opacity: 1 }),
         animate('0.3s', style({ opacity: 0 }))],{ optional: true }),
      query(':enter', [style({ opacity: 0 }),
         animate('0.3s', style({ opacity: 1 }))],{ optional: true })
    ])
  ]);

  export const fadeAnimation2 = trigger('fadeAnimation2', [
    transition('* => *', [
        group([ query(':leave', [style({  transform: 'translateX(0%)'}),
                 animate('0.4s', style({  transform: 'translateX(-100%)' }))], { optional: true }),
                query(':enter', [style({  transform: 'translateX(100%)' }),
                 animate('0.4s', style({  transform: 'translateX(0%)' }))], { optional: true })
        ])
    ])
  ]);  
  export const fadeAnimation3 = trigger('fadeAnimation3', [
    transition('* => *', [
        group([ query(':leave', [style({   opacity: 1}),
                  animate('0.2s', style({  opacity: 0 }))], { optional: true }),
                query(':enter', [style({  opacity: 0, transform: 'translateX(10%)' }),
                 animate('0.3s 0.2s', style({  opacity: 1,transform: 'translateX(0%)' }))], { optional: true })
        ])
    ])
  ]);