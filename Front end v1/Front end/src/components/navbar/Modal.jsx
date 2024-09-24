import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6 w-80 relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-neutral-500 dark:text-neutral-300"
                >
                    <FaTimes className="text-xl" />
                </button>
                <h2 className="text-lg font-semibold mb-4">Confirm Logout</h2>
                <p className="mb-4">Are you sure you want to logout?</p>
                <div className="flex justify-end gap-4">
                    <button
                        onClick={onConfirm}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
                    >
                        Logout
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
