# Text annotation

## Project Overview

This project is a text annotation tool built using Angular for the frontend and Django for the backend. It allows users to label words in a document and export the annotations to a JSON file.

## Features

- **Label Management:** Users can input and select labels.
- **Document Annotation:** Select a word or sentence from the document and annotate it with a chosen label.
- 
    ![image](https://raw.githubusercontent.com/jaweherbensalah/UbiAITextAnnotation/master/annotated_text.png)
  
- **JSON Export:** Export the annotations with label positions and titles to a JSON file. 

  ![image](https://raw.githubusercontent.com/jaweherbensalah/UbiAITextAnnotation/master/annotation_json.png)

- **Saving data:** Save the document and its related annotation data to the backend.
  ![image](https://raw.githubusercontent.com/jaweherbensalah/UbiAITextAnnotation/master/annotation_list.png)



  

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
