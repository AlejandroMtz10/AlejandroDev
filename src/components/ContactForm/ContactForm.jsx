// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import 'react-toastify/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import { TbMailCancel } from "react-icons/tb";
import { BsSendCheck } from "react-icons/bs";

const ContactForm = () => {
    const navigate = useNavigate();
    const endPoint = 'https://magicloops.dev/api/loop/10ca4de0-27a5-454d-be55-9cfbaac61916/run';

    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Realizar la solicitud POST al endpoint
            const response = await fetch(endPoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Enviar los datos del formulario
            });
    
            if (response.ok) {
                const result = await response.json();
                console.log('Server answer:', result);
                toast.success("Email sent successfully!", {
                    position: 'bottom-right',
                    theme: 'dark',
                    autoClose: 3000,
                });
                // Restart the form
                setFormData({
                    email: "",
                    subject: "",
                    message: "",
                });

            } else {
                console.error('Error in sending:', response.statusText);
                toast.error("Failed to send email. Please try again.", {
                    position: 'bottom-right',
                    theme: 'dark',
                    autoClose: 3000,
                });
            }
        } catch (error) {
            console.error('Error when making the request:', error);
            toast.error("An unexpected error occurred.", {
                position: 'bottom-right',
                theme: 'dark',
                autoClose: 3000,
            });
        }
    };
    

    const handleCancel = () => {
        setFormData({
            email: "",
            subject: "",
            message: "",
        });
        toast.error("Email canceled", {
            position: 'bottom-right',
            theme:'dark',
            autoClose:'3000'
        });
        navigate("/"); //Show home
    };

    return (
        <div className="flex justify-center items-center py-10">
            <div className="w-full max-w-4xl p-6 bg-gray-800 rounded-lg shadow-md">
                <h2 className="text-4xl font-semibold text-white text-center py-4 mb-6">
                    Contact Me
                </h2>
                <form onSubmit={handleSubmit} className="py-3">
                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-cyan-600 font-semibold text-2xl mb-2">
                        Email Address
                        </label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        />
                    </div>

                    {/* Subject */}
                    <div className="mb-4">
                        <label htmlFor="subject" className="block text-cyan-600 font-semibold text-2xl mb-2">
                        Subject
                        </label>
                        <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Enter the subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        />
                    </div>

                    {/* Message */}
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-cyan-600 font-semibold text-2xl mb-2">
                        Message
                        </label>
                        <textarea
                        id="message"
                        name="message"
                        placeholder="Write your message here"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        required
                        className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent min-h-[100px]"
                        ></textarea>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 pt-4">
                        <button
                        type="button"
                        onClick={handleCancel}
                        className="flex items-center gap-1 px-4 py-2 bg-red-500 text-white text-lg font-bold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
                            <TbMailCancel />
                            Cancel
                        </button>
                        <button
                        type="submit"
                        className="flex items-center gap-1 px-4 py-2 bg-green-500 text-white text-lg font-bold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
                            <BsSendCheck />
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ContactForm;
