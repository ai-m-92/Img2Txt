// scripts.js
document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            Tesseract.recognize(
                e.target.result,
                'eng',
                {
                    logger: m => console.log(m)
                }
            ).then(({ data: { text } }) => {
                document.getElementById('textOutput').value = text;
            });
        };
        reader.readAsDataURL(file);
    }
});
