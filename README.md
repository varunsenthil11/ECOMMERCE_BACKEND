
## Installation

1. *Clone the repository*:

2. *Install dependencies*:
 
    bash
    cd app
    npm install
    

3. *Set up environment variables*:

    Create a .env file in the root directory and add the following variables:

    dotenv
    PORT=3000
    MONGODB_URI=<Your MongoDB URI>
    JWT_ACCESS_SECRET=<Your JWT secret key>
    JWT_REFRESH_SECRET=<Your JWT refresh key>
    REDIS_URL=<Your Redis URL>
    MAIL_USER=<Your MAIL_USER>
    MAIL_PASS=<Your MAIL_PASS>


    

4. *Start the server*:

    bash
    npm start
    
