from fastapi import APIRouter, HTTPException
from .models import Task, TaskCreate, TaskUpdate
from .storage import task_storage

router = APIRouter(prefix="/tasks", tags=["tasks"])


@router.get("")
def get_tasks() -> list[Task]:
    return task_storage.get_all()


@router.post("", status_code=201)
def create_task(task_data: TaskCreate) -> Task:
    task = Task(title=task_data.title)
    return task_storage.add(task)


@router.patch("/{task_id}")
def toggle_task(task_id: str, task_update: TaskUpdate) -> Task:
    task = task_storage.get_by_id(task_id)
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    
    if task_update.completed is not None:
        updated_task = task_storage.update(task_id, task_update.completed)
        if updated_task:
            return updated_task
    
    return task


@router.delete("/{task_id}", status_code=204)
def delete_task(task_id: str):
    if not task_storage.delete(task_id):
        raise HTTPException(status_code=404, detail="Task not found")
