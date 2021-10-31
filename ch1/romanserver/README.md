
## Setting up Swagger UI 
```
    _start the docker deamons
        systemctl start docker
    // install Swagger UI via Docker   
        docker pull swaggerapi/swagger-ui
    --run the server    
        sudo docker run --rm -p 80:8080 -e SWAGGER_JSON=/app/openapi.json -v ~/git_repos/Learn-New-Skills/gorestful/ch1/romanserver:/app swaggerapi/swagger-ui
    _launch http://locahost in the browser
```

### Checking the port on which the server is running 
    lsof -i TCP:8000

### Checking the get request in terminal 
    curl -X GET "http://localhost:8000/roman_number/4" -v

## Running supervisord
```
        supervisord -c supervisord.conf
    // .conf file can be picked from /etc/supervisord.conf also
        supervisorctl 
    // running from current directory then    
        supervisorctl reread 
        supervisorctl update
        supervisorctl
``` 

## Installing npm and gulp 
```javascript
    pamac install npm
    sudo npm install --global gulp-cli
    sudo npm install gulp gulp-shell
    gulp --version
_list all the tasks in gulpfile.js 
    gulp --tasks
    gulp
```

### Getting all dependencies in go project 
    go mod tidy

### Building go project 
    go build ./main.go

### Installing the project 
    go install .

## Adding submodule 
```
    git submodule add git@github.com:gauravmahal/gorestful.git
// updating the submodule 
    git submodule update --int --remote
```

### For better submodule status 
    git config --global status.submodulesummary true
