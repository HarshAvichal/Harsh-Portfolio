import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import toast from 'react-hot-toast';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  transition: transform 0.1s, box-shadow 0.1s, filter 0.1s;
  cursor: pointer;

  &:active {
    transform: scale(0.97);
    filter: brightness(0.92);
    box-shadow: 0 2px 8px rgba(133, 76, 230, 0.15);
  }
`



const Contact = () => {

  //hooks
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      from_email: form.current.from_email.value.trim(),
      from_name: form.current.from_name.value.trim(),
      subject: form.current.subject.value.trim(),
      message: form.current.message.value.trim(),
    };

    // Validation: check if any field is empty
    if (!data.from_email || !data.from_name || !data.subject || !data.message) {
      if (!data.from_email) toast.error('Please enter your email address.');
      else if (!data.from_name) toast.error('Please enter your name.');
      else if (!data.subject) toast.error('Please enter a subject.');
      else if (!data.message) toast.error('Please enter your message.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.from_email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    // Name validation (at least 2 characters)
    if (data.from_name.length < 2) {
      toast.error('Please enter a valid name (at least 2 characters).');
      return;
    }

    // Subject validation (at least 3 characters)
    if (data.subject.length < 3) {
      toast.error('Please enter a subject (at least 3 characters).');
      return;
    }

    // Message validation (at least 10 characters)
    if (data.message.length < 10) {
      toast.error('Please enter a message (at least 10 characters).');
      return;
    }

    // Show loading toast
    const loadingToast = toast.loading('Sending your message...');

    fetch('https://harsh-portfolio-bh2y.onrender.com/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        // Dismiss loading toast
        toast.dismiss(loadingToast);
        
        if (response.ok) {
          toast.success('Email sent successfully! I\'ll get back to you soon.');
          form.current.reset();
        } else {
          const result = await response.json();
          toast.error(result.message || 'Failed to send email. Please try again.');
        }
      })
      .catch(() => {
        // Dismiss loading toast
        toast.dismiss(loadingToast);
        toast.error('Failed to send email. Please check your connection and try again.');
      });
  }

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" rows="4" name="message" />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
      </Wrapper>
    </Container>
  )
}

export default Contact