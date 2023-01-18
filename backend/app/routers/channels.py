from fastapi import FastAPI, Response, status, HTTPException, APIRouter, Depends
from app.db import get_db
from botocore.exceptions import ClientError

router = APIRouter(prefix="/channels", tags=['Channels'])

@router.get("/")
def get_channels(db=Depends(get_db)):
    table = db.Table('Channels')
    response = table.scan()
    return response.get('Items', [])


@router.get("/{key}")
def get_channel(key: str, db=Depends(get_db)):
    try:
        table = db.Table('Channels')
        response = table.get_item(Key={'uid': key})
        return response['Item']
    except ClientError as e:
        raise ValueError(e.response['Error']['Message'])