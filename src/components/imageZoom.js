import React, { useState } from "react";

export default function ImageZoom({ children, className }) {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle modal visibility
    const toggleModal = () => setIsOpen(!isOpen);

    // Handle background click to close modal
    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            toggleModal();
        }
    };

    return (
        <div className={className}>
        {/* The image element as a trigger */}
            <div onClick={toggleModal} className={`cursor-pointer`}>
                {children} {/* This will render the passed image */}
            </div>

            {/* Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    onClick={handleBackgroundClick} // Close on background click
                >
                    <button
                        onClick={toggleModal}
                        className="absolute top-4 right-4"
                    >
                        <img src="/x-symbol.svg" alt="Close" className="w-6 h-6" />
                    </button>
                    <div className="relative w-5/6 sm:w-1/2">
                        <div className="flex justify-center">
                            {/* Image displayed in the modal */}
                            <img
                                src={children.props.src} // Assuming the child is an <img> element
                                alt="Modal content"
                                className="max-w-full max-h-full"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
