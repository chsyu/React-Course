import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from router import product, user, authentication
from db import models
from db.database import engine


app = FastAPI(
    title="Shopping Cart API",
    description="This API was developed for teaching Fast API",
    version="0.0.1",
    terms_of_service="http://localhost:5000",
)

app.include_router(authentication.router)
app.include_router(product.router)
app.include_router(user.router)


if __name__ == "__main__":
    uvicorn.run("app:app", port= 5000, reload=True)


origins = [
    'http://127.0.0.1:5173',
    'http://localhost:5173',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=['*']
)

models.Base.metadata.create_all(engine)
