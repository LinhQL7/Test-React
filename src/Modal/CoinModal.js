import React, { useEffect, useState } from 'react';
import { updateCoin } from '../api/adminApi';

function CoinModal({ isOpen, onClose, userInfo }) {
    console.log(userInfo);
    const [coin, setCoin] = useState(0); // state để lưu giá trị coin
    const [actionType, setActionType] = useState('tăng'); // state để lưu loại hành động
    const [rowId, setRowId] = useState(userInfo ? userInfo.id : "");

    // Xử lý thay đổi số coin
    const handleCoinChange = (e) => {
        setCoin(e.target.value);

    };

    // Xử lý thay đổi loại hành động
    const handleActionTypeChange = (e) => {
        setActionType(e.target.value);
    };

    useEffect(() => {
        if (userInfo) {
            setRowId(userInfo.id || "");
        } else {
            setRowId("");
        }
    }, [userInfo]);

    // Xử lý khi submit
    const handleCoin = () => {
        // onSubmit({ coin, actionType }); // Gửi dữ liệu lên parent component
        onClose(); // Đóng modal
    };

    if (!isOpen) return null; // Không hiển thị modal nếu isOpen là false

    const handleUpdateCoin = async () => {
        try {
            const input = {
                coin,
                actionType,
            };

            const response = await updateCoin(rowId, input); // Cập nhật thông tin người dùng

            if (response) {
                console.log("update coin success");
                // onSubmit({ coin, actionType });
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
                    <h3 style={styles.modalTitle}>Cập nhật coin tại đây</h3>
                    {/* <button style={styles.closeButton} onClick={onClose}>
                        &times;
                    </button> */}
                </div>
                <div style={styles.modalBody}>
                    <div style={styles.formGroup}>
                        <label>Coin</label>
                        <input
                            type="number"
                            style={styles.formControl}
                            value={coin}
                            onChange={handleCoinChange}
                            placeholder="000.00"
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label>Loại</label>
                        <select style={styles.typeCoin} value={actionType} onChange={handleActionTypeChange}>
                            <option value="tăng">Tăng</option>
                            <option value="giảm">Giảm</option>
                        </select>
                    </div>
                </div>
                <div style={styles.modalFooter}>
                    <button style={styles.buttonEdit} onClick={handleUpdateCoin}>
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
        alignItems: 'center'
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
        alignItems: 'cente',
    },

    formControl: {
        width: '80%',
        height: '40px',
        marginBottom: '15px',
        paddingLeft: '50px',
    },

    // formGroup: {
    //     width: '90%',
    //     height: '40px',
    //     marginBottom: '15px',
    // },

    typeCoin: {
        width: '97%',
        height: '40px',
        marginBottom: '15px',
        paddingLeft: '10px',


    },

    // closeButton: {
    //     background: 'none',
    //     border: 'none',
    //     fontSize: '24px',
    //     cursor: 'pointer',
    // },

    modalBody: {
        marginTop: '10px',
    },

    modalFooter: {
        display: 'flex',
        justifyContent: 'flex-start',
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


export default CoinModal;
