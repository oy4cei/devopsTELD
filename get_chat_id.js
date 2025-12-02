import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const botToken = process.env.TELEGRAM_BOT_TOKEN;

if (!botToken) {
    console.error('Error: TELEGRAM_BOT_TOKEN is missing in .env file');
    process.exit(1);
}

async function getUpdates() {
    try {
        const response = await axios.get(`https://api.telegram.org/bot${botToken}/getUpdates`);
        const updates = response.data.result;

        if (updates.length === 0) {
            console.log('No updates found. Please send a message to your bot in the group first.');
            return;
        }

        console.log('\n--- Recent Chat IDs ---');
        updates.forEach(update => {
            const message = update.message || update.my_chat_member;
            if (message && message.chat) {
                console.log(`Chat Name: ${message.chat.title || message.chat.first_name} (${message.chat.type})`);
                console.log(`Chat ID: ${message.chat.id}`);
                console.log('-----------------------');
            }
        });
        console.log('\nUse the Chat ID above (starts with -100... for groups) as your TELEGRAM_CHAT_ID in Railway.');

    } catch (error) {
        console.error('Error fetching updates:', error.message);
    }
}

getUpdates();
