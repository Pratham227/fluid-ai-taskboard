from typing import Optional
from .models import Task


class TaskStorage:
    def __init__(self):
        self._tasks: list[Task] = []

    def get_all(self) -> list[Task]:
        return self._tasks

    def get_by_id(self, task_id: str) -> Optional[Task]:
        for task in self._tasks:
            if task.id == task_id:
                return task
        return None

    def add(self, task: Task) -> Task:
        self._tasks.append(task)
        return task

    def update(self, task_id: str, completed: bool) -> Optional[Task]:
        task = self.get_by_id(task_id)
        if task:
            task.completed = completed
            return task
        return None

    def delete(self, task_id: str) -> bool:
        task = self.get_by_id(task_id)
        if task:
            self._tasks.remove(task)
            return True
        return False


task_storage = TaskStorage()
