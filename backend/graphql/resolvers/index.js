const authResolver = require('./auth');
const eventsResolver = require('./events');
const podcastsResolver = require('./podcasts')
const videosResolver = require('./videos')
// const bookingResolver = require('./booking');

const rootResolver = {
    ...authResolver,
    ...eventsResolver,
    ...podcastsResolver,
    ...videosResolver
    // ...bookingResolver
};

module.exports = rootResolver;