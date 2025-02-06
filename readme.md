# Digital Portfolio Builder

## Objective
The Digital Portfolio Builder platform allows developers to build and showcase their digital portfolios. The platform integrates multimedia, code, and project documentation to provide a comprehensive way for developers to present their work. 

## Tech Stack

### Frontend:
- **React.js**: For building  user interface and responsive design.
  
### Backend:
- **Node.js**: For building the backend and handling user authentication, data storage, and API requests.
  
### Database:
**MongoDB**: For storing user data, project details, portfolio content, and related information.

## Features

### 1. **Code Integration**
The platform allows users to embed GitHub repositories or live code demos within their portfolio. This helps developers showcase their coding projects and make their portfolios more interactive.

### 2. **Multimedia Support**
Users can include videos, images, and presentations alongside their project descriptions. This feature helps in demonstrating projects more effectively, particularly for web developers, app developers, or creative portfolios.

### 3. **Skill Showcase**
The platform provides a way for users to highlight their key skills, certifications, and accomplishments. Users can include links to external sources like GitHub projects, certification bodies, or even LinkedIn to further validate their expertise.

## Setup & Installation

### Prerequisites
Before setting up the project, ensure you have the following installed on your local machine:

- **Node.js** (for frontend)
- **npm** (for managing packages)
 **MongoDB** (for database)
- **Git** (for version control)

### Step-by-Step Installation

#### 1. Clone the repository
```bash
git clone https://github.com/yourusername/digital-portfolio-builder.git
cd digital-portfolio-builder
```

#### 2. Install Backend Dependencies
Navigate to the backend directory and install the necessary dependencies.

```bash
cd backend
npm install
```

#### 3. Install Frontend Dependencies
Navigate to the frontend directory and install the necessary dependencies.

```bash
cd frontend
npm install
```

#### 4. Set up the Database
Set up **PostgreSQL** or **MongoDB** as your database. Update the connection strings in the backend code to point to your database instance.

```bash
# Example for .env file
MONGODB_URI=Your Db String
PORT=8005 
JWT_SECRET= Secret key
NODE_ENV=production
```

#### 5. Run the Application

Start the  server:

```bash
npm run dev
```


## Usage

1. **Sign up / Log in**: Developers can create an account or log in to access the portfolio builder features.
2. **Create Portfolio**: Users can start creating their portfolios by selecting a template, adding project details, and embedding code.
3. **Customize Portfolio**: Users can modify the portfolio appearance, include multimedia content, and link their skills and projects.
4. **Preview Portfolio**: The platform provides a preview of the portfolio before it’s published.
5. **Publish Portfolio**: Once satisfied with the portfolio, users can publish it and share it via a unique URL.

## Future Features

- **Admin Panel**: For administrators to manage user portfolios and content.
- **Collaborative Portfolios**: Allow multiple developers to collaborate on the same portfolio project.
