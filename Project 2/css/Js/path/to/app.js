
// Highlight active section in navigation as the user scrolls
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('#navbar li a');
    let currentSection = '';
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section.getAttribute('id');
        }
    });
    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const headerHeight = document.querySelector('header').offsetHeight;
        window.scrollTo({
            top: targetElement.offsetTop - headerHeight,
            behavior: 'smooth',
        });
    });
});
// Dynamically populate the navigation menu
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        if (section.id && section.dataset.nav) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${section.id}`;
            a.textContent = section.dataset.nav;
            li.appendChild(a);
            navbar.appendChild(li);
        }
    });
});
// Add active class on scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    sections.forEach((section) => {
      const top = section.offsetTop - 50;
      const bottom = top + section.offsetHeight;
      const links = document.querySelectorAll('.nav-link');
  
      if (scrollPosition >= top && scrollPosition <= bottom) {
        links.forEach((link) => link.classList.remove('active'));
        document.querySelector(`a[href="#${section.id}"]`).classList.add('active');
      }
    });
  });
  // Get a reference to the unordered list element
const navigationList = document.getElementById("navigation");
// Create an array of navigation items
const navigationItems = ["Home", "About", "Contact"];
// Iterate through the navigation items and create list items
navigationItems.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    navigationList.appendChild(listItem);
});
import { createServer } from 'node:http';
import { readFile, exists } from 'node:fs/promises';
import { join, extname } from 'node:path';
        // Check for file extension to serve with correct MIME type
        switch (extname(filePath)) {
            case '.js':
                contentType = 'application/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
            case '.jpg':
            case '.jpeg':
                contentType = 'image/jpeg';
                break;
            case '.png':
                contentType = 'image/png';
                break;
            case '.svg':
                contentType = 'image/svg+xml';
                break;
            case '.gif':
                contentType = 'image/gif';
                break;
            case '.ico':
                contentType = 'image/x-icon';
                break;
        }
server.listen(3000, '127.0.0.1', () => {
    console.log('Server is running on http://127.0.0.1:3000');
});
// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navbar = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});