import os
from fastapi import FastAPI
from mangum import Mangum
from fastapi.middleware.cors import CORSMiddleware
from .routers import channels

STAGE = os.environ.get('STAGE')
root_path = '/' if not STAGE else f'/{STAGE}'

app = FastAPI(title="Harmony", root_path=root_path)

origins = ["http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(channels.router)

@app.get('/hello')
def hello_api(name: str = "World"):
    return {"hello": name}

# Mangum handler
handler = Mangum(app)
