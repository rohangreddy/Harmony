from pydantic import BaseSettings

class Settings(BaseSettings):
    db_endpoint_url: str
    db_region_name: str
    db_access_id: str
    db_secret_key: str

    class Config:
        env_file=".env"

settings = Settings()