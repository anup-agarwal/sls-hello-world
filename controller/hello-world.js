"use strict"



export const helloWorld = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  }

}

