import { Injectable } from '@angular/core';
import { User } from '../model';
import { delay, Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserMock {
    private users: User[] = [
        {
            id: 1,
            firstName: 'Chandra',
            lastName: 'De Andisie',
            age: 29
        },
        {
            id: 2,
            firstName: 'Darleen',
            lastName: 'Edgley',
            age: 27
        },
        {
            id: 3,
            firstName: 'Finlay',
            lastName: 'Meran',
            age: 14
        },
        {
            id: 4,
            firstName: 'Hurley',
            lastName: 'MacAree',
            age: 35
        },
        {
            id: 5,
            firstName: 'Stephan',
            lastName: 'Fallens',
            age: 19
        },
        {
            id: 6,
            firstName: 'Stace',
            lastName: 'Deddum',
            age: 17
        },
        {
            id: 7,
            firstName: 'Leona',
            lastName: 'Seton',
            age: 44
        },
        {
            id: 8,
            firstName: 'Carson',
            lastName: 'Kneal',
            age: 24
        },
        {
            id: 9,
            firstName: 'Paton',
            lastName: 'Enrietto',
            age: 21
        },
        {
            id: 10,
            firstName: 'Dale',
            lastName: 'Caswell',
            age: 26
        },
    ];

    getUsers(): Observable<User[]> {
        console.log('get data');
        return of(this.users).pipe(delay(1000 * Math.random()));
    }
}
