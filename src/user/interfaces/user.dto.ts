/**
 * What users themselves get back from the API
 */

 import { ApiProperty } from '@nestjs/swagger';

export class UserOwnInfoDto {
    readonly displayName: string;
    readonly email: string;
    readonly phoneNumber: string;
    readonly publicId: string;    
}

export class RegisterUserDto {
    email: string;
    displayName: string;
    phoneNumber: string;
}

export class ConfirmUserDto {
    email: string;
}

export class ConfirmUserRegistrationDto {
    email: string;
    token: string;
}

export class ConfirmUserRegistrationAdminDto {
    email: string;
}

