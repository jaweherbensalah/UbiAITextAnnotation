# Text annotation

## Project Overview

This project is a text annotation tool built using Angular for the frontend and Django for the backend. It allows users to label words in a document and export the annotations to a JSON file.

## Features

- **Label Management:** Users can input and select labels.
- **Document Annotation:** Select a word or sentence from the document and annotate it with a chosen label.
    ![image](https://github.com/user-attachments/assets/88817f06-9d20-4603-8fc6-9bb9354ec056)
  
- **JSON Export:** Export the annotations with label positions and titles to a JSON file.
- 
    ![image](https://github.com/user-attachments/assets/5d96f23d-465c-4fdd-a18e-c78d39327de6)

- **Saving data:** SAve the document and its related annotation data to the backend
  ![image](https://github.com/user-attachments/assets/ec12f7ff-7b98-48c1-adc7-55a01d184906)



  

## How to Run the Project

### Backend (Django)

1. Navigate to the backend directory.

2. Run Docker Compose:
    ```bash
    docker-compose up --build
    

### Frontend (Angular)

1. Navigate to the frontend directory.
2. Install dependencies:
    ```bash
    npm install
    ```
3. Run the Angular server:
    ```bash
    ng serve
    ```
4. Open the browser and navigate to `http://localhost:4200`.
