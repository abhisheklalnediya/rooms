Rooms
=====
An App to manage Building and rooms in it.

Demo
---
Demo is availabe at [http://35.238.128.219/client/](http://35.238.128.219/client/)

Tech Stack
----------

- Python (Django, Django REST Framework)
- PostgreSQL
- Javascript (React, React Context, Ant Design)
- Docker, Docker Compose

How to Run?
------------

1. Set up Docker, Docker Compose
2. Clone the app ``` git clone git@github.com:abhisheklalnediya/rooms.git```
3. Change Directory to rooms-docker
4. Run ```sudo docker-compose up --build```

DB Schema
---------
![Schema](https://github.com/abhisheklalnediya/rooms/raw/master/schema.png)


API Endpoints
-------------

**List Buildings**
> Endpoint: /buildings/  
> Method: GET

**Create Building**

> Endpoint: /buildings/  
> Method: POST

**Get Building**

> Endpoint: /buildings/<buidling_id>/  
> Method: GET

**Update Building**

> Endpoint: /buildings/<buidling_id>/  
> Method: PUT, PATCH

**Delete Building**
> Endpoint: /buildings/<buidling_id>/  
> Method: DELETE

**List Rooms in a Building**
> Endpoint: /buildings/<buidling_id>/rooms/  
> Method: GET

**Create Building**

> Endpoint: /buildings/<buidling_id>/rooms/  
> Method: POST

**Get Room in a Building**

> Endpoint: /buildings/<buidling_id>/rooms/<room_id>/  
> Method: GET

**Update Room in a Building**

> Endpoint: /buildings/<buidling_id>/rooms/<room_id>/  
> Method: PUT, PATCH

**Delete Room in a Building**
> Endpoint: /buildings/<buidling_id>/rooms/<room_id>/  
> Method: DELETE


Authentication
--------------
No authentication


