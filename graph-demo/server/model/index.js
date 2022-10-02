const mongoose = require('mongoose');
const MSchema = mongoose.Schema;


const UserSchema = new MSchema({
    name: String,
    age: Number,
})
const PostSchema = new MSchema({
    title: String,
})
const SubSchema = new MSchema({
    des: String,
})
const User = mongoose.model('User', UserSchema);
const Post = mongoose.model('Post', PostSchema);
const Sub = mongoose.model('Sub', SubSchema);

module.exports = {
  User,
  Post,
  Sub
}