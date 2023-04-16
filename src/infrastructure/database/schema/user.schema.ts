import Mongoose from 'mongoose'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IUserModel extends Mongoose.Document{

}

const userSchema = new Mongoose.Schema({
    user_id: Mongoose.Schema.Types.ObjectId,
    name: String,
    email: String
})

export const UserRepoModel = Mongoose.model<IUserModel>('User', userSchema)