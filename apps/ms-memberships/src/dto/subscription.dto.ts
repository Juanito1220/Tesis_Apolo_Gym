import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SubscriptionDTO {
    @ApiProperty({ example: '507f1f77bcf86cd799439011' })
    @IsString()
    @IsNotEmpty()
    planId: string;
}