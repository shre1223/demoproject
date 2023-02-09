package routes

import (
	"echo-mongo-api/controller"

	"github.com/labstack/echo/v4"
)

func UserRoute(e *echo.Echo) {
	//All routes related to users comes here
	e.POST("/user", controller.CreateUser)
	e.GET("/user/:email", controller.GetAUser)
	e.PUT("/user/:email", controller.EditAUser)
	e.DELETE("/user/:email", controller.DeleteAUser)
	e.GET("/users", controller.GetAllUsers)
	e.POST("/login", controller.AuthenticateUser)
}
