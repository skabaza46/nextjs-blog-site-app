
const handler = (req, res) => {

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

        res.status(201).json({message: "Successfully stored message!", data: newMessage})

    }
};

export default handler;