from locust import task, TaskSet, HttpLocust
import json

class UserBehavior_UserA:
    def on_start(self):
        response = self.client.post("/auth/login", {"email":"sergio@correo.com", "password": "123"})
        self.token = response.json()["accessToken"]

    def list_users(self):
        self.client.get("/user", headers={"Authorization": "Bearer " + self.token})

    def list_user_one(self):
        self.client.get("/user/page/0/1", headers={"Authorization": "Bearer " + self.token})


        
class UserBehavior_UserB: