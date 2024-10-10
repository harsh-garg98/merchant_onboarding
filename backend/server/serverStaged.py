from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
from typing import List, Dict
import uvicorn
import os
import sys


chatHistory = os.path.join(os.path.dirname(sys.path[0]), "db/chatHistory.json")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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

    # Section to send over staged AI's message

    if len(chats) == 2:
        ai_message = {"ai": "Of course! What would you like to know?"}
    if len(chats) == 4:
        ai_message = {"ai": "Definitely! Here's a short summary of the status of your onboarding:"
                      "\n1. We have received your personal details."
                      "\n2. We have received your documents and are verifying them."
                      "\n3. Your Business Registration Document seems to be an incorrect document. Are you sure you wanted to submit a document called xyz? (CHANGE THIS NAME)"
                      "\n4. We are verifying the details on your Tax Identification Numbers document, Ownership Documents, Bank Account Information, Business Licences and Permits, Payment Processing History, Business Plan and Revenue Projections, and Compliance Documentation."
                      "\n5. Your Financial Statements are approved."}
    else:
        ai_message = {"ai": "Of course! What would you like to know?"}

    chats.append(ai_message)
    
    # End of AI message section

    with open(chatHistory, 'w') as file:
        json.dump(chats, file, indent=4)
    
    return ai_message

@app.delete("/chats")
def delete_chats():
    try:
        os.remove(chatHistory)
        chats = [{"ai": "Hello! How can I help you today?"}]
        with open(chatHistory, 'w') as file:
            json.dump(chats, file, indent=4)

    except FileNotFoundError:
        pass
    return {"message": "Chat history deleted."}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

