# FitClub 
 here is the live link   https://fitgym-ferdous-ali-react.netlify.app/

FitClub is a responsive fitness landing page built with React. It includes a modern hero section, smooth-scroll navigation, training programs, membership plans, testimonials, and a join form integrated with EmailJS.

## Features

- Responsive landing page design
- Smooth scrolling navigation
- Hero section with animated highlights
- Programs section to showcase services
- Reasons section to highlight benefits
- Membership plans section
- Testimonials slider
- Join form with EmailJS integration
- Built with reusable React components

## Tech Stack

- React
- CSS3
- Framer Motion
- React Scroll
- EmailJS

## Project Structure

```bash
src/
  components/
    Footer/
    Hero/
    Join/
    Plans/
    Programs/
    Reasons/
    Testimonials/
Getting Started
Prerequisites
Make sure you have installed:

Node.js
npm
Installation
bash

git clone https://github.com/your-username/fitclub.git
cd fitclub
npm install
Run Locally
bash

npm start
The app will run at:

bash

http://localhost:3000
Available Scripts
npm start
Runs the app in development mode.

npm run build
Builds the app for production in the build folder.

npm test
Runs the test suite.

EmailJS Setup
The join form uses EmailJS to send emails. To make it work with your own account, update the service ID, template ID, and public key inside:

bash

src/components/Join/Join.jsx
Make sure your EmailJS template includes the same field names used in the form.

Highlights
Clean and modern UI
Mobile-friendly layout
Scroll-based section navigation
Motion effects for a more dynamic experience
Component-based architecture for easier maintenance
Future Improvements
Add backend integration for form submissions
Improve accessibility
Add dark/light theme switch
Add pricing CTA functionality
Connect plans and programs to dynamic data
Author
Built by Ferdous ali




