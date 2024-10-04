from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import json
from typing import List, Dict
import uvicorn
import os
import sys

chatHistory = os.path.join(os.path.dirname(sys.path[0]), "db/chatHistory.json")

app = FastAPI()

class Message(BaseModel):
    ai: str = None
    user: str = None

@app.get("/chats", response_model=List[Dict[str, str]])
def get_chats():
    try:
        with open(chatHistory, 'r') as file:
            chats = json.load(file)
        return chats
    except FileNotFoundError:
        return []

@app.post("/chats", response_model=Dict[str, str])
def post_chat(message: Message):
    if not message.ai and not message.user:
        raise HTTPException(status_code=400, detail="Message must have either 'ai' or 'user' key.")
    
    new_message = message.dict(exclude_unset=True)
    
    try:
        with open(chatHistory, 'r') as file:
            chats = json.load(file)
    except FileNotFoundError:
        chats = []
    
    chats.append(new_message)
    
    with open(chatHistory, 'w') as file:
        json.dump(chats, file, indent=4)
    
    return new_message

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)