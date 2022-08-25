import { Component, OnInit } from '@angular/core';
import { Observable, Subject , BehaviorSubject, ReplaySubject, interval, take, map, filter, of, mergeMap, switchMap, fromEvent, debounceTime} from 'rxjs';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  searchString ="";
  searchSub$ = new Subject();
  constructor() {

    // const observable = new Observable(subscriber => {
    //   subscriber.next(1);
    //   subscriber.next(21);
    //   subscriber.next(3);
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //   }, 1000);
    // });

    // console.log('just before subscribe');
    // observable.subscribe({
    //   next(x) { console.log('got value ' + x); },
    //   error(err) { console.error('something wrong occurred: ' + err); },
    //   complete() { console.log('done'); }
    // });
    // console.log('just after subscribe');
  }

  ngOnInit(): void {

    // const sub$ = new ReplaySubject();
    // const sub$ = new BehaviorSubject(100);
    // const sub$ = new Subject();
    // sub$.subscribe({
    //   next:(v)=> console.log('obs A:'+ v)
      
    // })

    

    // sub$.next(1);
    // sub$.next(2);
    // // sub$.unsubscribe();
    // sub$.subscribe({
    //   next:(v)=> console.log('obs B:'+ v)
      
    // })
    // sub$.next(3);








    //interval
    // const num$ = interval(1000).pipe(take(5)).pipe(filter(x=>x%2 === 0)).pipe(map(x=>x*10));

    // const num$ = interval(1000).pipe(take(5)).pipe(map(x=>x*10));
    // num$.subscribe(x=> console.log(x));
    // const lett$ = of('a','b','c','d','e').pipe(mergeMap(x=> num$.pipe(map(y=>y+x)))).subscribe(x=> console.log(x));
    // const lett$ = of('a','b','c','d','e').pipe(switchMap(x=> num$.pipe(map(y=>y+x)))).subscribe(x=> console.log(x));
    
    // fromEvent(document,'click').subscribe(x=> console.log("clicked"));

    this.searchSub$.pipe(debounceTime(200)).subscribe(x=> console.log("debounce - "+x));
    

    
  }
  logValue($event : any){
    console.log("input - "+ $event);
      this.searchSub$.next($event);
  } 

}
