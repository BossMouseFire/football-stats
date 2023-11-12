import { ErrorData } from '../errors/ErrorData';

export const errorMock404 = {
    message: 'The resource you are looking for does not exist.',
    error: 404,
};

export const errorMock400 = new ErrorData({
    message:
        "Argument 'competitionId' is expected to be either an integer in a specified range or a competition code.",
    errorCode: 400,
});

export const errorMock403 = new ErrorData({
    message:
        'The resource you are looking for is restricted and apparently not within your permissions. Please check your subscription.',
    errorCode: 403,
});
