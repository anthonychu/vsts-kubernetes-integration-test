const request = require('superagent');

const url = process.env.ENDPOINT_URL || 'http://echoheaders';

describe('GET ' + url, () => {
    it('should return 200', done => {
        request
            .get(url)
            .then(res => {
                expect(res.status).toEqual(200);
                done();
            });
    });
});
