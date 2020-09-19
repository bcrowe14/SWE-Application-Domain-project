import { Role } from './role';
import { DisabledStatus } from './DisabledStatus'

export class Account {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    role: Role;
    disabled: DisabledStatus;
    startDisable: Date;
    endDisable: Date;
    jwtToken?: string;
}
