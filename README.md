# Proteccio Discover – Privacy Intelligence Platform

## Overview

Proteccio Discover is a Privacy Intelligence and Data Governance platform developed as part of the Proteccio Data Internship Program.

The platform enables organizations to:

* Discover sensitive data
* Classify personal and confidential information
* Perform data profiling
* Analyze privacy risks
* Monitor compliance posture
* Generate governance insights
* Export reports for auditing and review

The project combines data ingestion, discovery, classification, mapping, profiling, governance, compliance intelligence, and reporting into a unified web platform.


## Features

### Authentication

* User Registration
* User Login
* Session Management
* Protected Dashboard Access
* Supabase Authentication Integration

### Dashboard

* Total Scanned Records
* Sensitive Data Count
* High-Risk Dataset Count
* Compliance Score
* Risk Distribution Visualization

### Source Management

* CSV File Upload
* Source Monitoring
* Metadata Extraction
* Upload Validation

### Data Discovery

* Sensitive Data Detection
* Email Detection
* Aadhaar Detection
* Financial Data Detection
* Detection Insights

### Data Classification

* Personal Data Classification
* Sensitive Personal Data Classification
* Financial Data Classification

### Data Mapping

* Source-to-Destination Mapping
* Data Lineage Tracking

### Data Profiling

* Record Statistics
* Sensitive Data Density Analysis
* Risk Profiling

### Risk Analysis

* Risk Scoring
* Risk Classification
* Critical Dataset Identification

### Compliance Intelligence

* GDPR Indicators
* DPDP Indicators
* HIPAA Indicators
* Governance Dashboard

### Reporting

* JSON Report Export
* Discovery Results Reporting
* Compliance Reporting

## Technology Stack

### Frontend

* Next.js
* React.js
* Tailwind CSS
* Recharts

### Backend

* Python
* Flask
* Flask-CORS

### Database & Authentication

* Supabase
* PostgreSQL

### Deployment

* Vercel (Frontend)
* Render (Backend)


## Architecture

Data Source
→ Data Ingestion
→ Data Discovery
→ Classification
→ Data Mapping
→ Data Profiling
→ Risk Analysis
→ Compliance Intelligence
→ Reporting Dashboard

## Project Structure

Frontend:

* Authentication
* Dashboard
* Sources
* Discovery
* Compliance
* Reports

Backend:

* Upload APIs
* Discovery APIs
* Classification APIs
* Mapping APIs
* Profiling APIs
* Risk Analysis APIs
* Dashboard APIs

## API Endpoints

### Upload

POST /upload

Uploads source files for processing.

### Analyze

POST /analyze

Performs:

* Discovery
* Classification
* Mapping
* Profiling
* Risk Analysis

### Dashboard Metrics

GET /dashboard/metrics

Returns:

* Total scanned records
* Sensitive records
* High-risk datasets


## Security Features

* Environment Variable Configuration
* Secure Authentication
* API Key Validation
* File Upload Validation
* Sensitive Data Masking


## Deployment Links

Frontend:
https://proteccio-discover-frontend.vercel.app

Backend:
https://proteccio-discover.onrender.com


## Test Credentials

Email:
demo@gmail.com

Password:
123456

## To run
In terminal:
npm run dev

