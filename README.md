# test-example

Simple REST server for showing unit tests.

The REST API accepts POST and GET requests on arbitrary path's to create and read JSON objects.

Example for POST:

```
curl -H 'Content-Type: application/json' -d '{"message":"Hello World"}' http://localhost:4000/message.txt
```

Curl output should be `Created`.

Example for GET:

```
curl http://localhost:4000/message.txt
```

Curl output should be the data object.
