const graphql = require('graphql')
const { User, Post, Sub } = require('../model')

const {
  GraphQLID,
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLNonNull,
} = graphql;

// const User = [
//   {id: '111', name: 'aa', age: 111 },
//   { id: '222', name: 'bb', age: 111 },
//   { id: '333', name: 'cc', age: 111 },
// ]

// const Post = [
//   { id: '111', title: 'post_aaasasas', userId: '111'},
//   { id: '222', title: 'post_bbasasas', userId: '222'},
//   { id: '333', title: 'post_ccasasas', userId: '333'},
// ]

// const Sub = [
//   { id: '111', des: 'sub_aaasasas' },
//   { id: '222', des: 'sub_bbasasas' },
//   { id: '333', des: 'sub_ccasasas' },
// ]
const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'Documentation for User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    post: { type: PostType }
  })
});

const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'Documentation for post',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    user: {
      type: UserType,
      resolve(parent, args) {
        return User.find(el => el.id === parent.userId)
      },
    }
  })
});


const SubType = new GraphQLObjectType({
  name: 'sub',
  description: 'Documentation for Sub',
  fields: () => ({
    id: { type: GraphQLID },
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
        return User.find(el => el.id === args.id)
      }
    },
    sub: {
      type: PostType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return Sub.find(el => el.id === args.id)
      }
    },
    post: {
      type: PostType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return Post.find(el => el.id === args.id)
      }
    }
  }
})

//Mutations
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    CreateUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args) {
        const instance = new User({
          name: args.name,
          age: args.age,
        });
        return instance.save();
      }
    }
  }
})



module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})