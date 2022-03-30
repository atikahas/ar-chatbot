/* The chat const defines the Peekobot conversation.
 * 
 * It should be an object with numerical property names, and each property is an entry
 * in the conversation.
 * 
 * A conversation entry should have:
 *  - A "text" property that is what the chatbot says at this point in the conversation
 *  - Either:
 *     - A "next" property, which defines the next chat entry by stating a numerical key
 *       of the chat object and is used when the chatbot needs to say several things
 *       without input from the user
 *    OR
 *     - An "options" property that defines the choices a user can take this is an
 *       array of option objects
 * 
 * An options object should have:
 *  - a "text" property that is the label for the user's choice
 *  AND EITHER
 *  - a "next" property that defines the next chat entry by stating a numerical key of
 *    the chat object and is used when the user selects this option
 *  OR
 *  - a "url" property that defines a link for the user to be taken to
 * 
 * A simple example chat object is:
 * const chat = {
 *     1: {
 *         text: 'Good morning sir',
 *         next: 2
 *     },
 *     2: {
 *         text: 'Would you like tea or coffee with your breakfast?',
 *         options: [
 *             {
 *                 text: 'Tea',
 *                 next: 3
 *             },
 *             {
 *                 text: 'Coffee',
 *                 next: 4
 *             }
 *         ]
 *     },
 *     3: {
 *         text: 'Splendid - a fine drink if I do say so myself.'
 *     },
 *     4: {
 *         text: 'As you wish, sir'
 *     }
 * }
 */

const chat = {
    1: {
        text: 'Hi! Welcome to Aman Rimba.',
        next: 2
    },

    2: {
        text: 'What brings you here today?',
        options: [
            {
                text: "I want to know more about Aman Rimba Private Estate.",
                next: 3
            },
            {
                text: "I have a question.",
                next: 4
            }
        ]
    },

    3: {
        text: 'What do you want to know about Aman Rimba Private Estate?',
        options: [
            {
                text: "What is the rate?",
                next: 5
            },
            {
                text: "Is there any package available?",
                next: 7
            },
            {
                text: "What are the facilities provided?",
                next: 8
            },
            {
                text: "Aman Rimba suitable for?",
                next: 9
            }
        ]
    },

    4: {
        text: 'What is your question?',
        options: [
            {
                text: "How do you ensure your guest safety?",
                next: 10
            },
            {
                text: "Am I allowed to book villa individually?",
                next: 11
            },
            {
                text: "Is there any other option for food?",
                next: 12
            },
            {
                text: "What is maximum guests capacity?",
                next: 13
            },
            {
                text: "Am i allowed to make an event there?",
                next: 14
            }
        ]
    },

    5: {
        text: 'Starting rates for 2 days 1 night is RMxxxx. The actual rate and total cost will be shown in our Quotation which may include additional request from customer.',
        options: [
            {
                text: "Okay, thank you.",
                next: 21
            },
            {
                text: "I want to know more.",
                next: 3
            },
            {
                text: "I need your further assistance.",
                next: 20
            }
        ]
    },

    20: {
        text: 'Please contact us for further information. Business hours: 9:00 AM - 6:00 PM',
        options: [
            {
                text: "WhatsApp (Pn Sall)",
                url: "https://wa.me/60105662757"
            }
        ]
    },

    21: {
        text: "You're welcome"
    }
};
