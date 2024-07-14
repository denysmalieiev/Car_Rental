package controllers

import (
	"encoding/json"
	"net/http"
)

type Message struct {
	Text string `json:"text"`
}

func Handler(w http.ResponseWriter, r *http.Request) {
	cookie, _ := r.Cookie("userToken")
	jsonData, _ := json.Marshal(cookie)

	w.Header().Set("Content-Type", "application/json")
	w.Write(jsonData)
}
