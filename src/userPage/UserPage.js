import React, { useEffect } from 'react';
import { getListUser } from '../api/adminApi';

function UserPage() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const users = [
        { id: 1, name: 'John Doe', phone: '123-456-7890', status: 'Active', coin: 100 },
        { id: 2, name: 'Jane Smith', phone: '987-654-3210', status: 'Inactive', coin: 200 }
    ];

    const handleViewInfo = (id) => {
        console.log(`Viewing info for user with id: ${id}`);
        // Logic để xem thông tin chi tiết của user
    };

    const handleViewCoin = (id) => {
        console.log(`Viewing coin for user with id: ${id}`);
        // Logic để xem số lượng coin của user
    };

    const handleViewStatus = (id) => {
        console.log(`Viewing status for user with id: ${id}`);
        // Logic để xem trạng thái của user
    };

    const handleGetListUser = async (e) => {
        // e.preventDefault();
        try {
            const input = {
                // phone: phone,
                // name: name,
                // email: email,
                // password: password,
                // password_confirmation: confirmPassword,
            }
            const response = await getListUser(input);

            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleGetListUser();
    }, []);

    return (
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
                            <button style={styles.infoButton} onClick={() => handleViewInfo(user.id)}>Thông tin</button>
                            <button style={styles.coinButton} onClick={() => handleViewCoin(user.id)}>Coin</button>
                            <button style={styles.statusButton} onClick={() => handleViewStatus(user.id)}>Trạng thái</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
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