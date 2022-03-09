import mongoose from "mongoose";
import { Password } from "../services/password";

// interface to describe properties required for new User.
interface UserAttrs {
    email: string;
    password: string;
}
// interface to describe properties a UserModel has
interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc;
}

// interface to describe properties a User Document has
// add extra properties for mongoose and internal use here.
interface UserDoc extends mongoose.Document {
    email: string;
    password: string;
    // createdAt:string;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String, // for mongoose, not TS
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// cant use => since we need to access this
// which gets overwritten on using =>
userSchema.pre("save", async function (done) {
    if (this.isModified("password")) {
        const hashed = await Password.toHash(this.get("password"));
        this.set("password", hashed);
    }
    done();
});

userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
