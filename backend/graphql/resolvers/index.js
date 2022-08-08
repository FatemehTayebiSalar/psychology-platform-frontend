const authResolver = require('./auth');
const eventsResolver = require('./events');
const podcastsResolver = require('./podcasts');
const videosResolver = require('./videos');
const psychologistsResolver = require('./psychologists');
// const bookingResolver = require('./booking');

const rootResolver = {
    ...authResolver,
    ...eventsResolver,
    ...podcastsResolver,
    ...videosResolver,
    ...psychologistsResolver
    // ...bookingResolver
};

module.exports = rootResolver;