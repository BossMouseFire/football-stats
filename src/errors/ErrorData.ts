import { ErrorDataDto } from './ErrorDataDto';

export class ErrorData {
    errorCode: number;
    message: string;

    constructor(dto: ErrorDataDto) {
        this.errorCode = dto.errorCode;
        this.message = dto.message;
    }
}
