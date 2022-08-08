const authResolver = require('./auth');
const eventsResolver = require('./events');
const podcastsResolver = require('./podcasts')
// const bookingResolver = require('./booking');

const rootResolver = {
    ...authResolver,
    ...eventsResolver,
    ...podcastsResolver
    // ...bookingResolver
};

module.exports = rootResolver;