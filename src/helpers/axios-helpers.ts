import { AxiosResponse } from 'axios';
import property from 'lodash-es/property';

export const extractDataFromAxiosResponsesArray = (responsesArray: AxiosResponse[]) => responsesArray.map(property('data'));
