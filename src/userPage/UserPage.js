import React, { useState, useEffect } from 'react';
import { getListUser, updateInfo, updateCoin, updateStatus } from '../api/adminApi';
import InfoModal from '../Modal/InfoModal';
import CoinModal from '../Modal/CoinModal';
import StatusModal from '../Modal/StatusModal';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function UserPage() {
    const [users, setUsers] = useState([]);
    const [showInfo, setShowInfo] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isCoinModalOpen, setIsCoinModalOpen] = useState(false);
    const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);

    const handleInfo = (user) => {
        setSelectedUser(user); // Lưu thông tin người dùng được chọn
        setShowInfo(true); // Hiển thị modal
        //     toast.success('Xem thông tin thành công!');
        //    }catch (error) {
        //         toast.error('Xem thông tin thất bại!');
        //     }
    };

    const handleCoin = (user) => {
        setSelectedUser(user); // Lưu id user để cập nhật
        setIsCoinModalOpen(true); // Mở modal
        //     toast.success('Xem coin thành công!');
        //   }catch (error) {
        //         toast.error('Xem coin thất bại!');
        //     }
    };

    const handleStatus = (user) => {
        setSelectedUser(user); // Lưu id user để cập nhật
        setIsStatusModalOpen(true); // Mở modal
        //     toast.success('Cập nhật trạng thái thành công!');
        // }catch (error) {
        //         toast.error('Cập nhật trạng thái thất bại!');
        //     }
    };

    const handleGetListUser = async () => {
        try {
            const response = await getListUser();
            setUsers(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleGetListUser();
    }, []);

    return (
        <div>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Tên</th>
                        <th style={styles.th}>Số điện thoại</th>
                        <th style={styles.th}>Trạng thái</th>
                        <th style={styles.th}>Coin</th>
                        <th style={styles.th}>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} style={styles.tr}>
                            <td style={styles.td}>{user.name}</td>
                            <td style={styles.td}>{user.phone}</td>
                            <td style={styles.td}>{user.status}</td>
                            <td style={styles.td}>{user.coin}</td>
                            <td style={styles.tds}>
                                <button style={styles.infoButton} onClick={() => handleInfo(user)}>Thông tin</button>
                                <button style={styles.coinButton} onClick={() => handleCoin(user)}>Coin</button>
                                <button style={styles.statusButton} onClick={() => handleStatus(user)}>Trạng thái</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal thông tin */}
            <InfoModal
                show={showInfo}
                onClose={() => setShowInfo(false)}
                userInfo={selectedUser}
            />

            {/* Modal cập nhật coin */}
            <CoinModal
                isOpen={isCoinModalOpen}
                onClose={() => setIsCoinModalOpen(false)}
                userInfo={selectedUser}
            />

            {/* Modal cập nhật trạng thái */}
            <StatusModal
                isOpen={isStatusModalOpen}
                onClose={() => setIsStatusModalOpen(false)}
            />

            {/* Container để hiển thị thông báo */}
            {/* <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} /> */}
        </div>

    );

};
const styles = {
    // tableContainer: {
    //     width: '100%',
    //     margin: '50px auto',
    //     textAlign: 'center',
    // },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    tr: {
        backgroundColor: 'white',
        color: 'black',
    },
    th: {
        padding: '10px',
        backgroundColor: 'white',
        color: 'black',
    },
    td: {
        padding: '10px',
        borderBottom: '1px solid #ddd',
        backgroundColor: 'white',
        color: 'black',
    },
    tds: {
        display: 'flex',
        marginTop: '20px',

    },
    infoButton: {
        padding: '5px 10px',
        backgroundColor: '#eef2ff',
        color: '#92a7f4',
        border: 'none',
        borderRadius: '5px',
        marginRight: '5px',
        cursor: 'pointer',
        paddingRight: '15px',
        textWrap: 'nowrap',
    },
    coinButton: {
        padding: '5px 10px',
        backgroundColor: '#fef4e5',
        color: '#f8d48c',
        border: 'none',
        borderRadius: '5px',
        marginRight: '5px',
        cursor: 'pointer',
        paddingRight: '25px',
        textWrap: 'nowrap',
    },
    statusButton: {
        padding: '5px 10px',
        backgroundColor: '#e8fffa',
        color: '#63f4ce',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        paddingRight: '15px',
        textWrap: 'nowrap',
    },
};


export default UserPage