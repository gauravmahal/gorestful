package main

import (
	"io"
	"log"
	"net/http"
)

// hello world, the web server
func Myserver(w http.ResponseWriter, req *http.Request) {
	io.WriteString(w, "Hello world!\n")
}

func main() {
	http.HandleFunc("/hello", Myserver)
	log.Fatal(http.ListenAndServe(":8000", nil))
}
