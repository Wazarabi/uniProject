import { connect , ConnectOptions } from 'mongoose';

export const dbConnect = () => {
    // returns a promise so we have then()
    connect(process.env.MONGO_URI!,{
        useNewUrlParser: true,
        useUnifiedTopology : true
    } as ConnectOptions).then(
        () => console.log("connection to db successfull"),
        (error) => console.log(error)
    )
}