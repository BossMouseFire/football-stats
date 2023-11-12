import { AxiosError } from 'axios';
import { cast } from '../utils/cast';
import { ErrorDataDto } from './ErrorDataDto';
import { ErrorData } from './ErrorData';

export const getError = (error: unknown) => {
    const errorAxios = cast<AxiosError>(error);

    if (errorAxios.response?.data) {
        const errorData = cast<ErrorDataDto>(errorAxios.response.data);
        return new ErrorData(errorData);
    }
    return undefined;
};
