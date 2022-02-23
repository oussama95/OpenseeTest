import { Component, OnInit } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import { ToDo } from '../task';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-liste-utilisateurs',
  templateUrl: './liste-utilisateurs.component.html',
  styleUrls: ['./liste-utilisateurs.component.css']
})
export class ListeUtilisateursComponent implements OnInit {

  users:User[]=[];
  first:User[]=[];
  second:ToDo[]=[];
  values$ = forkJoin(
    this.userService.getUsers(),
    this.userService.getToDo()
  ).pipe(
    map(([first, second]) => {
      return { first, second };
    })
  );

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.values$.subscribe(
      data=>{
        this.users=data.first.map(value=>{
          return {...value,count:data.second.filter(x=>x.userId==value.id).length};
          });
        console.log(this.users);
        });
        
      }

}
