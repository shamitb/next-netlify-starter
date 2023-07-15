import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
<!DOCTYPE html>
<html>
<head>
  <title>Fantasy Adventure</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    h1 {
      text-align: center;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #333;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
    }
    .button:hover {
      background-color: #555;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Welcome to the Fantasy Adventure</h1>
    <p>Choose your path:</p>
    <div>
      <a href="path1.html" class="button">Path 1</a>
      <a href="path2.html" class="button">Path 2</a>
      <a href="path3.html" class="button">Path 3</a>
    </div>
  </div>
</body>
</html>
  )
}
