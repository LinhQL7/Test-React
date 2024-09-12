import React, { useState } from 'react';
import { updateStatus } from '../api/adminApi';
function StatusModal({ isOpen, onClose, onSubmit }) {
    const [status, setStatus] = useState('hoạt động'); // state để lưu trạng thái

    // Xử lý thay đổi trạng thái
    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };

    // Xử lý khi submit
    const handleStatus = () => {
        onSubmit({ status }); // Gửi dữ liệu lên parent component
        onClose(); // Đóng modal
    };

    if (!isOpen) return null; // Không hiển thị modal nếu isOpen là false

    const handleUpdateStatus = async () => {
        try {
            const input = {
                status,
            };

            const response = await updateStatus(input); // Cập nhật thông tin người dùng

            if (response) {
                console.log("update status success");

                onClose(); // Đóng modal sau khi lưu
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={styles.modalOverlay}>
            <div style={styles.modalContent}>
                <div style={styles.modalHeader}>
                    <h3 style={styles.modalTitle}>Cập nhật trạng thái tại đây</h3>
                    {/* <button className="closeButton" onClick={onClose}>
            &times;
          </button> */}
                </div>
                <div style={styles.modalBody}>
                    <div style={styles.formGroup}>
                        <label>Trạng thái</label>
                        <select style={styles.formControl} value={status} onChange={handleStatusChange}>
                            <option value="hoạt động">Hoạt động</option>
                            <option value="ngưng hoạt động">Ngưng hoạt động</option>
                        </select>
                    </div>
                </div>
                <div style={styles.modalFooter}>
                    <button style={styles.buttonEdit} onClick={handleUpdateStatus}>
                        Sửa
                    </button>
                    <button style={styles.buttonCancel} onClick={onClose}>
                        Hủy
                    </button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    modalTitle: {
        color: 'black',
    },

    modalOverlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalContent: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        width: '340px',
        maxWidth: '90%',
    },

    modalHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    //   closeButton: {
    //     background: 'none',
    //     border: 'none',
    //     fontSize: '24px',
    //     cursor: 'pointer',
    //   },

    modalBody: {
        marginTop: '10px',
    },

    modalFooter: {
        display: 'flex',
        justifyContent: 'flex-start',
    },

    formControl: {
        width: '100%',
        height: '40px',
        marginBottom: '15px',
    },

    buttonEdit: {
        width: '70px',
        marginRight: '10px',
        backgroundColor: '#6282ff',
    },

    buttonCancel: {
        width: '70px',
        backgroundColor: '#f17e69',
    },
}

export default StatusModal;