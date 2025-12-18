from datetime import datetime
from pydantic import BaseModel, Field
from typing import Optional
import uuid


class TaskCreate(BaseModel):
    title: str = Field(..., min_length=1, max_length=200)


class Task(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    completed: bool = False
    created_at: datetime = Field(default_factory=datetime.now)


class TaskUpdate(BaseModel):
    completed: Optional[bool] = None
