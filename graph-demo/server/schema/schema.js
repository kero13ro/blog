const graphql = require('graphql')

const {
  GraphQLID,
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
} = graphql;

const mockUser = [
  {id: '111', name: 'aa', age: 111 },
  { id: '222', name: 'bb', age: 111 },
  { id: '333', name: 'cc', age: 111 },
]

const mockPost = [
  { id: '111', title: 'post_aaasasas' },
  { id: '222', title: 'post_bbasasas' },
  { id: '333', title: 'post_ccasasas' },
]

const mockSub = [
  { id: '111', des: 'sub_aaasasas' },
  { id: '222', des: 'sub_bbasasas' },
  { id: '333', des: 'sub_ccasasas' },
]
const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'Documentation for User',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    post: { type: PostType }
  })
});

const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'Documentation for post',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
  })
});


const SubType = new GraphQLObjectType({
  name: 'sub',
  description: 'Documentation for Sub',
  fields: () => ({
    id: { type: GraphQLString },
    des: { type: GraphQLString },
  })
});


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'Description',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return mockUser.find(el => el.id === args.id)
      }
    },
    sub: {
      type: PostType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return mockSub.find(el => el.id === args.id)
      }
    },
    post: {
      type: PostType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return mockPost.find(el => el.id === args.id)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})