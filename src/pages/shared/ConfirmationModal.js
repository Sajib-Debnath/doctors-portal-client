import React from 'react';

const ConfirmationModal = ({ title, message, deletingDoctor, closeModal, deleteDoctor }) => {
    return (
        <div>
            <div>
                <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">{title}</h3>
                        <p className="py-4">{message}</p>
                        <div className="modal-action">
                            <label
                                onClick={() => deleteDoctor(deletingDoctor)}
                                htmlFor="confirmation-modal"
                                className="btn btn-primary">Delete</label>
                            <button onClick={closeModal} className='btn btn-outline'>cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;