import boto3
from boto3.resources.base import ServiceResource
from .config import settings

def get_db() -> ServiceResource:
    ddb = boto3.resource('dynamodb',
        endpoint_url=settings.db_endpoint_url,
        region_name=settings.db_region_name,
        aws_access_key_id=settings.db_access_id,
        aws_secret_access_key=settings.db_secret_key)
    return ddb