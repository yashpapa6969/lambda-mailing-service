# Lambda Mailing Service

## Overview
Lambda Mailing Service is an AWS Lambda function designed to send emails using Amazon SES (Simple Email Service). This service is triggered by HTTP POST requests and can send emails to specified recipients with a custom subject and body.

## Features
- Sends emails using AWS SES.
- Handles HTTP POST requests via API Gateway.
- Customizable subject, body, and recipient list.

## Setup

1. **AWS Configuration:**
   - Ensure that SES is configured in the `ap-south-1` region.
   - Verify the sender email address (`example@gmail.com`) in SES.

2. **IAM Role Permissions:**
   - The Lambda function must have the `ses:SendEmail` permission.
   - Ensure the IAM role associated with the Lambda function has the following policy:

     ```json
     {
         "Effect": "Allow",
         "Action": "ses:SendEmail",
         "Resource": "*"
     }
     ```

3. **Deployment:**
   - Use the Serverless Framework to deploy the service:
     ```bash
     serverless deploy
     ```

## Usage

- **Endpoint:** `/send-email`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
      "subject": "Your Subject",
      "body": "Your email body content",
      "toAddresses": ["recipient@example.com"]
  }
