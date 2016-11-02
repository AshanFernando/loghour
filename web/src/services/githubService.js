import axios from 'axios';
import * as store from 'store';

export function getToken(code) {
  return axios.get('/api/authorize/' + code);
}

export function getIssues(options) {
  delete axios.defaults.headers.common['If-None-Match'];
  return axios.get('/api/repos/' + options.org + '/from/' + options.from + '/to/' + options.to + '/user/' + options.user);
}
