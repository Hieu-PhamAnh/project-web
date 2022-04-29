import './GioHangChiTiet.scss'
import { gioHang } from '../../data/gioHang'
import { Link } from 'react-router-dom'
import { ShoppingCartOutlined, Star } from '@mui/icons-material'
function doiSangPhanNghin(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
const GioHangChiTiet = () => {
    return (
        <div className="GioHangChiTiet">
            <div className="GioHangChiTiet__trai">
                <div className="GioHangChiTiet__trai__danhsach">
                    <div className="GioHangChiTiet__trai__danhsach__title">
                        <h1>Danh Sách Sách</h1>
                    </div>
                    <div className="GioHangChiTiet__trai__danhsach__items">
                        {
                            gioHang.map((item, index) => {
                                return (

                                    <div className="GioHangChiTiet__trai__danhsach__item" key={index}>
                                        <Link to={`/chitiet`} className="GioHangChiTiet__trai__danhsach__item__link">
                                            <div className="GioHangChiTiet__trai__danhsach__item__hinhanh">
                                                <img src={item.imgUrl} alt="" />
                                            </div>
                                        </Link>
                                        <div className="GioHangChiTiet__trai__danhsach__item__thongtin">
                                            <div className="GioHangChiTiet__trai__danhsach__item__thongtin__tren">
                                                <div className="GioHangChiTiet__trai__danhsach__item__thongtin__title">
                                                    <Link to={`/chitiet`} className="GioHangChiTiet__trai__danhsach__item__link">
                                                        <h1>{item.name}</h1>
                                                    </Link>
                                                    <div className="GioHangChiTiet__trai__danhsach__item__theloai">
                                                        <p>{`${item.tags[0]},${item.tags[1]},${item.tags[2]}`}</p>
                                                    </div>
                                                </div>
                                                <div className="GioHangChiTiet__trai__danhsach__item__thongtin__phai">
                                                    <div className="GioHangChiTiet__trai__danhsach__item__danhgia">
                                                        {
                                                            [1, 2, 3, 4, 5].map((item1, index) => {
                                                                return (
                                                                    <Star className={item1 <= item.soSao ? "GioHangChiTiet__trai__danhsach__item__danhgia__sao active" : "GioHangChiTiet__trai__danhsach__item__danhgia__sao"} key={index} />
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                    <p>{item.soLuong} lượt mua</p>

                                                </div>
                                            </div>
                                            <div className="GioHangChiTiet__trai__danhsach__item__thongtin__desc">
                                                <p>{item.desc}</p>
                                            </div>
                                            <div className="GioHangChiTiet__trai__danhsach__item__thongtin__gia">
                                                <p>{doiSangPhanNghin(item.price)} VNĐ</p>
                                                <h1>Số lượng mua: {item.soLuong}</h1>
                                            </div>
                                            <div className="GioHangChiTiet__trai__danhsach__item__thongtin__duoi">
                                                <div className="GioHangChiTiet__trai__danhsach__item__thongtin__duoi__trai">
                                                    <div className="GioHangChiTiet__trai__danhsach__item__thongtin__duoi__trai__tacgia">
                                                        <h1>Tác giả</h1>
                                                        <p>{item.author}</p>
                                                    </div>
                                                    <div className="GioHangChiTiet__trai__danhsach__item__thongtin__duoi__trai__nam">
                                                        <h1>Năm</h1>
                                                        <p>{item.namXuatBan}</p>
                                                    </div>
                                                </div>
                                                <div className="GioHangChiTiet__trai__danhsach__item__thongtin__duoi__phai">
                                                    <div className="GioHangChiTiet__trai__danhsach__item__thongtin__duoi__phai__nut">
                                                        <ShoppingCartOutlined className='GioHangChiTiet__trai__danhsach__item__thongtin__duoi__phai__nut__icon' />
                                                        <p>Xóa khỏi giỏ</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="GioHangChiTiet__phai">
                <h1>Số lượng sách trong giỏ: {gioHang.length}</h1>

                <h2>Tổng số tiền: {doiSangPhanNghin(
                    gioHang.reduce((total, item) => {
                        return total + item.price * item.soLuong
                    }
                        , 0)
                )

                } VNĐ</h2>
                <div className="GioHangChiTiet__phai__thanhtoan">
                    Xác nhận mua hàng
                </div>
            </div>
        </div>
    )
}

export default GioHangChiTiet