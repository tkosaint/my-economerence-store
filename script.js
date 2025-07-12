:root {
  --primary-color: #007BFF;
  --secondary-color: #f4f4f4;
  --text-color: #333;
  --bg-color: #fff;
}

body.dark {
  --primary-color: #0d6efd;
  --secondary-color: #212529;
  --text-color: #f8f9fa;
  --bg-color: #121212;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background-color: var(--secondary-color);
  color: var(--text-color);
  line-height: 1.6;
  transition: background 0.3s ease;
}

.container {
  max-width: 1100px;
  margin: auto;
  padding: 20px;
}

header {
  background-color: var(--primary-color);
  color: white;
  padding: 15px 0;
}

header h1 {
  text-align: center;
  margin-bottom: 10px;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
}

nav a {
  color: white;
  text-decoration: none;
}

button {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: white;
}

#filter {
  margin: 20px 0;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  background: var(--bg-color);
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.card h3 {
  margin: 10px 0 5px;
}

.card p {
  color: var(--primary-color);
}

.card button {
  background-color: var(--primary-color);
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

#cart {
  background: var(--bg-color);
  padding: 20px;
  border-radius: 8px;
  margin-top: 30px;
}

#cart ul {
  list-style: none;
  padding-left: 0;
}

#cart li {
  margin: 10px 0;
}

footer {
  text-align: center;
  padding: 20px;
  background-color: var(--primary-color);
  color: white;
  margin-top: 30px;
}
