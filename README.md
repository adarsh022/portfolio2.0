# Portfolio 2.0 - Adarsh Pandey

This repository contains the source code for the personal portfolio website of **Adarsh Pandey**, a Lead Cloud Engineer specializing in GCP and AWS. The site showcases professional experience, technical skills, blog posts, and contact information.

## 🚀 Features

-   **Responsive Design:** Fully optimized for desktop and mobile interfaces with a custom hamburger menu.
-   **About Section:** Professional summary highlighting Cloud Engineering expertise.
-   **Experience Timeline:** Detailed work history at companies like Persistent Systems and Adaan Digital Solutions.
-   **Blog Integration:** Direct links to technical articles on Medium regarding GCP and Cloud Automation.
-   **Resume Download:** Easy access to download the latest resume.

## 🛠️ Tech Stack

### Frontend
-   **HTML5**
-   **CSS3 / SASS** (SCSS for styling)
-   **JavaScript** (jQuery for DOM manipulation)
-   **Google Fonts** (Poppins, Roboto Slab)

### Infrastructure & DevOps
-   **Google Cloud Platform (GCP)**
-   **Docker**
-   **Google Cloud Build** (CI/CD)
-   **Google Cloud Run** (Serverless Hosting)
-   **Google Artifact Registry**

## 📂 Project Structure

```text
portfolio2.0/
├── cloudbuild.yaml          # CI/CD configuration for Google Cloud Build
├── html/
│   ├── index.html           # Main HTML entry point
│   ├── favicon.ico
│   ├── src/
│   │   ├── Assets/
│   │   │   ├── CSS/         # Compiled CSS files
│   │   │   ├── SASS/        # Source SASS stylesheets
│   │   │   ├── JS/          # JavaScript logic (e.g., ham.js)
│   │   │   ├── Images/      # Static assets
│   │   │   └── Docs/        # Resume PDF
```

## ☁️ Deployment

The project utilizes a **Google Cloud Build** pipeline defined in `cloudbuild.yaml` for automated deployment.

### Pipeline Workflow:
1.  **Build:** Creates a Docker image from the source code.
2.  **Push:** Uploads the image to the **Google Artifact Registry** (`asia-south2-docker.pkg.dev`).
3.  **Deploy:** Deploys the container to **Google Cloud Run** (Managed).

### Configuration Details:
-   **Region:** `asia-south2`
-   **Project ID:** `project-002-v2`
-   **Service Account:** `portfolio@project-002-v2.iam.gserviceaccount.com`

## 👤 Author

**Adarsh Pandey**
-   Lead Cloud Engineer
-   Medium Blog
-   Email: adarshpandey022@gmail.com