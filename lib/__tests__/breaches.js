'use strict';

const breachesTask = require('../tasks/breaches.js');

describe('Task: Breaches', () => {
  it('exports by default a function', () => {
    expect(typeof breachesTask).toBe('function');
  });

  it('returns an array of results', done => {
    breachesTask('codekraft.it', {}, (err, res) => {
      expect(err).toBeNull();
      expect(Array.isArray(res)).toBeTruthy();
      done();
    });
  });
});