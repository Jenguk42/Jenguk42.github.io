---
title: "REST & HTTP"

categories: 
- Web Development

toc: true
toc_sticky: true
---

> ✒ Reference:[What Is A RESTful API? Explanation of REST & HTTP](https://youtu.be/Q-BpqyOT3a8)

## What is an API?

**A**pplication **P**rogram **I**nterface (specifically web API's)

- API's are everywhere: computers, smartphones, refrigerators, etc.
- It is a contract provided by once piece of software to another
- Usually consists of structured request and response

An API is like a waiter that takes your order and brings back your meal; It takes a formatted request from a user (or a software), and returns a response. These formats are called the API standards. (JASON, SOAP, etc.)

## What is REST?

**Re**presentational **S**tate **T**ransfer

- An **architecture style** for designing networked applications
- Relies on a **stateless, client-server** communication protocol, which is almost always **HTTP**
- Treats server objects (i.e. blog posts in a database) as resources that can be created or destroyed.
  - We can post it with a `post` request, delete with a `delete` request, etc.
- Can be used by virtually any programming language since it operates only using HTTP and an API standard (i.e. JSON).

REST uses HTTP request to format API. A RESTful API (REST API) is an API that conforms to the REST constraints.

## HTTP Methods

- `GET`: Retrieve data from a specific resoure (server URI)
- `POST`: Submit data to be processed to a specified resource
  - Form tags in HTML can take an action (the page you are submitting to) and a method (`POST` or `GET`) attribute.
<br><br>
- `PUT`: Update a specified resource
- `DELETE`: Delete a specified resource
  - You need to send requests to an endpoint with some kind of ID for the specific resource. (Server should know which one you are updating or deleting)
  - Cannot be made from a form; you should use standard JavaScript, jQuery, AJAX, etc.
  - Frameworks like Angular have HTTP modules that handle sending `PUT` and `DELETE`.
<br><br>
- `HEAD`: Same as `GET`, but does not return a body
- `OPTIONS`: Returns the supported HTTP methods
- `PATCH`: Update partial resources

## Endpoint examples

Endpoints are the URI/URL where API/service can be accessed by a client application. An API folder or a subdomain is used for these endpoints.

| Method | Endpoint example                                                                 | What it does              |
| ------ | -------------------------------------------------------------------------------- | ------------------------- |
| `GET`    | `https://mysite.com/api/users`                                                   | Returns a list of users   |
| `GET`    | `https://mysite.com/api/users` <br> OR `https://mysite.com/api/users/details/1`  | Returns a specific user   |
| `POST`   | `http://mysite.com/api/users`                                                    | Adds a user to the server |
| `PUT`    | `https://mysite.com/api/users/1` <br> OR `https://mysite.com/api/users/update/1` | Updates a certain user.   |
| `DELETE` | `https://mysite.com/api/users/1` <br> OR `https://mysite.com/api/users/delete/1` | Deletes a certain user.   |

The same URL can be used for different requests. (i.e. `GET` and `POST` above)

## Authentication

Endpoints without any authentication are public (open) API's. Some API's require authentication to user their service, which could be free or paid. `OAUTH` gets an access token and send it along with the request.

`curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com`

- Sending the token inside the HTTP header

`curl https://api.github.com/?access_token=OAUTH-TOKEN`

- Sending the token as a parameter

`curl https://api.github.com/users/whatever?client_id=xxxx&client_secret=yyyy`

- Sending a client id and secret as a parameter instead of sending a token

## Example: Github API

Most API's come with a documentation: i.e. [GitHub Docs - Users](https://docs.github.com/en/rest/reference/users)

### Using Postman to make requests

Getting the users from the example in the Express crash course:

![image](https://user-images.githubusercontent.com/54295374/146033481-51ee7768-71ce-4ad3-9f54-270d0608a1bf.png)

Getting a specific user from github:

![image](https://user-images.githubusercontent.com/54295374/146032863-f0604828-9755-493c-8371-9df5fb4b2123.png)

### Authenticated requests

Without authentication, you can only send a certain amount of requests per hour.

![image](https://user-images.githubusercontent.com/54295374/146034005-582c648c-0996-462f-9fa9-bb307271044d.png)

You can [register a OAuth application](https://github.com/settings/applications/new), then get a client ID and Secret to include them in the request parameter.

![image](https://user-images.githubusercontent.com/54295374/146034790-d8c017c4-789b-48f7-ab7c-cad0a6a08fa9.png)

Now you can send as many requests as you want!

![image](https://user-images.githubusercontent.com/54295374/146035193-4cff1ec5-096a-450c-aea6-c2d10b198d56.png)
