import './ThanhMenu.scss'
import { ArrowDropDownOutlined, PersonOutline, SearchOutlined, ShoppingCartOutlined, WidgetsOutlined } from '@mui/icons-material'
import { useState } from 'react'
import { Badge } from '@mui/material'
import { Link } from 'react-router-dom'
const ThanhMenu = () => {
    const [isDangNhap, setIsDangNhap] = useState(false)

    return (
        <div className="ThanhMenu">
            <div className="ThanhMenu__trai">
                <Link to="/" className='ThanhMenu__trai__link'>
                    <div className="ThanhMenu__trai--logo">
                        <img src={process.env.PUBLIC_URL + 'Logo.png'} alt="" />
                        <div className="ThanhMenu__trai--ten">
                            <h1>Bookoe</h1>
                            <p>Book Store 5 Chú Hề</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="ThanhMenu__giua">
                <div className="ThanhMenu__giua--menu">
                    <WidgetsOutlined className='ThanhMenu__giua--menu--icon' />
                    <p>Menus</p>
                    <ArrowDropDownOutlined className='ThanhMenu__giua--menu--icon' />
                    <div className="ThanhMenu__giua--menu--thanhphan">
                        <Link to="/">Trang chủ</Link>
                        <Link to="/theloai">Thể loại</Link>
                        <Link to="/giohang">Giỏ hàng</Link>
                        <Link to="/trangcanhan">Trang cá nhân</Link>
                    </div>
                </div>
                <div className="ThanhMenu__giua--timkiem">
                    <input type="text" placeholder="Tìm kiếm" className='ThanhMenu__giua--timkiem--input' />
                </div>
                <div className="ThanhMenu__giua--icon--timkiem">
                    <SearchOutlined className='ThanhMenu__giua--icon--timkiem--icon' />
                </div>
            </div>

            <div className="ThanhMenu__phai">
                {isDangNhap ? (
                    <>

                        <Link to="/giohang">

                            <div className="ThanhMenu__phai--giohang">
                                <Badge badgeContent={3} color="primary" max={99}>
                                    <ShoppingCartOutlined />
                                </Badge>
                            </div>
                        </Link>
                        <Link to="/trangcanhan">
                            <div className="ThanhMenu__phai--avatar">
                                <img src={process.env.PUBLIC_URL + "/Logo.png"} alt="" />
                            </div>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/dangnhap" className='ThanhMenu__phai--dangky--icon'>

                            <div className="ThanhMenu__phai--dangnhap">

                                <Link to="/dangnhap" className='ThanhMenu__phai--dangnhap__link'>Đăng nhập</Link>

                            </div>
                        </Link>
                        <Link to="/dangky" className='ThanhMenu__phai--dangky--icon'>

                            <div className="ThanhMenu__phai--dangky">
                                <PersonOutline className='ThanhMenu__phai--dangky--icon' />
                                <Link to="/dangky" className='ThanhMenu__phai--dangky__link'>Đăng ký</Link>
                            </div>
                        </Link>
                    </>
                )}
            </div>
        </div>
    )
}

export default ThanhMenu