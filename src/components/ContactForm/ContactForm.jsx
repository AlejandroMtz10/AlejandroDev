// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TbMailCancel } from "react-icons/tb";
import { BsSendCheck } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";

const ContactForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(formData.email)) {
        toast.warn("Please enter a valid email address.", {
            position: "bottom-right",
            theme: "dark",
            autoClose: 3000,
        });
        return;
        }

        setIsLoading(true);

        try {
            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: import.meta.env.VITE_RECEIVER_EMAIL,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            console.log("EmailJS result:", result);

            toast.success("Email sent successfully!", {
                position: "bottom-right",
                theme: "dark",
                autoClose: 3000,
            });

            setFormData({
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            console.error("EmailJS error:", error);
            toast.error("Failed to send email. Please try again.", {
                position: "bottom-right",
                theme: "dark",
                autoClose: 3000,
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleCancel = () => {
        setFormData({
        email: "",
        subject: "",
        message: "",
        });
        toast.info("Email canceled", {
        position: "bottom-right",
        theme: "dark",
        autoClose: 3000,
        });
        navigate("/");
    };

    return (
        <div className="flex justify-center items-center py-10">
        <div className="w-full max-w-4xl p-6 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold text-white text-center py-4 mb-6 flex items-center justify-center gap-2">
            <BiMailSend className="text-5xl" />
            Contact Me
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
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
                className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            {/* Subject */}
            <div>
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
                className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-cyan-600 font-semibold text-2xl mb-2">
                Message
                </label>
                <textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-4">
                <button
                type="button"
                onClick={handleCancel}
                className="flex items-center gap-1 px-4 py-2 bg-red-500 text-white text-lg font-bold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                <TbMailCancel />
                Cancel
                </button>
                <button
                type="submit"
                disabled={isLoading}
                className={`flex items-center gap-1 px-4 py-2 bg-green-500 text-white text-lg font-bold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 ${isLoading ? "opacity-60 cursor-not-allowed" : ""
                    }`}
                >
                <BsSendCheck />
                {isLoading ? "Sending..." : "Submit"}
                </button>
            </div>
            </form>
        </div>
        <ToastContainer />
        </div>
    );
};

export default ContactForm;
