import { AxiosResponse } from 'axios';
import property          from 'lodash-es/property';
import { prop }          from '@/helpers/object-helpers';

export const extractDataFromAxiosResponsesArray = (responsesArray: AxiosResponse[]) => responsesArray.map(property('data'));
export const extractDataFromSingleAxiosResponse = (axiosResponse: AxiosResponse) => prop('data', axiosResponse);
