from fastapi import HTTPException, status
from router.schemas import ProductRequestSchema
from sqlalchemy import func
from sqlalchemy.orm.session import Session
from .products_feed import products
import time
from db.models import DbProduct


def db_feed(db: Session):
    new_product_list = [DbProduct(
        category=product["category"],
        name=product["name"],
        sku=product["sku"],
        price=product["price"],
        image=product["image"],
        description=product["description"],
        description_long=product["description_long"],
        currency=product["currency"],
        countInStock=product["countInStock"],
        owner_id=product["owner_id"]
    ) for product in products]
    db.query(DbProduct).delete()
    db.commit()
    db.add_all(new_product_list)
    db.commit()
    return db.query(DbProduct).all()


def create(db: Session, request: ProductRequestSchema) -> DbProduct:
    new_product = DbProduct(
        category=request.category,
        name=request.name,
        sku=request.sku,
        price=request.price,
        image=request.image,
        description=request.description,
        description_long=request.description_long,
        currency=request.currency,
        countInStock=request.countInStock,
        owner_id=request.owner_id
    )
    db.add(new_product)
    db.commit()
    db.refresh(new_product)
    return new_product


def get_all(db: Session) -> list[DbProduct]:
    # time.sleep(10)
    return db.query(DbProduct).all()


def get_product_by_id(product_id: int, db: Session) -> DbProduct:
    # time.sleep(10)
    product = db.query(DbProduct).filter(DbProduct.id == product_id).first()
    if not product:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f'Product with id = {product_id} not found')
    return product


def get_product_by_category(category: str, db: Session) -> list[DbProduct]:
    # time.sleep(2)
    product = db.query(DbProduct).filter(func.upper(DbProduct.category) == category.upper()).all()
    if not product:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f'Product with category = {category} not found')
    return product
