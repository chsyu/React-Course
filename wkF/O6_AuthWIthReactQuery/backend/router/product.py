from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from router.schemas import ProductRequestSchema, ProductResponseSchema, ProductResponseWithUserSchema
from db.database import get_db
from db import db_product
from typing import List

router = APIRouter(
    prefix='/api/v1/products',
    tags=['products']
)


@router.post('', response_model=ProductResponseSchema)
def create_product(request: ProductRequestSchema, db: Session = Depends(get_db)):
    return db_product.create(db=db, request=request)


@router.get('/feed', response_model=List[ProductResponseSchema])
def feed_initial_products(db: Session = Depends(get_db)):
    return db_product.db_feed(db)


@router.get('/all', response_model=List[ProductResponseSchema])
def get_all_products(db: Session = Depends(get_db)):
    return db_product.get_all(db)


@router.get('/id/{product_id}', response_model=ProductResponseWithUserSchema)
def get_product_by_id(product_id: int, db: Session = Depends(get_db)):
    return db_product.get_product_by_id(product_id=product_id, db=db)


@router.get("/{category}", response_model=List[ProductResponseSchema])
def get_product_by_category(category: str, db: Session = Depends(get_db)):
    return db_product.get_product_by_category(category=category, db=db)
