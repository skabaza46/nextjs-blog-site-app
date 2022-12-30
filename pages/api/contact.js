import { MongoClient } from 'mongodb';

const handler = async (req, res) => {

    if (req.method === 'POST'){

        const { email, name, message } = JSON.parse(req.body);

        if (!email || 
            !email.includes("@" || 
            !name || 
            name.trim() === ''|| 
            !message || 
            message.trim() === '')){

                res.status(422).json({message: 'Invalid input.'});
                return;
        }

        // Store the data into the database
        const newMessage = {
            email,
            name,
            message,
        };

        console.log(newMessage);

        let client;

        const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

        try {
            client = await MongoClient.connect(connectionString)

        } catch (error) {

            res.status(500).json({message:error.message})
            return;
            
        }

        const db = client.db();

        try {
            const result = await db.collection('blog-messages').insertOne(newMessage);
            newMessage.id = result.insertedId;

        } catch (error) {
            client.close();
            res.status(500).json({message: "Stiring message failed!"})
            return;
        };

        client.close();
        
        res.status(201).json({message: "Successfully stored message!", data: newMessage})

    }
};

export default handler;