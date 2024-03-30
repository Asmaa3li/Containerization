# Containerize TO-DO App 
It is a dockerization for a simple TO-DO list app in node.js. 

## Installation
To run this project locally, follow these steps:
* Clone the repository to your local machine using Git: ```git clone https://github.com/Asmaa3li/Containerization.git```
* run this command to install all dependencies: ```npm install```
* run ```docker build -t <node_image_name> command```
* to create a bridge network run ```docker network create <network_name> command```
* run ```docker run --name <container_name> --network <network_name> mongo ```
* run ```docker run --name <container_name> --network <network_name> <node_iamge_name> ```


    

