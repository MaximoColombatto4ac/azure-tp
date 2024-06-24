import mongoose from "mongoose";

export const db = async () => {
    try {
        mongoose.connect(process.env.DATABASE || 'mongodb+srv://maximocolombatto:hVlh5JoGJRfPnRkc@abm-productos.4mayti4.mongodb.net/?retryWrites=true&w=majority&appName=abm-productos/test');
        const db = mongoose.connection;
        db.once('open', async () => {
            console.log("conectado");
        })
    } catch (error) {
        console.log(error);
    }
} 