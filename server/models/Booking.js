import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        car: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Car',
        },
        description: String,
        picturePath: {
            type: String,
            default: 'https://photos1.blogger.com/blogger/7372/3962/1600/IMG_0262.jpg'
        },
        likes: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Likes",
            },
        ],
        comments: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Comment",
            },
        ],
    },
    {
        timeStamps: true,        
        toJSON: { virtuals: true },
    }
)


const Post = mongoose.model('Post', PostsSchema)

export default Post;