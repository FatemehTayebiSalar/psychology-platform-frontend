const {buildSchema} = require('graphql');

module.exports = buildSchema(`

type Event{
    _id: ID!
    title: String!
    information: String!
    organizer: String!
    date: String!
    address: String!
    price: Float!
    capacity: Int!
}

type Podcast {
    _id: ID!
    title: String!
    narrator: String!
    album: String!
    information: String!
    price: Float!
}

type Video {
    _id: ID!
    title: String!
    coach: String!
    album: String!
    information: String!
    price: Float!
}

type Psychologist{
    _id: ID!
    name: String!
    degree: String!
    city: String!
    address: String!
    phoneNumber: String!
    visitAmount: Float!
}

type User{
    _id: ID!
    email: String!
    password: String
    firstName: String!
    lastName: String!
    phoneNumber: String!
    joinedEvents: [Event!]
    joinedPodcasts: [Podcast!]
    joinedVideos: [Video!]

}

input EventInput {
    title: String!
    information: String!
    organizer: String!
    date: String!
    address: String!
    price: Float!
    capacity: Int!
} 

input PodcastInput {
    title: String!
    narrator: String!
    album: String!
    information: String!
    price: Float!
}

input VideoInput {
    title: String!
    coach: String!
    album: String!
    information: String!
    price: Float!
}

input UserInput {
    firstName: String!
    lastName: String!
    phoneNumber: String!
    email: String!
    password: String!
}

type RootQuery {
    events: [Event!]!
    videos: [Video!]!
    podcasts: [Podcast!]!
    psychologists: [Psychologist!]!
   
}

type RootMutation{
    createEvent(eventInput:EventInput): Event
    createPodcast(podcastInput:PodcastInput): Podcast
    createVideo(videoInput:VideoInput): Video
    createUser(userInput: UserInput) : User
    
}

schema{
    query: RootQuery
    mutation: RootMutation 
}
`);