How to create a Fast API backend and connect it to a react front-end.

1. File Name is FastApi + React

Inorder to intergrate FastAPI with react, i need to create a react project for F-E, and a FastAPI project representing the Back-End.

1. The F-E is going to be sending requests to the B-E,
 i) The back-end will handle any sensitive data,
 ii) Storing things in the Database
 iii)Authentication
 iv) Authorization
 v)e.t.c. and THEN RETURN RESULTS BACK TO THE FRONT-END.

The F-E is a seperate project just handled by react and B-E or (API)handled by Fast API.

1. Create a backend directory/folder in the Main(Root) directory.
2. Activate the Virtual Env, this is a command you need to run if you are signing into a server.

Backend

1. In the Backend Folder, (this is standard for a python project) create a requirements.txt file that will contain all the dpendancies for our Fast API application, so that someone else using the project later knows what dependancies they need.

2. install the dependancies(fastapi,uvicorn,pydantal)
uvicorn is going to act as our server to run our fastAPI app

3. In the main.py i am going to import all the necessary dependancies and then start by defining the data models, what fastapi can do is that it can automatically validate data coming in and it can format data going out based on "pydantic models".

Code explanation of GET request:
@app.get("/fruits", response_model=Fruits)
def get_fruits():
    return Fruits(fruits=memory_db["fruits"])

fruits = memory db at the Key fruits, what is happening is that when we go to the /fruits endpoint, we are going to define that the response model(response_model) that we want to return from this endpoint is fruits and it is the class show below

class Fruits(BaseModel):
    fruits: List[Fruit]

fastapi will be able to look at this and then automatically know how to convert this python object into a JSON, that we can return from this API, so the F-E can ingest it and read it.

so when we go to the /fruits endpoint, the function get_fruits will be called, and we are going to return an instance of the Fruits class, this will take our memory_db with our fruits and then wrap it into this python object and return it as a JSON so that our USER or F-E can use it.


we are going to have a post endpoint, and this time we are going to return a Fruit rather than Fruits,
the function add_fruit, takes in a fruit, so what is going on is that we are going to have a post request fruits that you use when you want to create data, and we are going to take in a fruit from the user, using the pydantic model shown below

class Fruit(BaseModel):
    name: str
this is the first thing that i write in the code because it is going to be taking input from the user(be careful of the structure), fastapi will automatically validate that we are passing in a valid fruit, which is simply a name but we can add anything that we want to it, if it is correct we will add it to the database by appending it to the fruits list and return that fruit so that the user knows which one they added.

after this run the python main.py, and split the terminal

1. create a new vite project 
2. Create a new directory called components in the src folder, where i will put imp components for example. adding the fruits, viewing the different fruits i have in the List.
3. Create api.js file in src, where we are going to define axios for calling the api

