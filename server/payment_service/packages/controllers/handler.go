package controllers

import (
	"encoding/json"
	"net/http"

	"github.com/dgrijalva/jwt-go"
)

type Message struct {
	Text string `json:"text"`
}

func Handler(w http.ResponseWriter, r *http.Request) {
	cookie, err := r.Cookie("userToken")
	if err != nil {
		http.Error(w, "Cookie not found", http.StatusNotFound)
		return
	}

	// Decode the JWT token from the cookie value
	tokenString := cookie.Value
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return []byte("car_rental_secret_service"), nil // Replace "your-secret-key" with your actual secret key
	})
	if err != nil {
		http.Error(w, "Failed to parse JWT token", http.StatusInternalServerError)
		return
	}

	// Check if the token is valid
	if !token.Valid {
		http.Error(w, "Invalid JWT token", http.StatusUnauthorized)
		return
	}

	// Extract the claims from the token
	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok {
		http.Error(w, "Failed to extract claims from JWT token", http.StatusInternalServerError)
		return
	}
	// exp, ok := claims["exp"].(float64)
	// if ok {
	// 	// Convert exp to time.Time for better handling
	// 	expirationTime := time.Unix(int64(exp), 0)
	// 	// Include expiration time in error message
	// 	http.Error(w, fmt.Sprintf("Token might be expired at: %v", expirationTime), http.StatusInternalServerError)
	// 	return
	// }

	// Convert the claims to JSON
	jsonData, err := json.Marshal(claims)
	if err != nil {
		http.Error(w, "Failed to marshal claims to JSON", http.StatusInternalServerError)
		return
	}

	// Set the response content type and write the JSON data to the response
	w.Header().Set("Content-Type", "application/json")
	w.Write(jsonData)
}
