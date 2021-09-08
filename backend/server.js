import express from 'express';
import data from './data.js';
import userRouter from './routers/userRouter.js';
import mongoose from 'mongoose';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { generateToken } from './utils/utils.js';


import User from './models/userModel.js';
import Product from './models/productModel.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazon', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get('/', (req, res) => {
    res.send("Server is ready");
})

app.use('api/users', userRouter);
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
})


app.get('/api/users/seed', expressAsyncHandler(async (req, res) => {
    await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers })
}))

app.post('/api/users/signin', expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user),
        });
        return;
    }
    res.status(401).send({ message: 'Invalid email or password' });
    })
);

app.get('/api/listproducts/', expressAsyncHandler(async (req, res) => {
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts })
}))


app.get('/api/products/', expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    if (products) {
        res.send(products);
    } else {
        res.status(400).send({ message: 'Products not found' });
    }
}));

app.get('/api/products/:id', expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(400).send({ message: 'Product not found' });
    }
}));


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is ready on port ${port}`);
})