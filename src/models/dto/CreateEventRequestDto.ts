export class CreateEventRequestDto {
    title: string;
    description: string;
    location: string;
    startAt: Date;
    endAt?: Date;
    userLimit?: number;
    isPrivate?: boolean;
}