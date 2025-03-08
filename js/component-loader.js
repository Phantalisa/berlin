document.addEventListener('DOMContentLoaded', function() {
    // Find all elements with data-include attribute
    const includes = document.querySelectorAll('[data-include]');
    
    // Process each include element
    includes.forEach(element => {
        const file = element.getAttribute('data-include');
        
        // Fetch the component file with explicit UTF-8 handling
        fetch(file, {
            headers: {
                'Accept': 'text/html; charset=utf-8'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load component: ${file}`);
                }
                // Explicitly handle as UTF-8 text
                return response.text();
            })
            .then(html => {
                // Insert the component content
                element.innerHTML = html;
                
                // Execute any scripts in the included content
                element.querySelectorAll('script').forEach(script => {
                    const newScript = document.createElement('script');
                    Array.from(script.attributes).forEach(attr => {
                        newScript.setAttribute(attr.name, attr.value);
                    });
                    newScript.textContent = script.textContent;
                    script.parentNode.replaceChild(newScript, script);
                });
            })
            .catch(error => {
                console.error('Error loading component:', error);
                element.innerHTML = `<p style="color: red">Error loading component: ${file}</p>`;
            });
    });
});
