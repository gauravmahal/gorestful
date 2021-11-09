### Running the project after building 
    go run ./basicHandler.go

### For background process  
```shell
    // For background running process, use below to find the processID
    pgrep go 
    // then to kill it use 
    kill pid //-9 optional
```
## httprouter, a lightweight HTTP router

* Allows variables in the route paths
* It matches the REST methods (GET, POST, PUT, and so on)
* No compromising on performance
* httprouter explicitly says that a request can only match to one route or none
* The router's design encourages building sensible, hierarchical RESTful APIs
* You can build efficient static file servers
```go
    // To install httprouter
    go get github.com/julienschmidt/httprouter
    // To use it 
    import "github.com/julienschmidt/httprouter"
    // To execute system commands and get the output back to the program
    import "os/exec"
    // arguments... means an array of strings unpacked as arguments in Go
    cmd := exec.Command(command, arguments...)
