function buildContactNotificationTemplate(enquiry) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body {
            font-family: Arial, Helvetica, sans-serif;
            line-height: 1.6;
            color: #333;
          }

          .container {
            max-width: 650px;
            margin: auto;
            padding: 20px;
            border: 1px solid #ddd;
          }

          h2 {
            color: #0d6efd;
          }

          table {
            width: 100%;
            border-collapse: collapse;
          }

          td {
            padding: 10px;
            border: 1px solid #ddd;
          }

          td:first-child {
            font-weight: bold;
            width: 180px;
          }
        </style>
      </head>

      <body>

        <div class="container">

          <h2>New Contact Enquiry</h2>

          <table>

            <tr>
              <td>Name</td>
              <td>${enquiry.name}</td>
            </tr>

            <tr>
              <td>Email</td>
              <td>${enquiry.email}</td>
            </tr>

            <tr>
              <td>Phone</td>
              <td>${enquiry.phone}</td>
            </tr>

            <tr>
              <td>Subject</td>
              <td>${enquiry.subject}</td>
            </tr>

            <tr>
              <td>Message</td>
              <td>${enquiry.message}</td>
            </tr>

          </table>

        </div>

      </body>
    </html>
  `;
}

module.exports = {
  buildContactNotificationTemplate,
};