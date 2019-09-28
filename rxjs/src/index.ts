import {  Observable, Subject, ReplaySubject, observable } from "rxjs";

let s:ReplaySubject<any> = new ReplaySubject();

s.next("hello");
s.next("world");
s.complete();


s.subscribe((item:any)=>{
    console.log(item)
},null,()=>{

    console.log("completed")
})