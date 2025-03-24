document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');

    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user' : 'ai'}`;
        messageDiv.innerHTML = `<div class="message-content">${message}</div>`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function processUserInput(input) {
        const lowercaseInput = input.toLowerCase();
        
        if (lowercaseInput === "help") {
            return generateHelpMessage();
        }

        // Updated info command handling
        if (lowercaseInput.startsWith("info ")) {
            const parts = lowercaseInput.split(" ");
            const weapon = parts[1];
            const build = parts[2];
            return getWeaponInfo(weapon, build);
        }

        let response = "I couldn't find a specific build for that request. Try asking about specific weapons and build types!";

        const weapons = Object.keys(loadoutData.builds);
        const weapon = weapons.find(w => lowercaseInput.includes(w));

        if (weapon) {
            const buildTypes = Object.keys(loadoutData.builds[weapon]);
            const buildType = buildTypes.find(type => 
                loadoutData.keywords[type].some(keyword => 
                    lowercaseInput.includes(keyword)
                )
            );

            if (buildType) {
                const build = loadoutData.builds[weapon][buildType];
                response = `
                    <h3>${build.name}</h3>
                    <p>${build.description}</p>
                    <br>
                    <strong>Attachments:</strong>
                    <ul>
                        ${build.attachments.map(att => `<li>${att}</li>`).join('')}
                    </ul>
                    ${build.perks ? `
                    <br>
                    <strong>Recommended Perks:</strong>
                    <ul>
                        <li>Perk 1: ${build.perks.perk1}</li>
                        <li>Perk 2: ${build.perks.perk2}</li>
                        <li>Perk 3: ${build.perks.perk3}</li>
                        <li>Wildcard: ${build.perks.wildcard}</li>
                    </ul>
                    ` : ''}
                `;
            }
        }

        return response;
    }

    function generateHelpMessage() {
        const help = loadoutData.helpData;
        return `
            <h3>Available Commands:</h3>
            <ul>
                ${help.commands.map(cmd => `<li>${cmd}</li>`).join('')}
            </ul>
            <br>
            <h3>Available Weapons:</h3>
            ${Object.entries(help.weapons).map(([category, weapons]) => `
                <strong>${category}:</strong>
                <ul>
                    ${weapons.map(weapon => `<li>${weapon}</li>`).join('')}
                </ul>
            `).join('')}
            <br>
            <h3>Examples:</h3>
            <ul>
                ${help.examples.map(ex => `<li>${ex}</li>`).join('')}
            </ul>
        `;
    }

    function handleUserInput() {
        const input = userInput.value.trim();
        if (!input) return;

        addMessage(input, true);
        const response = processUserInput(input);
        setTimeout(() => addMessage(response), 500);

        userInput.value = '';
    }

    sendBtn.addEventListener('click', handleUserInput);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleUserInput();
    });
});
