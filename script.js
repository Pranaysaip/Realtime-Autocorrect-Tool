document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const themeSwitch = document.getElementById('theme-switch');

    inputText.addEventListener('input', async () => {
        const text = inputText.value;
        const response = await fetch('/autocorrect', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
        });
        const result = await response.json();
        outputText.value = result.corrected_text;
    });

    themeSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode', themeSwitch.checked);
    });
});
