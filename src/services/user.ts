import { inject, Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

import { UserMock } from './user.mock';
import { Cache } from '../model';
import { User } from '../model';

@Injectable({providedIn: "root"})
export class UserService {
    private readonly userMock = inject(UserMock);
    private cache: Cache | null = null;

    getUsers(): Observable<User[]> {
        if (!this.cache || this.checkExpired) {
            this.cache = {
                data: this.userMock.getUsers().pipe(shareReplay(1)),
                expiredTime: new Date().getTime() + 5 * 60 * 1000
            }
        }

        return this.cache!.data;
    }

    get checkExpired(): boolean {
        return (Date.now() > this.cache!.expiredTime);
    }
}
