FROM golang:latest

WORKDIR /app

COPY go.mod ./
RUN go mod download

COPY . .

# Expose the port the application runs on
EXPOSE 5007

CMD [ "go", "run", "main.go" ]