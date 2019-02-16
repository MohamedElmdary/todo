export interface LoginUser {
    email: String;
    password: String
}

export interface RegisterUser extends LoginUser {
    firstName: String;
    lastName: String;
    gender: String;
}

interface fullName {
    firstName: String;
    lastName: String;
}

export interface User extends fullName, LoginUser {
    gender: String;
    token: String;
}

