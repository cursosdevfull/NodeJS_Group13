from locust import task, TaskSet, HttpLocust
import json

class UserBehavior_UserA(TaskSet):
    def on_start(self):
        response = self.client.post("/auth/login", {"email":"sergio@correo.com", "password": "123"})
        self.token = response.json()["accessToken"]

    @task(10)
    def list_users(self):
        self.client.get("/user", headers={"Authorization": "Bearer " + self.token})

    @task(2)
    def list_users_by_page(self):
        self.client.get("/user/page/0/1", headers={"Authorization": "Bearer " + self.token})

class UserBehavior_UserB(TaskSet):
    def on_start(self):
        response = self.client.post("/auth/login", {"email":"sergio@correo.com", "password": "123"})
        self.token = response.json()["accessToken"]

    @task(3)
    def list_users(self):
        self.client.get("/user", headers={"Authorization": "Bearer " + self.token})

    @task(2)
    def list_users_by_page(self):
        self.client.get("/user/page/0/1", headers={"Authorization": "Bearer " + self.token})    

class Task_UserA(HttpLocust):
    task_set = UserBehavior_UserA
    min_wait=2000
    max_wait=5000

class Task_UserB(HttpLocust):
    task_set = UserBehavior_UserB
    min_wait=3000
    max_wait=4000    