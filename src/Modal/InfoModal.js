import React, { useState, useEffect } from "react";
// import { ToastContainer, toast } from 'react-toastify';
import { updateInfo } from "../api/adminApi";

const InfoModal = ({ show, onClose, userInfo }) => {
    // Kiểm tra nếu userInfo là null hoặc undefined
    const [name, setName] = useState(userInfo ? userInfo.name : "");
    const [email, setEmail] = useState(userInfo ? userInfo.email : "");
    const [phone, setPhone] = useState(userInfo ? userInfo.phone : "");
    const [rowId, setRowId] = useState(userInfo ? userInfo.id : "");

    useEffect(() => {
        if (userInfo) {
            setName(userInfo.name || "");
            setEmail(userInfo.email || "");
            setPhone(userInfo.phone || "");
            setRowId(userInfo.id || "");
        } else {
            // Khi thêm mới, reset lại các trường input
            setName("");
            setEmail("");
            setPhone("");
            setRowId("");
        }
    }, [userInfo]);

    if (!show || !userInfo) return null; // Kiểm tra nếu modal không hiển thị hoặc userInfo là null

    const handleUpdateInfo = async () => {
        try {
            const input = {
                name,
                email,
                phone,
            };

            const response = await updateInfo(rowId, input); // Cập nhật thông tin người dùng

            if (response) {
                console.log("update info success");
                onClose(); // Đóng modal sau khi lưu
            }
        } catch (error) {
            console.log(error);
        }
        // toast.success('Thành công');
    };

    // const handleCoin = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const input = {
    //             name: name,
    //             email: email,
    //             phone: phone,

    //         }
    //         const response = await updateInfo(input);

    //         console.log(response);
    //     } catch (error) {
    //         console.log(error);
    //     }

    // };

    return (
        <div style={styles.modalOverlay}>
            <div style={styles.modalContent}>
                <h3>Cập nhật thông tin tại đây</h3>
                <hr></hr>
                <div style={styles.inputContainer}>
                    <div>
                        <label>Tên:</label>
                        <span style={styles.nameIcon}>
                            <i className="fa-regular fa-user"></i>
                        </span>
                        <input
                            style={styles.inputName}
                            type="text"
                            placeholder={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <span style={styles.emailIcon}>
                            <i className="fa-regular fa-envelope"></i>
                        </span>
                        <input
                            style={styles.inputEmail}
                            type="email"
                            placeholder={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Số điện thoại:</label>
                        <span style={styles.phoneIcon}>
                            <i className="fa-solid fa-phone"></i>
                        </span>
                        <input
                            style={styles.inputPhone}
                            type="tel"
                            placeholder={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <div style={styles.button}>
                        <button style={styles.buttonEdit} onClick={handleUpdateInfo}>
                            Sửa
                        </button>
                        <button style={styles.buttonCancel} onClick={onClose}>
                            Hủy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    inputContainer: {
        position: "relative",
        paddingLeft: "15px",
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    nameIcon: {
        position: "absolute",
        paddingTop: "12px",
        paddingLeft: "15px",
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    emailIcon: {
        position: "absolute",
        paddingTop: "12px",
        paddingLeft: "15px",
    },

    phoneIcon: {
        position: "absolute",
        paddingTop: "12px",
        paddingLeft: "15px",
    },

    inputName: {
        width: "80%",
        height: "40px",
        marginBottom: "15px",
        paddingLeft: "50px",
    },

    inputEmail: {
        width: "80%",
        height: "40px",
        marginBottom: "15px",
        paddingLeft: "50px",
    },

    inputPhone: {
        width: "80%",
        height: "40px",
        marginBottom: "15px",
        paddingLeft: "50px",
    },

    modalOverlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    modalContent: {
        backgroundColor: "#fff",
        color: "black",
        padding: "20px",
        borderRadius: "8px",
        width: "340px",
    },

    button: {
        display: "flex",
    },

    buttonEdit: {
        width: "70px",
        marginRight: "10px",
        backgroundColor: "#6282ff",
    },

    buttonCancel: {
        width: "70px",
        backgroundColor: "#f17e69",
    },
};

export default InfoModal;
