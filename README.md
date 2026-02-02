# Portfolio 2.0 - Adarsh Pandey

This repository contains the source code for the personal portfolio website of **Adarsh Pandey**, a Google Cloud Engineer with 5+ years of experience specializing in GCP and AWS. The site showcases professional experience, technical skills, blog posts, and contact information.

## 🚀 Features

-   **Modern Responsive Design:** Fully optimized for desktop and mobile with a sleek hamburger menu and smooth animations.
-   **Typing Animation:** Dynamic hero section with a rotating text effect.
-   **About Section:** Professional summary highlighting Cloud Engineering expertise and 3 Google Cloud certifications.
-   **Technologies Section:** Showcases key technologies and tools used.
-   **Experience Timeline:** Interactive tabbed work history at Capgemini, Persistent Systems, and Adaan Digital.
-   **Blog Integration:** 6 technical articles on Medium covering GCP, Cloud SQL, Networking, and Automation.
-   **Resume Download:** Easy access to download the latest resume.
-   **Google Analytics:** Integrated tracking for visitor insights.

## 🛠️ Tech Stack

### Frontend
-   **HTML5**
-   **CSS3** (Modern CSS with custom properties/variables)
-   **Vanilla JavaScript** (No jQuery dependency)
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
├── README.md
├── html/
│   ├── index.html           # Main HTML entry point
│   ├── style.css            # Main stylesheet
│   ├── script.js            # JavaScript for interactions
│   ├── favicon.ico
│   └── Assets/
│       ├── Images/          # Static image assets
│       └── Docs/            # Resume PDF
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