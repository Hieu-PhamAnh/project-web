import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined, Circle, Star } from '@mui/icons-material'
import './NhieuNguoiMua.scss'
import { nhieuNguoiMua } from '../../data/nhieuNguoiMua'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const NhieuNguoiMua = () => {
    const [nhieuNguoiMuaSlide, setNhieuNguoiMuaSlide] = useState(0)
    const nutTienNhieuNguoiMuaSlide = () => {
        if (nhieuNguoiMuaSlide < nhieuNguoiMua.length - 6) {
            setNhieuNguoiMuaSlide(nhieuNguoiMuaSlide + 1)
        }
    }
    const nutLuiNhieuNguoiMuaSlide = () => {
        if (nhieuNguoiMuaSlide > 0) {
            setNhieuNguoiMuaSlide(nhieuNguoiMuaSlide - 1)
        }
    }
    return (
        <div className="NhieuNguoiMua">
            <div className="NhieuNguoiMua__title">
                <h3>Nhiều người mua</h3>
                <div className="NhieuNguoiMua__title__nut">
                    <ArrowBackIosNewOutlined className='NhieuNguoiMua__title__nut__icon' onClick={nutLuiNhieuNguoiMuaSlide} />
                    {
                        [0, 1, 2, 3].map(item => {
                            return (
                                <Circle key={item} className={item === nhieuNguoiMuaSlide ? "dot active" : "dot"} />
                            )
                        })
                    }
                    <ArrowForwardIosOutlined className='NhieuNguoiMua__title__nut__icon' onClick={nutTienNhieuNguoiMuaSlide} />
                </div>
            </div>
            <div className="NhieuNguoiMua__items">

                {
                    nhieuNguoiMua.map((item, index) => {
                        return (
                            <div className={(Math.abs(index - nhieuNguoiMuaSlide) < 6 && index >= nhieuNguoiMuaSlide) ? "NhieuNguoiMua__sach__item active" : "NhieuNguoiMua__sach__item"
                            }
                                key={index}
                            >
                                <Link to="/chitiet" style={{
                                    textDecoration: 'none',
                                }}>

                                    <div className="NhieuNguoiMua__sach__item__hinhAnh">
                                        <img src={item.imgUrl || process.env.PUBLIC_URL + item.imgUrl} alt="" />
                                    </div>
                                    <div className="NhieuNguoiMua__sach__item__thongTin">
                                        <h3>{item.name}</h3>
                                        <h4>{`${item.tags[0]},${item.tags[1]},${item.tags[2]}`}</h4>
                                    </div>
                                    <div className="NhieuNguoiMua__sach__item__duoi">
                                        <h4>Bán:{item.soLuong} <Star /></h4>
                                        <h5>{item.price} VNĐ</h5>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default NhieuNguoiMua