FROM golang:1.16-alpine

WORKDIR /app
COPY . .

# Download all the dependencies
RUN go get -d -v ./...

# Install the package
RUN go install -v ./...

COPY *.go ./

RUN go build -o /docker-go

# EXPOSE 5200

CMD [ "/docker-go" ]