package main

import (
	"echo-mongo-api/configs"
	"echo-mongo-api/routes"

	//"github.com/labstack/echo/middleware"
	"github.com/labstack/echo/v4"
	//"github.com/labstack/echo/middleware"
	"github.com/labstack/echo/v4/middleware"
)

func main() {

	e := echo.New()
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:3001"},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
	}))

	// e.GET("/", func(c echo.Context) error {
	// 	return c.JSON(200, &echo.Map{"data": "Hello from Echo & mongoDB"})
	// })
	configs.ConnectDB()
	routes.UserRoute(e)
	e.Logger.Fatal(e.Start(":3000"))
}
