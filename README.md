### Working example: http://simple-driver-api.herokuapp.com

# /drivers

### GET
Return all drivers

### POST
Create new driver
```
{
    name: String
    surname: String,
    loc: [latitude (Number), longitude (Number)]
}
```
# /drivers/{id}

### GET
Get single driver

### PUT
Modify driver
```
{
    name: String
    surname: String,
    loc: [latitude (Number), longitude (Number)]
}
```

### DELETE
Remove driver

# /ride?lat&lon

## GET

Get 3 closest drivers to the specified latitude and longitude on query parameters
