import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import getFundraising from '~/mocks/courses/fundraising.js';

const mock = new MockAdapter(axios, {
  onNoMatch: 'passthrough',
  delayResponse: 500,
});

mock.onGet('/courses/fundraising').reply(200, getFundraising);
