var aws = require('aws-sdk');
var ses = new aws.SES({ region: 'ap-south-1' });

exports.handler = async (event, context) => {
    // Extract subject, body, and toAddresses from the POST request
    const subject = event.subject || "Default Subject";
    const body = event.body || "Default Body";
    const toAddresses = event.toAddresses || ["1ms21cy062@msrit.edu"];  // Default email address if none provided
    
    try {
        await sendMail(subject, body, toAddresses);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Email sent successfully" }),
        };
    } catch (error) {
        console.error("Error sending email:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Failed to send email", error: error.message }),
        };
    }
};

async function sendMail(subject, data, toAddresses) {
    const emailParams = {
        Destination: {
            ToAddresses: toAddresses, 
        },
        Message: {
            Body: {
                Text: { Data: data },
            },
            Subject: { Data: subject },
        },
        Source: "Fintervue.dev@gmail.com",
    };

    let response = await ses.sendEmail(emailParams).promise();
    console.log("Success:", response);
    return response;
}
