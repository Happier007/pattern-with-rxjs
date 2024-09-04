import { Observable } from 'rxjs';
import { User } from './user';

export interface Cache {
    data: Observable<User[]>,
    expiredTime: number
}
