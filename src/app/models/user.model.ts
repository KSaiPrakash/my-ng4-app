export class UserModel {
    name: string; // text
    age?: number; // number
    gender?: string; // radio
    role?: string; // select (primitive)
    topics?: string[]; // multiple select
    isActive?: boolean; // checkbox
    toggle?: string; // checkbox toggle either 'toggled' or 'untoggled'
}
