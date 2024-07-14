package main

import (
	"fmt"
	"net/http"
	"payment_service/packages/controllers"
)

func main() {
	http.HandleFunc("/payment", controllers.Handler)
	fmt.Println("Server listening on port 5007")
	http.ListenAndServe(":5007", nil)
}
