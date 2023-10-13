// import {FC, memo, useCallback, useMemo, useState} from 'react';

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

// const ContactForm: FC = memo(() => {
//   const defaultData = useMemo(
//     () => ({
//       name: '',
//       email: '',
//       message: '',
//     }),
//     [],
//   );

//   const [data, setData] = useState<FormData>(defaultData);

//   const onChange = useCallback(
//     <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
//       const {name, value} = event.target;

//       const fieldData: Partial<FormData> = {[name]: value};

//       setData({...data, ...fieldData});
//     },
//     [data],
//   );

//   /**const handleSendMessage = useCallback(
//     async (event: React.FormEvent<HTMLFormElement>) => {
//       event.preventDefault();
//       /**
//        * This is a good starting point to wire up your form submission logic
//        * *
//       console.log('Data to send: ', data);
//     },
//     [data],
//   );*/


//   const handleSendMessage = useCallback(
//     async (event: React.FormEvent<HTMLFormElement>) => {
//       event.preventDefault();
//       //  const link = document.createElement('a');
//       //  link.href = 'https://akshayakhilesh14.wixsite.com/contact-akshay'; // Replace 'https://example.com' with the target website URL
//       //  link.target = '_blank'; // Opens the URL in a new tab/window (optional)
//       //  link.click();
//       // /**
//       //  * This is a good starting point to wire up your form submission logic
//       //  * */
//       // console.log('Data to send: ', data);

//       try {
//         console.log("reached here -1")
//         const response = await fetch('http://localhost:3000/send-email', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(data),
//         });

//         if (response.ok) {
//           console.log('Email sent successfully');
//           setData(defaultData); // Clear form after successful submission
//         } else {
//           console.error('Failed to send email');
//         }
//       } catch (error) {
//         console.error('Error sending email:', error);
//       }
//     },
//     [data],
//   );

//   const inputClasses =
//     'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

//   return (
//     <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
//       <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" />
//       <input
//         autoComplete="email"
//         className={inputClasses}
//         name="email"
//         onChange={onChange}
//         placeholder="Email"
//         required
//         type="email"
//       />
//       <textarea
//         className={inputClasses}
//         maxLength={250}
//         name="message"
//         onChange={onChange}
//         placeholder="Message"
//         required
//         rows={6}
//       />
//       <button
//         aria-label="Submit contact form"
//         className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
//         type="submit">
//         Contact Me
       
//       </button>


//     </form>
//   );
// });

// ContactForm.displayName = 'ContactForm';
// export default ContactForm;


// NOTE: THIS WORKS

// import React from 'react';

// function ContactForm() {
//   return (
//     <div className="grid min-h-[320px] grid-cols-1 gap-y-4">
//       <input className="input" name="name" placeholder="Name" required type="text" />
//       <input autoComplete="email" className="input" name="email" placeholder="Email" required type="email" />
//       <a
//         className="button"
//         href="mailto:adiakhilesh14@gmail.com?subject=Contact%20Form%20Submission&body=Hello,%20I%20have%20a%20message%20for%20you."
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="Submit contact form"
//       >
//         Contact Me
//       </a>
//     </div>
//   );
// }

// export default ContactForm;

// NOTE: THIS ALSO WORKS
import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const subject = `${name} : Contact Form Submission`;

  const mailtoLink = `mailto:Akshay14806@gmail.com?subject=${encodeURIComponent(subject)}
                                                  &body=${encodeURIComponent(message)}`;

  return (
    <div className="grid min-h-[320px] grid-cols-1 gap-y-4">
      <input 
        className="input" 
        name="name" 
        placeholder="Name" 
        required type="text" 
        value={name} 
        onChange={handleNameChange} />

      <input autoComplete="email" className="input" name="email" placeholder="Email" required type="email" />
      
      <textarea
        className="input"
        maxLength={250}
        name="message"
        placeholder="Message"
        required
        rows={6}
        value={message}
        onChange={handleMessageChange}
      />
      {/* <a
        className="button font-bold text-white rounded-full"
        style={{ backgroundColor: 'gray', padding: '4px 12px', fontSize: '14px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.3s, color 0.3s'}}
        href={mailtoLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Submit contact form"
      >
        Contact Me
      </a> */}

      <a
        className="button font-bold text-white rounded-full"
        style={{
          backgroundColor: 'Blue',
          padding: '4px 12px',
          fontSize: '20px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.3s, color 0.3s',
        }}
        href={mailtoLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Submit contact form"
      >
        Contact Me
      </a>
      <style>
        {`
          .button:hover {
            background-color: white;
            color: red;
          }
        `}
      </style>

    </div>
  );
}

export default ContactForm;
