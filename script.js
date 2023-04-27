const httpCatImg = document.querySelector('#http-cat-img');
const statusCode = window.location.pathname.split('/').pop();

if (statusCode !== '' && !isNaN(statusCode)) {
  const imageUrl = `https://http.cat/${statusCode}`;

  fetch(imageUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.blob();
    })
    .then(blob => {
      const objectURL = URL.createObjectURL(blob);
      httpCatImg.src = objectURL;
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
} else {
  console.error('Invalid or missing status code in URL');
}
