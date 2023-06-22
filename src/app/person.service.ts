// person.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Person } from './models/task.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private activePersonsSubject = new BehaviorSubject<Person[]>([]);
  public activePersons$ = this.activePersonsSubject.asObservable();
  
  public personsUrl = `${window.location.protocol}//${window.location.hostname}:8081`; // Replace with your Spring Boot server address and port
  

  constructor(private http: HttpClient) {
    this.refreshActivePersons();
  }


  refreshActivePersons(): void {
    this.getActivePersons().subscribe();
  }

  
getAllPersons(): Observable<Person[]> {
  return this.http.get<Person[]>(`${this.personsUrl}/persons`);
}

getPerson(id: number): Observable<Person> {
  return this.http.get<Person>(`${this.personsUrl}/person/${id}`);
}

  getPersons(): Observable<Person[]> {
    const url = `${this.personsUrl}/persons`;
    return this.http.get<Person[]>(url);
  }

  getActivePersons(): Observable<Person[]> {
    const url = `${this.personsUrl}/activePersons`;
    return this.http.get<Person[]>(url)
      .pipe(tap((persons) => this.activePersonsSubject.next(persons)));
  }

  createPerson(person: Person): Observable<Person> {
    const url = `${this.personsUrl}/createPerson`;
    return this.http.post<Person>(url, person);
  }

  updatePerson(person: Person): Observable<Person> {
    const url = `${this.personsUrl}/updatePerson`;
    return this.http.post<Person>(url, person);
  }


  addTask(personId: number, task: any[]): Observable<Person> {
    const url = `${this.personsUrl}/${personId}/tasks`;
    return this.http.post<Person>(url, task);
  }

  removeTask(personId: number, taskId: number): Observable<Person> {
    const url = `${this.personsUrl}/${personId}/tasks/${taskId}`;
    return this.http.delete<Person>(url);
  }

  deactivatePerson(personId: number): Observable<any> {
    return this.http.put(`${this.personsUrl}/person/${personId}/deactivate`, {});
  }
  
  activatePerson(personId: number): Observable<any> {
    return this.http.put(`${this.personsUrl}/person/${personId}/activate`, {});
  }
}
